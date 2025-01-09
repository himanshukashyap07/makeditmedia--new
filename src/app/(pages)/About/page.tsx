'use client';
import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import AdminPageComponent from '@/components/AdminDetails';

export default function About() {
  return (
    <div className="bg-slate-900 w-full min-h-screen text-white flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Page Title */}
      
      {/* Service Section */}
      <div className="w-full bg-slate-900 py-16 md:py-24">
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-green-400 to-gray-300/90 md:from-green-500 md:to-gray-200/70 bg-clip-text text-transparent font-semibold text-center">
              OUR SERVICES
            </h1>
          <div className=" w-full max-w-6xl px-4 sm:px-6">
            <InfiniteMovingCards items={Service} direction="right" speed="normal" />
          </div>
          <div className="w-full max-w-6xl px-4 sm:px-6">
            <InfiniteMovingCards items={Service} direction="left" speed="normal" />
          </div>
        </div>
      </div>
      {/*Portfolio*/}
      <div className="bg-slate-900">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full mb-8" />
        <AdminPageComponent />
      </div>
    </div>
  );
}

const Service = [
  {
    quote:
      "Amplify your social media impact through expert Management services. We devise captivating strategies for heightened engagement and extensive reach.",
    name: "SOCIAL MEDIA MARKETING",
    title: "Instagram, LinkedIn, and more",
  },
  {
    quote:
      "All-encompassing support for strategy, post-production, operations, and analytics, driving channel growth and success.",
    name: "360° Social MEDIA MANAGEMENT",
    title: "Linkdin ,Reddit , X , Instagram,Youtube ",
  },
  {
    quote:
      "Elevate your brand with versatile, tailored multipurpose graphic design services: stunning visuals for marketing, branding, and social media.",
    name: "INSTAGRAM MANAGEMENT",
    title: "Multipurpose Designing",
  },
  {
    quote:
      "Transform your raw footage into stunning, engaging videos with our professional video editing services. From concept to delivery, we bring your story to life.",
    name: "VIDEO EDITING",
    title: "High Quality Editing for Content Creators",
  },
  {
    quote:
      "Empower your brand with Facebook, Instagram, and YouTube advertising. Reach millions, boost sales, and maximize visibility.",
    name: "ADVERTISING",
    title: "Facebook, Instagram, and Linkdin",
  },
];
