
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
     <div class="bg-slate-50 min-h-screen">
       
        <!-- Hero -->
        <div class="bg-slate-900 text-white pt-24 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
            <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-indigo-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">California Software Company Limited</span>
                <h1 class="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">32 Years of Innovation</h1>
                <p class="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Calsoft is not just another startup. We are bringing decades of enterprise experience to the modern SaaS world.
                </p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 relative z-20 pb-16 md:pb-24">
            
            <!-- Mission Card -->
            <div class="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-200 text-center mb-16 md:mb-20">
                <h2 class="text-xl md:text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p class="text-xl md:text-3xl text-indigo-600 font-medium italic max-w-4xl mx-auto leading-normal">
                    "To democratize enterprise-grade tools for the SME market, helping you <span class="underline decoration-wavy decoration-indigo-300">realize your ideas.</span>"
                </p>
            </div>

            <!-- Timeline Section -->
            <div class="mb-16 md:mb-24">
                <h2 class="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10 md:mb-16">A Legacy of Excellence</h2>
                
                <div class="relative pl-4 md:pl-0">
                    <!-- Vertical Line (Desktop: Center, Mobile: Left) -->
                    <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 md:transform md:-translate-x-1/2"></div>

                    <!-- 1992 -->
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-0 relative">
                        <div class="w-full md:w-[45%] pl-16 md:pl-0 md:pr-0 order-2 md:order-1">
                             <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 md:text-right relative">
                                <!-- Arrow Desktop -->
                                <div class="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-slate-200 transform rotate-45 -translate-y-1/2"></div>
                                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">Inception</h3>
                                <p class="text-slate-600 text-sm md:text-base">Founded in Chennai as a pioneering IT solutions provider. Started with Chemoil Group MIS services, setting the foundation for data-driven excellence.</p>
                             </div>
                        </div>
                        
                        <!-- Dot -->
                        <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[10px] md:text-base font-bold z-10 border-4 border-slate-50 shadow-lg order-1">1992</div>
                        
                        <div class="w-full md:w-[45%] order-3"></div>
                    </div>

                    <!-- 2000 -->
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-0 relative">
                        <div class="w-full md:w-[45%] order-3 md:order-1"></div>
                        
                        <!-- Dot -->
                        <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[10px] md:text-base font-bold z-10 border-4 border-slate-50 shadow-lg order-1">2000</div>
                        
                        <div class="w-full md:w-[45%] pl-16 md:pl-0 order-2 md:order-3">
                            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
                                <!-- Arrow Desktop -->
                                <div class="hidden md:block absolute top-1/2 -left-2 w-4 h-4 bg-white border-l border-b border-slate-200 transform rotate-45 -translate-y-1/2"></div>
                                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">Enterprise Foundation</h3>
                                <p class="text-slate-600 text-sm md:text-base">Established core enterprise frameworks. A significant milestone representing our commitment to transparency and governance.</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2005 -->
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-0 relative">
                        <div class="w-full md:w-[45%] pl-16 md:pl-0 order-2 md:order-1">
                            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 md:text-right relative">
                                <div class="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-slate-200 transform rotate-45 -translate-y-1/2"></div>
                                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">Global Expansion</h3>
                                <p class="text-slate-600 text-sm md:text-base">Opened offices in Dubai and acquired US entities, establishing a true global footprint to serve international markets.</p>
                            </div>
                        </div>
                        
                        <!-- Dot -->
                        <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[10px] md:text-base font-bold z-10 border-4 border-slate-50 shadow-lg order-1">2005</div>
                        
                        <div class="w-full md:w-[45%] order-3"></div>
                    </div>

                    <!-- Today -->
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                        <div class="w-full md:w-[45%] order-3 md:order-1"></div>
                        
                        <!-- Dot -->
                        <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-[8px] md:text-xs font-bold z-10 border-4 border-slate-50 shadow-lg order-1">NOW</div>
                        
                        <div class="w-full md:w-[45%] pl-16 md:pl-0 order-2 md:order-3">
                            <div class="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 relative">
                                <div class="hidden md:block absolute top-1/2 -left-2 w-4 h-4 bg-white border-l border-b border-indigo-100 transform rotate-45 -translate-y-1/2"></div>
                                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">The SaaS Era</h3>
                                <p class="text-slate-600 mb-4 text-sm md:text-base">Under the leadership of <strong>Dr. Mahalingam Vasudevan</strong>, Calsoft pivots to product-led growth with Calsoft CRM.</p>
                                <span class="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Product-Led Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats (Horizontal Scroll Mobile) -->
            
            <!-- Swipe Hint for Mobile -->
            <div class="md:hidden flex justify-end mb-2 px-4">
                <span class="inline-flex items-center gap-1 text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-full border border-slate-200">
                    Swipe <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
            </div>

            <div class="flex flex-nowrap overflow-x-auto gap-8 mb-16 md:mb-20 border-y border-slate-200 py-8 md:py-12 bg-white rounded-xl shadow-sm px-8 justify-between md:grid md:grid-cols-4 md:overflow-visible">
                <div class="text-center min-w-[100px]">
                    <div class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">1992</div>
                    <div class="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wide">Year Founded</div>
                </div>
                <div class="text-center min-w-[100px]">
                    <div class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">2000+</div>
                    <div class="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wide">Customers</div>
                </div>
                 <div class="text-center min-w-[100px]">
                    <div class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">Global</div>
                    <div class="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wide">Presence</div>
                </div>
                 <div class="text-center min-w-[100px]">
                    <div class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">SaaS</div>
                    <div class="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wide">Focus</div>
                </div>
            </div>

            <!-- Target Audience (Horizontal Scroll Mobile) -->
            <div class="text-center mb-12">
                 <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12">Built For</h2>
                 
                 <!-- Swipe Hint for Mobile -->
                 <div class="md:hidden flex justify-end mb-2 px-4">
                    <span class="inline-flex items-center gap-1 text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-full border border-slate-200">
                        Swipe <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                 </div>

                 <div class="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-8 text-left pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                     <div class="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm min-w-[75vw] md:min-w-0 snap-center">
                         <div class="w-12 h-12 bg-blue-50 rounded-lg shadow-sm flex items-center justify-center text-blue-600 mb-4 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                         </div>
                         <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-2">Startups</h3>
                         <p class="text-sm md:text-base text-slate-600">Agile tools that scale from 1 to 100 users without breaking the bank.</p>
                     </div>
                     <div class="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm min-w-[75vw] md:min-w-0 snap-center">
                         <div class="w-12 h-12 bg-indigo-50 rounded-lg shadow-sm flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                         </div>
                         <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-2">SMBs</h3>
                         <p class="text-sm md:text-base text-slate-600">Enterprise capabilities like workflow automation, democratized for small business.</p>
                     </div>
                     <div class="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm min-w-[75vw] md:min-w-0 snap-center">
                         <div class="w-12 h-12 bg-purple-50 rounded-lg shadow-sm flex items-center justify-center text-purple-600 mb-4 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
                         </div>
                         <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-2">Mid-Market</h3>
                         <p class="text-sm md:text-base text-slate-600">Robust reporting, security, and integration for growing sales organizations.</p>
                     </div>
                 </div>
            </div>

         </div>
     </div>
  `
})
export class AboutComponent {}
