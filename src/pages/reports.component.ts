import { Component, ElementRef, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

interface Report {
  title: string;
  description: string;
}

interface ReportCategory {
  title: string;
  icon: string;
  reports: Report[];
}

interface FaqItem {
  question: string;
  answer: string;
}


@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  template: `
    <div class="relative bg-slate-50 pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
      
      <div class="mb-16 text-center max-w-3xl mx-auto">
        <span class="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">Executive Analytics</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Data That Drives Dominance</h1>
        <p class="text-slate-600 text-lg">
          Gain total visibility into sales performance, spot bottlenecks instantly, and track KPIs in real-time.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Chart 1: Revenue Forecast -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col">
           <div class="mb-4">
             <h3 class="font-bold text-slate-800">Revenue by Stage</h3>
             <p class="text-xs text-slate-500 mt-1">
               Visualizes the total value of deals currently in each stage of the pipeline.
             </p>
           </div>
           <div #barChartContainer class="w-full h-[300px] flex-1"></div>
        </div>

        <!-- Chart 2: Conversion Funnel (Mocked with simple HTML/CSS for variety) -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
           <h3 class="font-bold text-slate-800 mb-2">Pipeline Conversion Funnel</h3>
           <p class="text-xs text-slate-500 mb-6">
              Tracks the percentage of leads moving successfully to the next stage.
           </p>
           <div class="space-y-4">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Qualification
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-blue-600">
                      100 Leads
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                  <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>

              <div class="relative pt-1 px-4">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                      Proposal
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-indigo-600">
                      45 Leads (45%)
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
                  <div style="width:45%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                </div>
              </div>

              <div class="relative pt-1 px-8">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      Negotiation
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-purple-600">
                      20 Leads (20%)
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                  <div style="width:20%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
              </div>

              <div class="relative pt-1 px-12">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Closed Won
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-green-600">
                      12 Deals (12%)
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                  <div style="width:12%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
           </div>
        </div>
      </div>
      
       <!-- New Reports Section -->
      <div class="border-t border-slate-200 pt-16">
        <div class="grid md:grid-cols-12 gap-12 items-center mb-16">
            <div class="md:col-span-5 text-center md:text-left">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">A Report for Every Metric</h2>
                <p class="text-slate-600 leading-relaxed">
                   From lead generation to deal closure, every report is designed to help you optimize performance, increase conversions, and scale your sales operations effectively.
                </p>
            </div>
            <div class="md:col-span-7">
                 <!-- Illustration -->
                 <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-6">
                    <div class="w-32 h-32 bg-indigo-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-indigo-300">
                       <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div class="flex-1">
                      <div class="h-4 bg-slate-200 rounded w-3/4 mb-3 animate-pulse"></div>
                      <div class="h-2 bg-slate-100 rounded w-full mb-2 animate-pulse" style="animation-delay: 0.1s;"></div>
                      <div class="h-2 bg-slate-100 rounded w-5/6 animate-pulse" style="animation-delay: 0.2s;"></div>
                    </div>
                 </div>
            </div>
        </div>


        @for (category of reportCategories; track category.title) {
            <div class="mb-12">
                <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-4">
                    <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm" [innerHTML]="category.icon"></div>
                    <span>{{ category.title }}</span>
                </h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    @for (report of category.reports; track report.title) {
                        <div class="bg-white p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group flex items-start gap-4 hover:-translate-y-1">
                            <div class="mt-1 text-slate-300 group-hover:text-indigo-500 transition-colors">
                                <span class="material-symbols-outlined">arrow_right_alt</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-slate-900">{{ report.title }}</h4>
                                <p class="text-xs text-slate-500 mt-1 leading-relaxed">{{ report.description }}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        }
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
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `]
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('barChartContainer') barChartContainer!: ElementRef;

  openFaqIndex = signal<number | null>(null);

  faqs: FaqItem[] = [
    { question: 'Can I export the reports?', answer: 'Yes, you can export any dashboard or chart as a CSV, PDF, or Excel file for further analysis.' },
    { question: 'Is the data real-time?', answer: 'Yes, dashboards update instantly as your team moves deals, logs calls, or closes business.' },
    { question: 'Can I create custom reports?', answer: 'Enterprise plans include a custom report builder, allowing you to slice and dice your data by any custom field.' },
    { question: 'Can I schedule email reports?', answer: 'Yes, you can set up automated email delivery of key dashboards to yourself or your stakeholders on a daily, weekly, or monthly basis.' }
  ];

  reportCategories: ReportCategory[] = [
    {
      title: 'Lead & Call Reports',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      reports: [
        { title: 'Lead Call Recording Report', description: 'Review recorded calls to monitor conversation quality, ensure compliance, and improve sales pitches.' },
        { title: 'Lead Call Report', description: 'Track all inbound and outbound calls linked to leads, including call status and duration.' },
        { title: 'Lead Meeting Summary', description: 'Get a consolidated view of scheduled and completed meetings with outcomes and follow-up actions.' }
      ]
    },
    {
      title: 'Lead Source & Status Analysis',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
      reports: [
        { title: 'Lead Source Report', description: 'Analyze lead performance across different sources such as website, ads, WhatsApp, and referrals.' },
        { title: 'Lead Status Report', description: 'Monitor lead progression across stages to identify high-intent prospects and drop-offs.' },
        { title: 'Lead Type Wise Report', description: 'Segment leads based on business type, interest, or category for targeted sales strategies.' }
      ]
    },
    {
      title: 'User & Team Performance Reports',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      reports: [
        { title: 'User Wise Status Report', description: 'Track how each sales representative manages lead stages and closures.' },
        { title: 'User Wise Source Report', description: 'Evaluate which lead sources are performing best for each user.' },
        { title: 'Lead User Report', description: 'View all leads assigned to each team member in one place.' },
        { title: 'Sales Target Report', description: 'Compare assigned targets with actual achievements to track sales performance in real time.' }
      ]
    },
    {
      title: 'Location-Based Reports',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
      reports: [
        { title: 'Lead City Wise Report', description: 'Analyze lead distribution across cities to focus on high-demand locations.' },
        { title: 'Lead State Wise Report', description: 'Understand state-wise lead performance and regional growth opportunities.' },
        { title: 'User City Wise Report', description: 'Track user activity and lead handling based on city.' },
        { title: 'User State Wise Report', description: 'Monitor sales team distribution and performance across states.' }
      ]
    },
    {
      title: 'Activity & Follow-Up Reports',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>',
      reports: [
        { title: 'Follow Activity Report', description: 'Track all follow-up activities completed by your sales team.' },
        { title: 'Activity Due Report', description: 'Instantly identify pending tasks and overdue follow-ups.' },
        { title: 'Activity Upcoming Report', description: 'Plan ahead with visibility into upcoming calls, meetings, and reminders.' }
      ]
    },
    {
      title: 'Product & Form-Based Reports',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M12 18h-4"/><path d="M16 14h-8"/></svg>',
      reports: [
        { title: 'Lead Product Report', description: 'Analyze which products or services generate the highest interest and conversions.' },
        { title: 'Lead Form ID Report', description: 'Track leads generated from specific forms and campaigns.' },
        { title: 'Lead User Form ID Report', description: 'Measure form performance at a user level for better accountability.' }
      ]
    }
  ];


  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const data = [
      { stage: 'Qual', value: 50000 },
      { stage: 'Prop', value: 120000 },
      { stage: 'Neg', value: 80000 },
      { stage: 'Won', value: 200000 }
    ];

    const element = this.barChartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(element).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.2)
      .domain(data.map(d => d.stage));

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 220000]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "middle")
      .style("font-family", "Inter")
      .style("font-size", "12px")
      .style("color", "#64748b");

    svg.append('g')
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => `$${(d as number)/1000}k`))
      .selectAll("text")
      .style("font-family", "Inter")
      .style("font-size", "11px")
      .style("color", "#64748b");

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.stage)!)
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .attr('fill', '#6366f1')
      .attr('rx', 4);
      
    // Remove default axis lines for cleaner look
    svg.selectAll('.domain').remove();
    svg.selectAll('.tick line').attr('stroke', '#e2e8f0');
  }

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }
}
