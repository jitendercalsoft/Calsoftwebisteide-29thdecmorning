
import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

interface Feature {
  name: string;
  basic: string | boolean;
  pro: string | boolean;
  advanced: string | boolean;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  features: Feature[];
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    <div class="bg-slate-50 min-h-screen">
      
      <!-- Hero Section with increased padding for sticky header clearance -->
      <div class="relative bg-white pt-32 pb-20 border-b border-slate-200 overflow-hidden">
        <!-- Background Decor -->
         <div class="absolute inset-0 -z-10">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
            <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span class="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">Transparent Pricing</span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Plans that scale with your ambition</h1>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start for free, upgrade as you grow. No hidden fees, no credit card required to start your trial.
          </p>

          <!-- Controls -->
          <div class="flex flex-col sm:flex-row justify-center items-center gap-6 bg-white p-2 pr-6 rounded-full shadow-lg border border-slate-200 inline-flex mx-auto transition-transform hover:scale-[1.01]">
              
              <!-- Currency Toggle -->
              <div class="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                  <span class="text-sm font-bold transition-colors" [class.text-slate-900]="currency() === 'USD'" [class.text-slate-400]="currency() !== 'USD'">USD</span>
                  <button (click)="toggleCurrency()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" [class.bg-indigo-600]="currency() === 'INR'" [class.bg-slate-300]="currency() === 'USD'">
                      <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform" [class.translate-x-6]="currency() === 'INR'" [class.translate-x-1]="currency() === 'USD'"></span>
                  </button>
                  <span class="text-sm font-bold transition-colors" [class.text-slate-900]="currency() === 'INR'" [class.text-slate-400]="currency() !== 'INR'">INR</span>
              </div>

              <div class="w-px h-8 bg-slate-200 hidden sm:block"></div>

              <!-- Billing Toggle -->
              <div class="flex items-center gap-3">
                  <span class="text-sm font-medium transition-colors" [class.text-slate-900]="billing() === 'monthly'" [class.text-slate-500]="billing() !== 'monthly'">Monthly</span>
                  <button (click)="toggleBilling()" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" [class.bg-indigo-600]="billing() === 'annual'" [class.bg-slate-300]="billing() === 'monthly'">
                      <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform" [class.translate-x-6]="billing() === 'annual'" [class.translate-x-1]="billing() === 'monthly'"></span>
                  </button>
                  <span class="text-sm font-medium transition-colors" [class.text-slate-900]="billing() === 'annual'" [class.text-slate-500]="billing() !== 'annual'">
                      Annual <span class="ml-1 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 tracking-wide uppercase">Save 20%</span>
                  </span>
              </div>
          </div>
        </div>
      </div>

      <!-- Pricing Table Container -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-20">
        
        <!-- Mobile Plan Selector -->
        <div class="md:hidden flex justify-center mb-8 bg-white p-1.5 rounded-xl border border-slate-200 shadow-lg mx-auto max-w-sm sticky top-24 z-30">
            <button (click)="selectedPlan.set('basic')" class="flex-1 py-2.5 text-sm font-bold rounded-lg transition-all" [class.bg-slate-800]="selectedPlan() === 'basic'" [class.text-white]="selectedPlan() === 'basic'" [class.text-slate-500]="selectedPlan() !== 'basic'">Basic</button>
            <button (click)="selectedPlan.set('pro')" class="flex-1 py-2.5 text-sm font-bold rounded-lg transition-all" [class.bg-indigo-600]="selectedPlan() === 'pro'" [class.text-white]="selectedPlan() === 'pro'" [class.text-slate-500]="selectedPlan() !== 'pro'">Pro</button>
            <button (click)="selectedPlan.set('advanced')" class="flex-1 py-2.5 text-sm font-bold rounded-lg transition-all" [class.bg-slate-800]="selectedPlan() === 'advanced'" [class.text-white]="selectedPlan() === 'advanced'" [class.text-slate-500]="selectedPlan() !== 'advanced'">Advanced</button>
        </div>

        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 ring-1 ring-slate-900/5 pt-0 md:pt-6">
            
