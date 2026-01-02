
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-partner',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="bg-slate-50">
      <!-- Hero Section -->
      <header class="relative bg-slate-900 pt-24 pb-20 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Partner With Calsoft
          </h1>
          <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Grow with a Trusted Software Brand. Offer proven CRM, ERP, POS, or eCommerce solutions without building them from scratch.
          </p>
          <button (click)="scrollToForm()" class="px-8 py-4 bg-[#ff5c35] text-white rounded-lg text-base font-bold hover:bg-[#e04824] transition-all shadow-lg active:translate-y-px">
            Become a Partner
          </button>
        </div>
      </header>
      
      <!-- Trusted Brands (Horizontal Scroll) -->
      <div class="bg-white py-8 md:py-12 border-b border-slate-200 overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by a network of high-growth partners</p>
            <div class="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-8 md:gap-12 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 text-slate-500 opacity-70">
                <span class="text-xl md:text-2xl font-semibold font-serif italic shrink-0">GrowthLeap</span>
                <span class="text-xl md:text-2xl font-semibold tracking-wide shrink-0">Innovatech</span>
                <span class="text-xl md:text-2xl font-semibold font-mono shrink-0">Digital Nexus</span>
                <span class="text-xl md:text-2xl font-semibold shrink-0">ScaleUp</span>
                <span class="text-xl md:text-2xl font-semibold tracking-tighter shrink-0">MarketMinds</span>
            </div>
        </div>
      </div>

      <!-- Program Overview (Horizontal Scroll on Mobile) -->
      <section class="py-12 md:py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10 md:mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Program Overview</h2>
            </div>
            
            <div class="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 text-center">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-w-[70vw] md:min-w-0 snap-center">
                    <div class="text-4xl md:text-5xl font-extrabold text-[#ff5c35] mb-2">50%</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">Commission Rate</h3>
                    <p class="text-sm text-slate-500">Earn a 50% commission on every qualified sale for the first 12 months.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-w-[70vw] md:min-w-0 snap-center">
                    <div class="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">90</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">Day Payment Window</h3>
                    <p class="text-sm text-slate-500">Get paid when someone you refer becomes a customer within 90 days.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-w-[70vw] md:min-w-0 snap-center">
                    <div class="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">Suite</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">Customizable Products</h3>
                    <p class="text-sm text-slate-500">Promote a flexible, scalable platform tailored for various business needs.</p>
                </div>
            </div>
        </div>
      </section>

      <!-- OEM Section -->
      <section class="py-12 md:py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div class="order-2 md:order-1">
                <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">OEMs Using Calsoft the Right Way!</h2>
                <p class="text-slate-600 leading-relaxed text-sm md:text-base">
                    From embedding our CRM, POS, or ERP into their product stack to offering white-labeled platforms, OEMs are leveraging Calsoft to accelerate delivery, cut dev costs, and scale faster, all while keeping their brand in front.
                </p>
            </div>
            <div class="order-1 md:order-2">
                <img class="rounded-lg shadow-xl w-full" src="https://www.calsoftgroup.com/ecom-gateway/ecom-svc-core-1.0-SNAPSHOT/api/core/download?fileName=/home/omguser.png" alt="OEM Solutions Diagram">
            </div>
        </div>
      </section>

      <!-- Who's a Good Fit? (Horizontal Scroll Mobile) -->
      <section class="py-12 md:py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Who’s a Good Fit?</h2>
                <p class="text-slate-600 text-sm md:text-base">Our Partner program is ideal for industry associations, publishers, and agencies eager to promote Calsoft’s solutions.</p>
            </div>
            
            <div class="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <!-- Influencers -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[70vw] md:min-w-0 snap-center h-full">
                    <h3 class="font-bold text-slate-900 mb-2">Influencers & Publishers</h3>
                    <p class="text-sm text-slate-600">Share our products with your community and watch your commissions grow.</p>
                </div>
                 <!-- Agencies -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[70vw] md:min-w-0 snap-center h-full">
                    <h3 class="font-bold text-slate-900 mb-2">Digital Marketing Agencies</h3>
                    <p class="text-sm text-slate-600">Empower your clients by implementing our streamlined digital solutions.</p>
                </div>
                 <!-- Hosting -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[70vw] md:min-w-0 snap-center h-full">
                    <h3 class="font-bold text-slate-900 mb-2">Hosting Providers</h3>
                    <p class="text-sm text-slate-600">Boost customer satisfaction with powerful add-ons for your clients.</p>
                </div>
                 <!-- Associations -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[70vw] md:min-w-0 snap-center h-full">
                    <h3 class="font-bold text-slate-900 mb-2">Industry Associations</h3>
                    <p class="text-sm text-slate-600">Deliver greater value and help your members digitize their workflows.</p>
                </div>
            </div>
        </div>
      </section>
      
      <!-- Benefits Grid (Horizontal Scroll Mobile) -->
      <section class="py-12 md:py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10 md:mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Benefits of Becoming a Partner</h2>
            </div>
            
            <div class="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 md:p-0 bg-slate-50 md:bg-white rounded-xl md:rounded-none border md:border-none border-slate-100 min-w-[75vw] md:min-w-0 snap-center text-center md:text-left">
                    <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-3xl">autorenew</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">Recurring Revenue</h4>
                        <p class="text-sm text-slate-500 mt-1">Earn residual income for as long as your referred clients stay active.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 md:p-0 bg-slate-50 md:bg-white rounded-xl md:rounded-none border md:border-none border-slate-100 min-w-[75vw] md:min-w-0 snap-center text-center md:text-left">
                    <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-3xl">account_balance_wallet</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">No Investment Needed</h4>
                        <p class="text-sm text-slate-500 mt-1">Start earning without any upfront costs or the need to manage stock.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 md:p-0 bg-slate-50 md:bg-white rounded-xl md:rounded-none border md:border-none border-slate-100 min-w-[75vw] md:min-w-0 snap-center text-center md:text-left">
                    <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-3xl">preview</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">Free Sales Tools</h4>
                        <p class="text-sm text-slate-500 mt-1">Utilize our marketing materials and product demos to help you sell effectively.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 md:p-0 bg-slate-50 md:bg-white rounded-xl md:rounded-none border md:border-none border-slate-100 min-w-[75vw] md:min-w-0 snap-center text-center md:text-left">
                    <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-3xl">handshake</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">Zero Commitment</h4>
                        <p class="text-sm text-slate-500 mt-1">Join a flexible program with no binding contracts or minimum sales quotas.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 md:p-0 bg-slate-50 md:bg-white rounded-xl md:rounded-none border md:border-none border-slate-100 min-w-[75vw] md:min-w-0 snap-center text-center md:text-left">
                    <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-3xl">lightbulb</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">Flexible Opportunities</h4>
                        <p class="text-sm text-slate-500 mt-1">Choose how you want to partner, from referrals to white-label solutions.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 md:p-0 bg-slate-50 md:bg-white rounded-xl md:rounded-none border md:border-none border-slate-100 min-w-[75vw] md:min-w-0 snap-center text-center md:text-left">
                    <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-3xl">sell</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">Exclusive Discounts</h4>
                        <p class="text-sm text-slate-500 mt-1">Access special pricing on Calsoft products for your own use and for your clients.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <!-- Get Started Section -->
      <section id="partner-form" class="py-16 md:py-24 bg-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Let's build something great together.</h2>
            <p class="text-base md:text-lg text-slate-600">
              Ready to take the next step? Fill out the form to initiate the partnership process.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-200">
             <!-- Form -->
             <div class="order-2 md:order-1">
                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-6">Partnership Inquiry</h3>
                <form class="space-y-4 md:space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                        <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                     <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Enter Number *</label>
                        <input type="tel" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input type="email" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                        <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Partner Category *</label>
                        <select class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all bg-white">
                            <option>Influencer / Publisher</option>
                            <option>Digital Marketing Agency</option>
                            <option>Hosting Provider</option>
                            <option>Industry / Trade Association</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-[#ff5c35] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#e04824] transition-colors shadow-md active:translate-y-px">
                        Submit Inquiry
                    </button>
                </form>
             </div>
             <!-- Steps -->
             <div class="order-1 md:order-2 bg-indigo-50 p-6 md:p-8 rounded-xl border border-indigo-100">
                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-8">Get Started</h3>
                <ol class="relative border-l border-indigo-200 space-y-10 md:space-y-12">                  
                    <li class="ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-4 ring-white">1</span>
                        <h4 class="font-semibold text-indigo-900">Application Review</h4>
                        <p class="text-sm text-slate-600">Our team reviews your company profile and potential synergies.</p>
                    </li>
                    <li class="ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-4 ring-white">2</span>
                        <h4 class="font-semibold text-indigo-900">Discovery Session</h4>
                        <p class="text-sm text-slate-600">A strategic meeting to align objectives and partnership scope.</p>
                    </li>
                    <li class="ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-4 ring-white">3</span>
                        <h4 class="font-semibold text-indigo-900">Onboarding</h4>
                        <p class="text-sm text-slate-600">Formalizing the agreement and giving you access to our ecosystem.</p>
                    </li>
                </ol>
             </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 md:py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          <div class="text-center mb-12">
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div class="space-y-4">
            @for (faq of faqs; track $index; let i = $index) {
              <div class="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all duration-300">
                <button (click)="toggleFaq(i)" class="w-full flex justify-between items-center text-left p-6">
                  <span class="font-bold text-base md:text-lg text-slate-900 pr-4">{{ faq.question }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 transition-transform duration-300" [class.rotate-180]="openFaqIndex() === i">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                @if (openFaqIndex() === i) {
                  <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                    <p [innerHTML]="faq.answer"></p>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    html { scroll-behavior: smooth; }
  `]
})
export class PartnerComponent {
  openFaqIndex = signal<number | null>(null);

  faqs: FaqItem[] = [
    { question: 'What is the Calsoft Partner Program?', answer: 'Our program allows businesses and individuals to earn commissions by promoting Calsoft\'s suite of software solutions.' },
    { question: 'How does the commission structure work?', answer: 'You earn a 50% commission on every qualified sale for the first 12 months. Payments are made for any customer who signs up within 90 days of your referral.' },
    { question: 'Who can join the program?', answer: 'We welcome digital agencies, consultants, influencers, publishers, hosting providers, and trade associations.' },
    { question: 'How do I get started?', answer: 'Simply fill out the inquiry form on this page. Our team will review your application and schedule a discovery session.' },
    { question: 'Are there any costs to join the program?', answer: 'No, the Calsoft Partner Program is completely free to join. There are no hidden fees or minimum sales requirements.' },
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }

  scrollToForm() {
    const element = document.getElementById('partner-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
