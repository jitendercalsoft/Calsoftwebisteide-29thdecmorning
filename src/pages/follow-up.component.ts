
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Activity {
  id: number;
  text: string;
  time: string;
  type: 'reminder';
}

interface Task {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  due: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-follow-up',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Smart Automation & Speed-to-Lead</h1>
        <p class="text-slate-600 text-lg">
          The follow-up that never sleeps. Your 24/7 digital assistant automatically generates prioritized tasks based on real-time lead behavior.
        </p>
      </div>

      <!-- Demo Area -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row h-[700px] md:h-[650px] mb-12">
        
        <!-- Mobile Toggle Tabs -->
        <div class="md:hidden flex border-b border-slate-200 bg-slate-50">
            <button (click)="activeTab.set('controls')" class="flex-1 py-3 text-sm font-bold text-center" [class.bg-white]="activeTab() === 'controls'" [class.text-indigo-600]="activeTab() === 'controls'" [class.text-slate-500]="activeTab() !== 'controls'">Simulator Controls</button>
            <button (click)="activeTab.set('feed')" class="flex-1 py-3 text-sm font-bold text-center" [class.bg-white]="activeTab() === 'feed'" [class.text-indigo-600]="activeTab() === 'feed'" [class.text-slate-500]="activeTab() !== 'feed'">Live Feed</button>
        </div>

        <!-- Simulation Controls (Left) -->
        <div class="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col overflow-y-auto" [class.hidden]="activeTab() === 'feed' && isMobile()">
          <h3 class="font-bold text-slate-800 mb-2">Lead Simulation</h3>
          <p class="text-sm text-slate-500 mb-6">
            Trigger real-world lead actions or set manual reminders. Watch how the CRM instantly creates prioritized tasks.
          </p>
          
          <div class="space-y-4">
            <!-- Reminder Feature -->
            <div class="bg-white border border-slate-200 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-3">
                 <span class="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                 </span>
                 <div class="font-medium text-slate-900">Set a Custom Reminder</div>
              </div>
              <div class="space-y-3 text-sm">
                <input type="text" [(ngModel)]="reminderTitle" placeholder="Reminder title..." class="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:ring-1 focus:ring-indigo-500 outline-none">
                <div class="grid grid-cols-2 gap-2">
                  <input type="date" [(ngModel)]="reminderDate" class="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:ring-1 focus:ring-indigo-500 outline-none">
                  <input type="time" [(ngModel)]="reminderTime" class="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:ring-1 focus:ring-indigo-500 outline-none">
                </div>
                <button (click)="setReminder()" class="w-full bg-slate-800 text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition-colors text-xs">Set Reminder</button>
              </div>
               <p class="text-xs text-slate-400 mt-3 leading-relaxed">
                <strong>Why?</strong> Manually set reminders for important follow-ups, contract renewals, or custom tasks. The system will create a <span class="text-red-500 font-bold">High Priority</span> task.
              </p>
            </div>
          </div>
        </div>

        <!-- Live Feed (Right) -->
        <div class="flex-1 bg-white p-6 flex flex-col h-full" [class.hidden]="activeTab() === 'controls' && isMobile()">
          <div class="flex justify-between items-center mb-6">
             <h3 class="font-bold text-slate-800">Live Activity Feed</h3>
             <span class="flex h-3 w-3 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
          </div>

          <!-- Activity Stream -->
          <div class="flex-1 overflow-y-auto pr-2 space-y-4 mb-6 border-b border-slate-100 pb-4">
            @for (activity of activities(); track activity.id) {
              <div class="flex gap-3 animate-fade-in-up">
                <div class="mt-1 flex items-center justify-center h-4 w-4 shrink-0">
                   <div class="text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></div>
                </div>
                <div>
                   <p class="text-sm text-slate-900">{{ activity.text }}</p>
                   <p class="text-xs text-slate-400">{{ activity.time }}</p>
                </div>
              </div>
            } @empty {
              <p class="text-center text-slate-400 text-sm py-4">Waiting for lead activity...</p>
            }
          </div>