            <!-- Desktop Plans Header -->
            <div class="hidden md:grid grid-cols-4 divide-x divide-slate-200 bg-slate-50">
                <!-- Title Column -->
                <div class="p-8 flex flex-col justify-end bg-white md:bg-transparent">
                    <h3 class="text-2xl font-bold text-slate-900">Compare Plans</h3>
                    <p class="text-sm text-slate-500 mt-2 leading-relaxed">Select the tier that fits your sales volume. Upgrade anytime.</p>
                </div>

                <!-- Basic Plan -->
                <div class="p-8 text-center relative hover:bg-white transition-colors group">
                    <h3 class="text-lg font-bold text-slate-900">Basic (Starter)</h3>
                    <div class="mt-4 flex items-baseline justify-center text-slate-900">
                        <span class="text-4xl font-extrabold tracking-tight">{{ currentPrices().basic }}</span>
                        <span class="ml-1 text-sm font-medium text-slate-500">/user/mo</span>
                    </div>
                    <p class="mt-2 text-xs text-slate-400 font-medium uppercase tracking-wide">billed {{ billing() }}</p>
                    <button class="mt-6 w-full bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 font-bold py-3 px-4 rounded-xl transition-all shadow-sm">Get Started</button>
                </div>

                <!-- Pro Plan -->
                <div class="p-8 text-center relative bg-indigo-50/40 hover:bg-indigo-50/80 transition-colors border-t-4 border-indigo-600 md:border-t-0 md:border-t-transparent shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg ring-4 ring-white">
                        Most Popular
                    </div>
                    <h3 class="text-lg font-bold text-indigo-900">Pro (Growth)</h3>
                    <div class="mt-4 flex items-baseline justify-center text-indigo-900">
                        <span class="text-5xl font-extrabold tracking-tight">{{ currentPrices().pro }}</span>
                        <span class="ml-1 text-sm font-medium text-indigo-600">/user/mo</span>
                    </div>
                    <p class="mt-2 text-xs text-indigo-400 font-medium uppercase tracking-wide">billed {{ billing() }}</p>
                    <button class="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5">Start Free Trial</button>
                </div>

                <!-- Advanced Plan -->
                <div class="p-8 text-center relative hover:bg-white transition-colors">
                    <h3 class="text-lg font-bold text-slate-900">Advanced (Enterprise)</h3>
                    <div class="mt-4 flex items-baseline justify-center text-slate-900">
                        <span class="text-4xl font-extrabold tracking-tight">{{ currentPrices().advanced }}</span>
                        <span class="ml-1 text-sm font-medium text-slate-500">/user/mo</span>
                    </div>
                    <p class="mt-2 text-xs text-slate-400 font-medium uppercase tracking-wide">billed {{ billing() }}</p>
                    <button class="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl">Contact Sales</button>
                </div>
            </div>

            <!-- Mobile Plan Header (Dynamic) -->
            <div class="md:hidden p-8 text-center bg-slate-50 border-b border-slate-200 relative">
                 @if (selectedPlan() === 'basic') {
                    <h3 class="text-lg font-bold text-slate-900">Basic (Starter)</h3>
                    <div class="mt-4 flex items-baseline justify-center text-slate-900">
                        <span class="text-4xl font-extrabold tracking-tight">{{ currentPrices().basic }}</span>
                        <span class="ml-1 text-sm font-medium text-slate-500">/user/mo</span>
                    </div>
                    <p class="mt-2 text-xs text-slate-400 font-medium uppercase tracking-wide">billed {{ billing() }}</p>
                    <button class="mt-6 w-full bg-white border border-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl shadow-sm">Get Started</button>
                 }
                 @if (selectedPlan() === 'pro') {
                    <div class="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg ring-4 ring-white mb-4">Most Popular</div>
                    <h3 class="text-lg font-bold text-indigo-900">Pro (Growth)</h3>
                    <div class="mt-4 flex items-baseline justify-center text-indigo-900">
                        <span class="text-5xl font-extrabold tracking-tight">{{ currentPrices().pro }}</span>
                        <span class="ml-1 text-sm font-medium text-indigo-600">/user/mo</span>
                    </div>
                    <p class="mt-2 text-xs text-indigo-400 font-medium uppercase tracking-wide">billed {{ billing() }}</p>
                    <button class="mt-6 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg">Start Free Trial</button>
                 }
                 @if (selectedPlan() === 'advanced') {
                    <h3 class="text-lg font-bold text-slate-900">Advanced (Enterprise)</h3>
                    <div class="mt-4 flex items-baseline justify-center text-slate-900">
                        <span class="text-4xl font-extrabold tracking-tight">{{ currentPrices().advanced }}</span>
                        <span class="ml-1 text-sm font-medium text-slate-500">/user/mo</span>
                    </div>
                    <p class="mt-2 text-xs text-slate-400 font-medium uppercase tracking-wide">billed {{ billing() }}</p>
                    <button class="mt-6 w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl shadow-lg">Contact Sales</button>
                 }
            </div>

