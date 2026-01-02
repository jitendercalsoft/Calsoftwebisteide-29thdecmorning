
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">Enterprise Tools, <span class="text-indigo-600">Democratized.</span></h1>
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We believe every Startup and SMB deserves the same powerful tools as the Fortune 500. Calsoft CRM helps you realize your ideas with high-velocity sales features.
        </p>
      </div>

      <div class="space-y-20 md:space-y-32">
        
        <!-- Feature 1: Visual Deals Pipeline -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
          <div class="flex-1 space-y-6 md:space-y-8">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M16 7v7"/><path d="M12 7v7"/></svg>
            </div>
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Visual Pipeline & Forecasting</h2>
              <h3 class="text-lg md:text-xl font-medium text-indigo-600">"See Your Success Before It Happens."</h3>
            </div>
            <div class="prose text-slate-600 leading-relaxed text-sm md:text-base">
              <p class="mb-4">
                Stop managing your sales process in messy spreadsheets. Calsoft CRM provides a crystal-clear, <strong>Kanban-style board</strong> that visualizes every active deal in real-time. Move opportunities through stages with a simple drag-and-drop interface.
              </p>
              <p>
                Our <strong>AI-driven "Rotting Deal" indicators</strong> automatically flag opportunities that have gone stagnant, prompting your team to re-engage before it's too late. Combined with <strong>weighted forecasting</strong>, you'll have a surgical prediction of your monthly revenue based on actual stage probabilities, not gut feelings.
              </p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Drag & Drop Simplicity</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Intuitive interface requiring zero training to master.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Rotting Deal Alerts</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Visual cues for deals inactive for >7 days to prevent churn.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Precision Forecasting</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Calculate expected revenue using customizable stage weighting.</span>
                </div>
              </li>
            </ul>
            <div class="pt-4">
              <a routerLink="/pipeline" class="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-200 hover:-translate-y-1 text-sm md:text-base">
                Explore Pipeline Features <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div class="flex-1 bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 w-full">
             <!-- Abstract Visual -->
             <div class="flex flex-col gap-4">
                <div class="flex justify-between items-end border-b border-indigo-100 pb-4 mb-4">
                   <div>
                     <span class="block text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">Projected Revenue</span>
                     <span class="text-2xl md:text-4xl font-extrabold text-slate-900">$124,500</span>
                   </div>
                   <span class="text-[10px] md:text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">+12% vs Target</span>
                </div>
                <div class="grid grid-cols-3 gap-2 md:gap-4 h-48 md:h-64 items-end">
                   <div class="w-full flex flex-col items-center gap-2">
                     <div class="text-[10px] md:text-xs font-bold text-indigo-900">Qualify</div>
                     <div class="bg-indigo-200 h-[60%] rounded-t-xl w-full border-t border-x border-white/50 shadow-sm relative group/bar">
                        <div class="absolute inset-0 bg-indigo-400 opacity-0 group-hover/bar:opacity-20 transition-opacity rounded-t-xl"></div>
                     </div>
                   </div>
                   <div class="w-full flex flex-col items-center gap-2">
                     <div class="text-[10px] md:text-xs font-bold text-indigo-900">Proposal</div>
                     <div class="bg-indigo-400 h-[80%] rounded-t-xl w-full border-t border-x border-white/50 shadow-sm relative group/bar">
                        <div class="absolute inset-0 bg-indigo-600 opacity-0 group-hover/bar:opacity-20 transition-opacity rounded-t-xl"></div>
                     </div>
                   </div>
                   <div class="w-full flex flex-col items-center gap-2">
                     <div class="text-[10px] md:text-xs font-bold text-indigo-900">Negotiation</div>
                     <div class="bg-indigo-600 h-[40%] rounded-t-xl w-full relative border-t border-x border-white/50 shadow-sm">
                        <div class="absolute -top-3 -right-3 w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full border-2 border-white animate-pulse shadow-md" title="Action Required"></div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <!-- Feature 2: Automated Follow-Up -->
        <div class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center group">
          <div class="flex-1 space-y-6 md:space-y-8">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
            </div>
            <div>
               <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Smart Automation & Speed-to-Lead</h2>
               <h3 class="text-lg md:text-xl font-medium text-blue-600">"The 24/7 Digital Sales Assistant."</h3>
            </div>
            <div class="prose text-slate-600 leading-relaxed text-sm md:text-base">
              <p class="mb-4">
                In modern sales, speed is everything. Calsoft CRM acts as your tireless digital assistant, triggering <strong>instant automated responses</strong> the second a lead interacts with your website, pricing page, or social ads.
              </p>
              <p>
                Never rely on memory again. Our system generates intelligent daily task lists for your reps based on lead behavior. Plus, with <strong>long-tail drip nurturing</strong>, "cold" leads are automatically placed into educational email sequences that keep your brand top-of-mind.
              </p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Instant Web Triggers</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Send emails or alert reps immediately upon ad clicks or site visits.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Smart Task Generation</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Daily prioritized to-do lists that focus on high-intent leads.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Automated Nurturing</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Keep prospects warm for months with zero manual effort.</span>
                </div>
              </li>
            </ul>
             <div class="pt-4">
              <a routerLink="/follow-up" class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-200 hover:-translate-y-1 text-sm md:text-base">
                See Automation Demo <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
           <div class="flex-1 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center w-full">
             <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 w-full max-w-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8"></div>
                
                <div class="flex items-center gap-4 mb-6 border-b border-slate-50 pb-4 relative z-10">
                   <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shadow-sm">✓</div>
                   <div>
                     <div class="font-bold text-slate-900 text-base md:text-lg">New Task</div>
                     <div class="text-xs md:text-sm text-slate-500">Call John Doe (Pricing)</div>
                   </div>
                   <div class="ml-auto text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded uppercase tracking-wide">High Priority</div>
                </div>
                
                <div class="flex items-center gap-4 relative z-10">
                   <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">✉</div>
                   <div>
                     <div class="font-bold text-slate-900 text-base md:text-lg">Email Sent</div>
                     <div class="text-xs md:text-sm text-slate-500">Welcome Sequence #1</div>
                   </div>
                   <div class="ml-auto text-[10px] md:text-xs font-medium text-slate-400">Just now</div>
                </div>
             </div>
          </div>
        </div>

         <!-- Feature 3: Sales Sequencing -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
          <div class="flex-1 space-y-6 md:space-y-8">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
               <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Multi-Channel Sequencing</h2>
               <h3 class="text-lg md:text-xl font-medium text-purple-600">"Standardize Your Winning Formula."</h3>
            </div>
            <div class="prose text-slate-600 leading-relaxed text-sm md:text-base">
              <p class="mb-4">
                Great sales teams don't improvise; they follow a process. Calsoft CRM allows you to build <strong>repeatable, high-converting cadences</strong> that seamlessly blend emails, phone calls, and WhatsApp messages into a single workflow.
              </p>
              <p>
                Our intelligent <strong>engagement logic</strong> ensures you never look like a robot. The moment a prospect replies to an email or answers a call, the sequence automatically stops, allowing your rep to take over.
              </p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Omnichannel Outreach</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Combine Email, Call tasks, and WhatsApp for maximum reach.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Smart Stop Logic</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Prevents awkward automated messages after a lead connects.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">A/B Testing Ready</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Easily clone and tweak sequences to find the best performing copy.</span>
                </div>
              </li>
            </ul>
             <div class="pt-4">
              <a routerLink="/sequencing" class="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-200 hover:-translate-y-1 text-sm md:text-base">
                Build a Sequence <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div class="flex-1 bg-gradient-to-br from-purple-50 to-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 w-full">
             <div class="flex flex-col gap-6 items-center">
               <div class="w-full md:w-72 bg-white p-5 rounded-xl border-l-4 border-blue-500 shadow-md text-center font-semibold text-slate-700 relative hover:scale-105 transition-transform">
                 <div class="text-xs text-slate-400 uppercase tracking-widest mb-1">Step 1</div>
                 Introduction Email
                 <div class="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-300 rounded-full z-10"></div>
               </div>
               <div class="h-10 border-l-2 border-dashed border-slate-300"></div>
               <div class="w-full md:w-72 bg-white p-5 rounded-xl border-l-4 border-green-500 shadow-md text-center font-semibold text-slate-700 relative hover:scale-105 transition-transform">
                 <div class="text-xs text-slate-400 uppercase tracking-widest mb-1">Step 2</div>
                 Phone Call Task
                 <div class="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-300 rounded-full z-10"></div>
               </div>
               <div class="h-10 border-l-2 border-dashed border-slate-300"></div>
               <div class="w-full md:w-72 bg-white p-5 rounded-xl border-l-4 border-emerald-500 shadow-md text-center font-semibold text-slate-700 relative hover:scale-105 transition-transform">
                 <div class="text-xs text-slate-400 uppercase tracking-widest mb-1">Step 3</div>
                 WhatsApp Nudge
               </div>
             </div>
          </div>
        </div>

        <!-- Feature 4: Real-Time Reports -->
        <div class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center group">
          <div class="flex-1 space-y-6 md:space-y-8">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <div>
               <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Executive Analytics</h2>
               <h3 class="text-lg md:text-xl font-medium text-orange-600">"Data That Drives Dominance."</h3>
            </div>
            <div class="prose text-slate-600 leading-relaxed text-sm md:text-base">
              <p class="mb-4">
                Gut feelings don't scale—data does. Calsoft CRM gives you total visibility into your sales performance with <strong>real-time executive dashboards</strong>. Move beyond vanity metrics and track what matters: revenue velocity, conversion rates, and individual rep performance.
              </p>
              <p>
                Our <strong>Bottleneck Analysis</strong> tool helps you pinpoint exactly where deals are getting stuck in the funnel, allowing you to optimize your sales scripts or pricing strategy to fix leaks.
              </p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Comprehensive KPIs</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Track Win Rate, Avg Deal Size, and Sales Cycle Length instantly.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Bottleneck Detection</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Identify stages with high drop-off rates to improve coaching.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Activity Tracking</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Monitor call volume and email output per representative.</span>
                </div>
              </li>
            </ul>
             <div class="pt-4">
              <a routerLink="/reports" class="inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-200 hover:-translate-y-1 text-sm md:text-base">
                View Sample Reports <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div class="flex-1 bg-gradient-to-br from-orange-50 to-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 w-full">
             <div class="bg-white p-6 rounded-xl shadow-inner border border-slate-50">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-orange-50 h-24 md:h-32 rounded-xl border border-orange-100 flex flex-col items-center justify-center p-4 text-center">
                    <span class="text-orange-600 font-extrabold text-2xl md:text-3xl">32%</span>
                    <span class="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Win Rate</span>
                    <span class="text-[9px] md:text-[10px] text-green-600 mt-2">↑ 4% vs Last Month</span>
                  </div>
                  <div class="bg-blue-50 h-24 md:h-32 rounded-xl border border-blue-100 flex flex-col items-center justify-center p-4 text-center">
                    <span class="text-blue-600 font-extrabold text-2xl md:text-3xl">14d</span>
                    <span class="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Sales Cycle</span>
                    <span class="text-[9px] md:text-[10px] text-green-600 mt-2">↓ 2 days (Faster)</span>
                  </div>
                </div>
                <div class="bg-slate-50 h-32 md:h-40 rounded-xl border border-slate-100 w-full relative overflow-hidden flex items-end justify-around pb-0 px-4">
                   <div class="w-12 h-[30%] bg-slate-300 rounded-t-md relative group"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">Q1</div></div>
                   <div class="w-12 h-[50%] bg-slate-400 rounded-t-md relative group"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">Q2</div></div>
                   <div class="w-12 h-[80%] bg-orange-500 rounded-t-md relative group shadow-lg"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-orange-600">Q3</div></div>
                   <div class="w-12 h-[60%] bg-slate-400 rounded-t-md relative group"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">Q4</div></div>
                </div>
             </div>
          </div>
        </div>

         <!-- Feature 5: WhatsApp Integration -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
          <div class="flex-1 space-y-6 md:space-y-8">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </div>
            <div>
               <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">WhatsApp Business Hub</h2>
               <h3 class="text-lg md:text-xl font-medium text-green-600">"Close Deals Where Conversation Happens."</h3>
            </div>
            <div class="prose text-slate-600 leading-relaxed text-sm md:text-base">
              <p class="mb-4">
                Email open rates are dropping, but WhatsApp is nearly 98%. Meet your customers in their comfort zone with our <strong>WhatsApp Business API integration</strong>.
              </p>
              <p>
                Deploy <strong>no-code chatbots</strong> to answer FAQs and qualify leads 24/7. Build custom conversation flows to guide users, collect information, and route high-value leads to your sales team automatically.
              </p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Custom Bot Flows</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Design tailored conversations to qualify leads automatically.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">No-Code Chatbots</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Answer common questions and handle inquiries instantly, 24/7.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                <div>
                  <strong class="text-slate-900 block text-sm md:text-base">Social Ad Capture</strong>
                  <span class="text-slate-600 text-xs md:text-sm">Auto-import leads from FB/Instagram "Click to WhatsApp" ads.</span>
                </div>
              </li>
            </ul>
             <div class="pt-4">
              <a routerLink="/whatsapp" class="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-lg shadow-green-200 hover:-translate-y-1 text-sm md:text-base">
                Try WhatsApp Demo <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div class="flex-1 bg-gradient-to-br from-green-50 to-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center w-full">
             <div class="bg-white w-full max-w-xs md:w-80 rounded-2xl border border-slate-200 shadow-lg overflow-hidden relative">
                <div class="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <div class="bg-[#075e54] h-16 flex items-center px-4 justify-between shadow-md relative z-10">
                  <div class="flex items-center gap-3">
                     <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">JD</div>
                     <div>
                        <div class="text-white font-bold text-sm">John Doe</div>
                        <div class="text-green-100 text-xs">online</div>
                     </div>
                  </div>
                  <div class="h-6 w-6 text-white/80"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div>
                </div>
                <div class="bg-[#e5ddd5] h-64 md:h-80 p-4 space-y-4 overflow-hidden relative">
                   <!-- Chat BG Pattern opacity -->
                   <div class="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                   
                   <div class="bg-white p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-xs shadow-sm relative z-10">
                      Hi! Do you have enterprise pricing available for the CRM?
                      <span class="block text-[10px] text-slate-400 text-right mt-1">10:42 AM</span>
                   </div>
                   <div class="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none self-end ml-auto max-w-[85%] text-xs shadow-sm relative z-10">
                      <p class="mb-2">Yes we do! The Enterprise plan includes full API access and 24/7 support.</p>
                      <div class="mt-2 text-blue-600 font-medium cursor-pointer text-center bg-white/70 py-1 rounded">Talk to Specialist</div>
                      <span class="block text-[10px] text-green-800 text-right mt-1">10:43 AM ✓✓</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class FeaturesComponent {}