          <!-- Generated Tasks -->
           <h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
             Generated Tasks
           </h3>
           <div class="space-y-3">
             @for (task of tasks(); track task.id) {
                <div class="bg-indigo-50 border border-indigo-100 p-3 rounded-lg flex justify-between items-center animate-slide-in">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300">
                    <div>
                      <p class="text-sm font-semibold text-indigo-900">{{ task.title }}</p>
                      <p class="text-xs text-indigo-600">{{ task.due }}</p>
                    </div>
                  </div>
                  <span class="px-2 py-1 rounded text-xs font-bold" 
                    [class.bg-red-100]="task.priority === 'High'" 
                    [class.text-red-700]="task.priority === 'High'"
                    [class.bg-blue-100]="task.priority === 'Medium'" 
                    [class.text-blue-700]="task.priority === 'Medium'">
                    {{ task.priority }}
                  </span>
                </div>
             } @empty {
                <p class="text-sm text-slate-400 italic">No tasks generated yet.</p>
             }
           </div>

        </div>
      </div>

      <div class="border-t border-slate-200 pt-16 mb-16">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Never Miss a Follow-Up Again</h2>
          <p class="text-slate-600">
            Timely follow-ups are the difference between a lost lead and a closed deal. Calsoft CRM’s Reminders and Follow-Ups feature ensures every prospect is contacted at the right time.
          </p>
        </div>
      
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Smart Reminders -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div class="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined">notifications_active</span>
            </div>
            <h3 class="font-bold text-lg mb-2">Smart Reminders</h3>
            <p class="text-slate-600 text-sm mb-4">
              Calsoft CRM automatically reminds your team about calls, meetings, and tasks so nothing slips through the cracks.
            </p>
            <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span>Task reminders</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span>Due and overdue activity alerts</li>
            </ul>
          </div>
      
          <!-- Organized Follow-Ups -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined">checklist</span>
            </div>
            <h3 class="font-bold text-lg mb-2">Organized Follow-Ups</h3>
            <p class="text-slate-600 text-sm mb-4">
              Plan and manage follow-ups with complete clarity. Whether it’s a call, meeting, or message, every activity is tracked.
            </p>
            <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span>Schedule follow-ups in seconds</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span>Track follow-up history</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <p class="text-lg text-slate-500 mt-2">Have questions? We've got answers.</p>
        </div>
        <div class="space-y-4 max-w-4xl mx-auto">
          @for (faq of faqs; track $index; let i = $index) {
            <div class="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300">
              <button (click)="toggleFaq(i)" class="w-full flex justify-between items-center text-left p-6">
                <span class="font-bold text-lg text-slate-900">{{ faq.question }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 transition-transform duration-300" [class.rotate-180]="openFaqIndex() === i">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              @if (openFaqIndex() === i) {
                <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed animate-fade-in">
                  <p [innerHTML]="faq.answer"></p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.3s ease-out forwards;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in {
      animation: slideIn 0.3s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `]
})
export class FollowUpComponent {
  activities = signal<Activity[]>([]);
  tasks = signal<Task[]>([]);

  reminderTitle = signal('');
  reminderDate = signal('');
  reminderTime = signal('');

  openFaqIndex = signal<number | null>(null);
  activeTab = signal<'controls' | 'feed'>('controls');
  
  faqs: FaqItem[] = [
      { question: 'How do follow-up reminders work?', answer: 'Sales users manually create follow-up tasks and set the date and time. Calsoft CRM then sends reminder notifications at the scheduled time.' },
      { question: 'Are follow-up tasks created automatically?', answer: 'No. Follow-up tasks are created manually by users. This gives full control over timing and priority.' },
      { question: 'Can I reschedule a follow-up?', answer: 'Yes. You can edit, reschedule, or update follow-up tasks at any time.' },
      { question: 'Who receives notifications?', answer: 'Follow-up notifications are sent to the assigned user for the lead or task.' }
  ];
  
  setReminder() {
    if (!this.reminderTitle() || !this.reminderDate() || !this.reminderTime()) {
      return;
    }
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = new Date(`${this.reminderDate()}T${this.reminderTime()}`).toLocaleString([], {
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    this.addActivity(`Reminder set: "${this.reminderTitle()}"`, 'reminder', now);
    setTimeout(() => {
      this.addTask(this.reminderTitle(), 'High', `Due: ${formattedDate}`);
      if (this.isMobile()) {
        this.activeTab.set('feed'); // Auto switch to feed on mobile
      }
    }, 300);

    // Reset form
    this.reminderTitle.set('');
    this.reminderDate.set('');
    this.reminderTime.set('');
  }

  addActivity(text: string, type: Activity['type'], time: string) {
    this.activities.update(list => [{ id: Date.now(), text, type, time }, ...list]);
  }

  addTask(title: string, priority: 'High'|'Medium'|'Low', dueText: string = 'Due: Today') {
    this.tasks.update(list => [{ id: Date.now(), title, priority, due: dueText }, ...list]);
  }

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