            <!-- Comparison Rows -->
             @for (cat of categories; track cat.id) {
                <!-- Category Header -->
                <div class="bg-slate-100/50 px-6 md:px-8 py-4 border-y border-slate-200 flex items-center gap-3 sticky top-[168px] md:static z-20 backdrop-blur-md md:backdrop-blur-none">
                    <div class="text-indigo-600 p-1.5 bg-indigo-100 rounded-lg shrink-0" [ngSwitch]="cat.id">
                         <!-- Icons -->
                         <svg *ngSwitchCase="'core'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                         <svg *ngSwitchCase="'comm'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                         <svg *ngSwitchCase="'auto'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                         <svg *ngSwitchCase="'mgmt'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                         <svg *ngSwitchCase="'integ'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                         <svg *ngSwitchCase="'soon'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                    </div>
                    <h4 class="font-bold text-slate-800 uppercase text-xs tracking-wider">{{ cat.title }}</h4>
                </div>

                <!-- Feature Rows -->
                 @for (feat of cat.features; track feat.name; let i = $index) {
                     <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-b border-slate-100 group transition-colors"
                          [class.bg-white]="i % 2 === 0"
                          [class.bg-slate-50]="i % 2 !== 0 && cat.id !== 'soon'"
                          [class.hover:bg-slate-50]="true"> 
                        
                        <!-- Feature Name (Row for Desktop, Flex Item for Mobile) -->
                        <div class="p-4 md:px-8 md:py-5 text-sm font-semibold text-slate-700 flex items-center justify-between md:justify-start gap-1.5">
                            <div class="flex items-center gap-1.5">
                                <span>{{ feat.name }}</span>
                                @if (feat.name.includes('WhatsApp')) {
                                    <div class="relative group cursor-help">
                                        <span class="material-symbols-outlined text-slate-400 text-sm">info</span>
                                        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-800 text-white text-xs p-3 rounded-lg shadow-lg z-10 hidden group-hover:block text-left font-normal normal-case leading-relaxed">
                                            WhatsApp Business API setup requires necessary business verification documents as per Meta's policy. Our team will guide you through the process.
                                        </div>
                                    </div>
                                }
                            </div>
                            
                            <!-- Mobile Value Display (Right aligned next to name) -->
                            <div class="md:hidden">
                                <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: getFeatureValue(feat, selectedPlan()) }"></ng-container>
                            </div>
                        </div>

                        <!-- Basic Value (Hidden Mobile) -->
                        <div class="hidden md:flex p-4 md:px-8 md:py-5 items-center justify-center text-center md:justify-center bg-opacity-50">
                            <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: feat.basic }"></ng-container>
                        </div>

