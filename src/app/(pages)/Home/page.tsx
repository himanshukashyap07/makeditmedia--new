'use client'
import Particles from "@/components/ui/particles";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import TypingAnimation from "@/components/ui/typing-animation";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Button } from "@/components/ui/moving-border";
import ContactUs from "@/app/(pages)/ContactUs/page";
import Image from "next/image";
import bgImage from "@/assets/image/3D_bg-removebg-preview.png";



export default function Home() {

  return (
    <div className="w-full">
      {/* Home Section */}
      <div className="bg-slate-900 w-full text-neutral-300 flex flex-col justify-start items-center relative">
        <div className="w-full flex flex-col justify-center mt-10 items-center px-4 text-center">
          <TypingAnimation
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b md:from-green-600 md:to-gray-300/80 from-green-400 to-gray-300/90 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
            text="Makedit Media"
          />
          <p className="text-sm sm:text-md md:text-lg py-3">A Content Marketing Agency</p>
          <p className="text-sm sm:text-base md:text-lg px-6">
            We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media.
          </p>
          <ul className="flex justify-center items-center space-x-5 mt-5">
            <Link href="#">
              <li className="list-none text-xl border rounded-full flex justify-center items-center w-11 h-11 bg-green-300 cursor-pointer text-black">
                <InstagramIcon />
              </li>
            </Link>
            <Link href="#">
              <li className="list-none text-xl border rounded-full flex justify-center items-center w-11 h-11 bg-green-300 cursor-pointer text-black">
                <LinkedInIcon />
              </li>
            </Link>
            <Link href="#">
              <li className="list-none text-xl border rounded-full flex justify-center items-center w-11 h-11 bg-green-300 cursor-pointer text-black">
                <TwitterIcon />
              </li>
            </Link>
          </ul>
          <div className="w-50 h-50 bg-green-600 rounded-full mt-5">
            <Image src={bgImage} alt="backgroundImage" width={550} />
          </div>
        </div>
        <Particles className="absolute inset-0" quantity={100} ease={80} refresh />
      </div>

      {/* Our Services Section */}
      <div className="w-full bg-slate-900 py-16 md:py-24">
        <div className="w-full flex flex-col items-center">
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b md:from-green-500 md:to-gray-200/70 from-green-400 to-gray-300/90 bg-clip-text text-transparent font-semibold">
            OUR SERVICES
          </h1>
          <div className="mt-10 w-full">
            <InfiniteMovingCards items={Service} direction="right" speed="normal" />
          </div>
          <div className="flex justify-center items-center mt-10">
            <Button>
              <Link href={'/About'}>Read more</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Testinomials */}
      {/* Contact Form */}
      <div className="w-full bg-slate-900 py-16 md:py-24">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full mb-8" />
        <ContactUs />
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
