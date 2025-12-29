import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: number; // in minutes
  image: string;
  excerpt: string;
  featured?: boolean;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  template: `
    <div class="bg-slate-50">
      <div class="pt-10 pb-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-slate-900 mb-4">The Calsoft CRM Blog</h1>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Actionable sales advice, industry trends, and product updates to help you grow your business.
          </p>
        </div>

        <!-- Featured Post -->
        @if (featuredPost) {
          <div class="mb-16 group cursor-pointer">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div class="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img [src]="featuredPost.image" alt="{{ featuredPost.title }}" class="w-full h-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-300">
              </div>
              <div class="py-4">
                <span class="text-sm font-bold text-indigo-600 uppercase">{{ featuredPost.category }}</span>
                <h2 class="text-3xl font-bold text-slate-900 mt-2 mb-4 group-hover:text-indigo-700 transition-colors">{{ featuredPost.title }}</h2>
                <p class="text-slate-600 text-lg leading-relaxed mb-6">{{ featuredPost.excerpt }}</p>
                <div class="flex items-center gap-4">
                  <img [src]="featuredPost.authorImage" alt="{{ featuredPost.author }}" class="w-12 h-12 rounded-full object-cover">
                  <div>
                    <p class="font-bold text-slate-900">{{ featuredPost.author }}</p>
                    <p class="text-sm text-slate-500">{{ featuredPost.date }} · {{ featuredPost.readTime }} min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        <!-- Blog Grid -->
        <h3 class="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">More Articles</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of otherPosts; track post.id) {
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer flex flex-col">
              <div class="overflow-hidden">
                <img [src]="post.image" alt="{{ post.title }}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              </div>
              <div class="p-6 flex flex-col flex-1">
                <span class="text-xs font-bold text-indigo-600 uppercase">{{ post.category }}</span>
                <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3 flex-1 group-hover:text-indigo-700 transition-colors">{{ post.title }}</h3>
                <p class="text-slate-600 text-sm mb-6 flex-1">{{ post.excerpt }}</p>
                <div class="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                  <img [src]="post.authorImage" alt="{{ post.author }}" class="w-10 h-10 rounded-full object-cover">
                  <div>
                    <p class="font-semibold text-slate-800 text-sm">{{ post.author }}</p>
                    <p class="text-xs text-slate-500">{{ post.date }} · {{ post.readTime }} min read</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        
        <!-- Newsletter CTA -->
        <div class="mt-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
           <h2 class="text-3xl font-bold mb-4">Get Sales Insights Delivered</h2>
           <p class="max-w-xl mx-auto opacity-90 mb-8">Join our newsletter for weekly tips, strategies, and success stories from top-performing sales teams.</p>
           <form class="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
             <input type="email" placeholder="Enter your email" class="flex-1 px-5 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-white outline-none">
             <button type="submit" class="bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">Subscribe</button>
           </form>
        </div>
      </div>
    </div>
  `,
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      id: 1,
      title: '5 Strategies to Close Deals Faster in 2024',
      category: 'Sales Strategy',
      author: 'Jane Doe',
      authorImage: 'https://picsum.photos/seed/jane/100/100',
      date: 'July 15, 2024',
      readTime: 6,
      image: 'https://picsum.photos/seed/strategy/800/600',
      excerpt: 'Learn the top techniques high-performing sales teams use to shorten their sales cycles and increase conversion rates. From lead qualification to negotiation tactics.',
      featured: true
    },
    {
      id: 2,
      title: 'How to Build a High-Converting Sales Pipeline',
      category: 'CRM Basics',
      author: 'John Smith',
      authorImage: 'https://picsum.photos/seed/johns/100/100',
      date: 'July 10, 2024',
      readTime: 8,
      image: 'https://picsum.photos/seed/pipeline-build/800/600',
      excerpt: 'A step-by-step guide to designing a sales pipeline that reflects your customer\'s journey and helps you forecast revenue with accuracy.'
    },
    {
      id: 3,
      title: 'The Rise of Conversational Selling via WhatsApp',
      category: 'Industry Trends',
      author: 'Maria Garcia',
      authorImage: 'https://picsum.photos/seed/maria/100/100',
      date: 'July 5, 2024',
      readTime: 5,
      image: 'https://picsum.photos/seed/whatsapp-trends/800/600',
      excerpt: 'Discover why customers prefer instant messaging and how to integrate WhatsApp into your sales process to close deals in real-time.'
    },
    {
      id: 4,
      title: 'Automating Follow-ups Without Sounding Like a Robot',
      category: 'Sales Automation',
      author: 'David Chen',
      authorImage: 'https://picsum.photos/seed/david/100/100',
      date: 'June 28, 2024',
      readTime: 7,
      image: 'https://picsum.photos/seed/automation-robot/800/600',
      excerpt: 'Learn how to use sales sequencing and smart triggers to personalize your automated outreach, ensuring you stay human and relevant.'
    },
    {
      id: 5,
      title: 'Calsoft CRM Product Update: Real-Time Analytics',
      category: 'Product Updates',
      author: 'The Calsoft Team',
      authorImage: 'https://i.pravatar.cc/100?u=calsoft',
      date: 'June 22, 2024',
      readTime: 4,
      image: 'https://picsum.photos/seed/analytics-update/800/600',
      excerpt: 'A deep dive into our new executive dashboards. Track KPIs, identify bottlenecks, and get a 360-degree view of your sales performance.'
    },
    {
      id: 6,
      title: 'Using Lead Scoring to Prioritize Your Hottest Leads',
      category: 'Lead Management',
      author: 'Emily White',
      authorImage: 'https://picsum.photos/seed/emily/100/100',
      date: 'June 15, 2024',
      readTime: 9,
      image: 'https://picsum.photos/seed/lead-scoring/800/600',
      excerpt: 'Stop wasting time on cold leads. This guide explains how to set up a lead scoring system to focus your team\'s efforts on prospects ready to buy.'
    }
  ];

  featuredPost: BlogPost | undefined = this.posts.find(p => p.featured);
  otherPosts: BlogPost[] = this.posts.filter(p => !p.featured);
}