                        <!-- Pro Value (Hidden Mobile) -->
                        <div class="hidden md:flex p-4 md:px-8 md:py-5 items-center justify-center text-center md:justify-center relative"
                             [class.bg-indigo-50]="i % 2 === 0" 
                             [class.bg-indigo-50]="i % 2 !== 0">
                             <div class="absolute inset-0 bg-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none h-full w-full"></div>
                            <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: feat.pro }"></ng-container>
                        </div>

                        <!-- Advanced Value (Hidden Mobile) -->
                        <div class="hidden md:flex p-4 md:px-8 md:py-5 items-center justify-center text-center md:justify-center">
                            <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: feat.advanced }"></ng-container>
                        </div>
                     </div>
                 }
             }
             
             <!-- Additional Users Info -->
            <div class="bg-slate-50 p-8 border-t border-slate-200 text-center">
                <p class="text-sm text-slate-600">
                    Need more than 100 users? <a href="#" class="text-indigo-600 font-bold hover:underline">Contact our Enterprise Sales</a> team for volume discounts.
                    <br class="mt-2 block md:hidden">
                    <span class="font-semibold ml-0 md:ml-4">Additional Users:</span>
                    <span class="font-bold text-slate-900">{{ currentPrices().additional }}</span>
                </p>
            </div>

        </div>
        
        <!-- FAQ Section for SEO -->
        <div class="mt-24 max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p class="text-lg text-slate-500 mt-2">Have questions? We've got answers.</p>
          </div>
          <div class="space-y-4">
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

    </div>

    <!-- Value Helper Template -->
    <ng-template #valueTemplate let-val>
        @if (val === true) {
            <div class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
        } @else if (val === false) {
             <div class="w-3 h-1 bg-slate-200 rounded-full mx-auto"></div>
        } @else if (val === '') {
             <span class="text-slate-300">-</span>
        } @else if (isString(val) && val.startsWith('No')) {
             <span class="text-slate-400 text-sm">{{ val }}</span>
        } @else {
             <span class="text-slate-700 font-semibold text-sm">{{ val }}</span>
        }
    </ng-template>
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
export class PricingComponent {
  currency = signal<'USD' | 'INR'>('INR');
  billing = signal<'monthly' | 'annual'>('annual');
  selectedPlan = signal<'basic' | 'pro' | 'advanced'>('pro');

  pricingData = {
      USD: {
          monthly: { basic: '$9', pro: '$19', advanced: '$39', additional: '$3/user' },
          annual: { basic: '$7', pro: '$15', advanced: '$31', additional: '$3/user' }
      },
      INR: {
          monthly: { basic: '₹599', pro: '₹1,299', advanced: '₹1,999', additional: '₹199/user' },
          annual: { basic: '₹479', pro: '₹1,049', advanced: '₹1,599', additional: '₹199/user' }
      }
  };

  currentPrices = computed(() => {
    return this.pricingData[this.currency()][this.billing()];
  });

