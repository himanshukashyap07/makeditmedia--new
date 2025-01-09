"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo(dir:any) {
  return (
    <div className=" rounded-md flex flex-col antialiase dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={Service}
        direction={dir}
        speed="normal"
      />
     
    </div>
  );
}

const Service = [
    {
      quote:
        "Amplify your social media impact through expert Management services. We devise captivating strategies for heightended engagement and extensive reach.",
      name: "SOCIAL MEDIA MANAGEMENT",
      title: "instagram,Linkedin and more",
    },
    {
      quote:
        "All-encompassing support for strategy, post-production, operations, and analytics, driving channel growth and success.",
      name: "360° REEL MANAGEMENT",
      title: "For Brands and Influencers",
    },
    {
      quote: "Elevate your brand with versatile,tailored multipurpose graphic design services: stunning visuals for marketing,branding and social media.",
      name: "GRAPHIC DESIGNING",
      title: "Multipurpose Designing",
    },
    {
      quote:
        "Transforms your raw footage into stunning engaging videos with our professional video editing services. From concept to delivery we bring your story to life",
      name: "VIDEO EDITING",
      title: "Vlogs,Tutorials,Educational etc.",
    },
    {
        quote:
        "Empower your brand with facebook instagram and youtube advertising. Reach millions,boost sales,and maximize visibility.",
        name: "ADVERTISING",
        title: "Facebook,instagram.",
    },
  ];
