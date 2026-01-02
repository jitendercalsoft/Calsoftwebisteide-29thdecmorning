
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-lead-management',
  imports: [CommonModule],
  template: `
    <div class="pt-20 pb-10 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Lead Management Software</h1>
        <p class="text-slate-600 text-base md:text-lg">
          Convert prospects into loyal customers. Calsoft CRM helps you track every lead from first click to final sale with automated capture.
        </p>
      </div>

      <!-- Visual Diagram Section -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-12 mb-12 flex flex-col items-center">
        <h3 class="text-xl font-bold text-slate-800 text-center mb-2">Capture Leads from All Channels</h3>
        <p class="text-slate-500 text-center text-sm mb-8 max-w-2xl">
          Leads from web forms, ads, marketplaces (IndiaMart, JustDial), WhatsApp, and email flow automatically into one central system.
        </p>
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-4xl">
            <!-- Sources -->
            <div class="grid grid-cols-2 gap-3 w-full md:w-1/3">
                <div class="bg-slate-50 p-2 md:p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div><span class="text-[10px] md:text-xs font-semibold">Web Forms</span></div>
                <div class="bg-slate-50 p-2 md:p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-4.44a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.88a2 2 0 0 0 2-2v-8.88Z"/><path d="M18 2h2v2h-2z"/><path d="M15 5h5"/><path d="M15 8h5"/></svg></div><span class="text-[10px] md:text-xs font-semibold">Ad Forms</span></div>
                <div class="bg-slate-50 p-2 md:p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></div><span class="text-[10px] md:text-xs font-semibold">WhatsApp</span></div>
                <div class="bg-slate-50 p-2 md:p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div><span class="text-[10px] md:text-xs font-semibold">Email</span></div>
            </div>
            <!-- Arrow -->
            <div class="text-slate-300 transform md:rotate-0 rotate-90 scale-75 md:scale-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <!-- CRM -->
            <div class="flex-shrink-0 text-center">
                 <div class="w-20 h-20 md:w-24 md:h-24 bg-[#ff5c35] rounded-full flex items-center justify-center text-white shadow-lg mb-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                 </div>
                 <span class="font-bold text-base md:text-lg text-slate-800">Calsoft CRM</span>
                 <p class="text-[10px] md:text-xs text-slate-500">Unified Lead Database</p>
            </div>
             <!-- Arrow -->
            <div class="text-slate-300 transform md:rotate-0 rotate-90 scale-75 md:scale-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <!-- Team -->
            <div class="flex flex-row md:flex-col gap-4 w-full md:w-1/3 justify-center">
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex flex-col md:flex-row items-center gap-2 text-center md:text-left flex-1"><div class="text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span class="text-xs font-semibold">Sales Team</span></div>
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex flex-col md:flex-row items-center gap-2 text-center md:text-left flex-1"><div class="text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div><span class="text-xs font-semibold">Analytics</span></div>
            </div>
        </div>
      </div>

      <!-- SEO Content Area (Horizontal Scroll on Mobile) -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-8 md:mb-10 text-center">Capture, Nurture, and Convert Like a Pro</h2>
        
        <div class="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[80vw] md:min-w-0 snap-center h-full">
             <h3 class="font-bold text-slate-900 mb-2">Organize Leads & Prioritize</h3>
             <p class="text-sm text-slate-600">Consolidate leads into a unified database. Use smart filters and auto-assignment to route opportunities instantly.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[80vw] md:min-w-0 snap-center h-full">
             <h3 class="font-bold text-slate-900 mb-2">Automate Routing & Alerts</h3>
             <p class="text-sm text-slate-600">Use round-robin distribution to assign leads. Reps get real-time notifications, and escalation rules prevent leaks.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[80vw] md:min-w-0 snap-center h-full">
             <h3 class="font-bold text-slate-900 mb-2">Engage with Multichannel Outreach</h3>
             <p class="text-sm text-slate-600">Email, call, or WhatsApp leads directly from their record. Schedule automated drip campaigns.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[80vw] md:min-w-0 snap-center h-full">
             <h3 class="font-bold text-slate-900 mb-2">One-Click Conversion</h3>
             <p class="text-sm text-slate-600">Once qualified, convert leads into deal or contact records with a single click without losing data.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[80vw] md:min-w-0 snap-center h-full">
             <h3 class="font-bold text-slate-900 mb-2">Source & Campaign ROI</h3>
             <p class="text-sm text-slate-600">Measure ROI across all channels. Know which ad campaigns or marketplaces generate qualified prospects.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[80vw] md:min-w-0 snap-center h-full">
             <h3 class="font-bold text-slate-900 mb-2">Higher Conversion Rates</h3>
             <p class="text-sm text-slate-600">Organized pipelines and multi-touch engagement significantly boost close rates.</p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16 pt-12 border-t border-slate-200">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4 max-w-4xl mx-auto">
          @for (faq of faqs; track $index; let i = $index) {
            <div class="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300">
              <button (click)="toggleFaq(i)" class="w-full flex justify-between items-center text-left p-6">
                <span class="font-bold text-base md:text-lg text-slate-900 pr-4">{{ faq.question }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 flex-shrink-0 transition-transform duration-300" [class.rotate-180]="openFaqIndex() === i">
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
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `]
})
export class LeadManagementComponent {
  openFaqIndex = signal<number | null>(null);

  faqs: FaqItem[] = [
    { question: 'Which channels can I capture leads from?', answer: 'You can automatically capture leads from web forms, Google/Facebook Ads, marketplaces like IndiaMart and JustDial, WhatsApp, and email inboxes.' },
    { question: 'How are leads assigned to my team?', answer: 'Leads can be assigned automatically using round-robin distribution or rule-based workflows based on territory, product interest, or other custom criteria.' },
    { question: 'Does the system prevent duplicate leads?', answer: 'Yes, Calsoft CRM automatically detects and provides an option to merge duplicate lead entries, ensuring a clean and accurate database.' },
    { question: 'Can I track which lead sources are most effective?', answer: 'Yes, our built-in analytics and real-time dashboards provide detailed ROI data for each lead source, helping you optimize your marketing spend.' }
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }
}