  categories: Category[] = [
    {
        id: 'core',
        title: 'CORE CRM',
        icon: 'hub',
        features: [
            { name: 'User / Contacts Management', basic: 'Up to 5', pro: 'Up to 25', advanced: 'Up to 100' },
            { name: 'Import Custom Excel', basic: true, pro: true, advanced: true },
            { name: 'Smart View / Custom Grid', basic: 'Basic', pro: 'Advanced', advanced: 'Advanced' },
            { name: 'Deals Management (Opportunity)', basic: 'Basic Pipeline', pro: 'Multiple Pipelines', advanced: 'Unlimited Pipelines' },
            { name: 'Task & Activity Tracking', basic: true, pro: true, advanced: true },
            { name: 'Duplicate Management', basic: true, pro: true, advanced: true },
            { name: 'Files Upload', basic: '500 MB / user', pro: '5 GB / user', advanced: '20 GB / user' },
            { name: 'Mobile Access', basic: 'Basic App', pro: 'Full App', advanced: 'Full App' }
        ]
    },
    {
        id: 'comm',
        title: 'COMMUNICATION',
        icon: 'chat',
        features: [
            { name: 'Integrated Dialer', basic: 'Manual Log', pro: 'Click-to-Call + Recording', advanced: 'Auto Dialer + IVR' },
            { name: 'Bulk WhatsApp & Bot', basic: false, pro: 'Limited', advanced: 'Advanced Bot' },
            { name: 'Bulk Email & Templates', basic: false, pro: true, advanced: true },
            { name: 'Remainder & Notification', basic: 'Standard', pro: 'Smart Reminders', advanced: 'AI-Based Nudges' },
            { name: 'Google Meet Integration', basic: false, pro: true, advanced: true },
            { name: 'Interaction History', basic: 'Basic', pro: 'Full History', advanced: 'Full History + Audit Log' }
        ]
    },
    {
        id: 'auto',
        title: 'AUTOMATION',
        icon: 'bolt',
        features: [
            { name: 'Automated Lead Capture', basic: true, pro: true, advanced: true },
            { name: 'Automated Lead Assessment', basic: false, pro: true, advanced: true },
            { name: 'Efficient Lead Distribution', basic: false, pro: 'Round Robin', advanced: 'Advanced Logic' },
            { name: 'Workflow Automation', basic: false, pro: 'Standard (10 Rules)', advanced: 'Advanced (Unlimited)' },
            { name: 'Lead Scoring', basic: false, pro: true, advanced: true }
        ]
    },
    {
        id: 'mgmt',
        title: 'MANAGEMENT',
        icon: 'shield',
        features: [
            { name: 'Hierarchy-based Restrictions', basic: false, pro: false, advanced: 'Role Based' },
            { name: 'Location Tracking (App)', basic: false, pro: false, advanced: 'Field Force' },
            { name: 'Company Management', basic: 'Basic', pro: true, advanced: 'Parent-Child Hierarchy' },
            { name: 'Dashboard / Analytics', basic: 'Standard', pro: 'Advanced', advanced: 'Customizable BI' },
            { name: 'Reports', basic: 'Standard', pro: 'Custom Reports', advanced: 'Advanced Scheduled Reports' }
        ]
    },
    {
        id: 'integ',
        title: 'INTEGRATION',
        icon: 'integration_instructions',
        features: [
            { name: 'API and Webhooks', basic: false, pro: 'Webhooks', advanced: 'Full API Access' },
            { name: 'Native Integration', basic: false, pro: true, advanced: true },
            { name: 'Invoice / Quotation', basic: false, pro: true, advanced: true },
            { name: 'Lead imports', basic: true, pro: true, advanced: true }
        ]
    },
    {
        id: 'soon',
        title: 'COMING SOON',
        icon: 'rocket_launch',
        features: [
            { name: 'Sequencing', basic: false, pro: 'Coming Soon', advanced: 'Coming Soon' },
            { name: 'Outlook Integration', basic: false, pro: 'Coming Soon', advanced: 'Coming Soon' }
        ]
    }
  ];
  
  openFaqIndex = signal<number | null>(null);

  faqs: FaqItem[] = [
    { question: 'Can I switch plans later?', answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes will be prorated on your next billing cycle.' },
    { question: 'Is the WhatsApp API integration included?', answer: 'Yes, WhatsApp Business API integration is available on the <strong>Pro</strong> and <strong>Enterprise</strong> plans. Standard messaging costs from Meta apply.' },
    { question: 'Do you offer a free trial?', answer: 'Yes! We offer a 14-day free trial for the Pro plan. No credit card required to get started.' },
    { question: 'Can I import data from Excel or other CRMs?', answer: 'Yes, our bulk import tool allows you to map fields from CSV or Excel files directly into Calsoft CRM. We also offer migration services for Enterprise plans.' }
  ];

  toggleCurrency() {
    this.currency.update(c => c === 'USD' ? 'INR' : 'USD');
  }

  toggleBilling() {
    this.billing.update(b => b === 'monthly' ? 'annual' : 'monthly');
  }

  isString(val: any): val is string {
    return typeof val === 'string';
  }
  
  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }

  getFeatureValue(feat: Feature, plan: 'basic' | 'pro' | 'advanced'): string | boolean {
    return feat[plan];
  }
}
