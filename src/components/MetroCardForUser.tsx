"use client"
import React, { useState } from "react";
import { Meteors } from "./ui/meteors";
import { useRouter } from "next/navigation";
import Link from "next/link";



export interface VideoData {
    url: string;
    title: string;
    heading: string;
}


export function MeteorCardForUser({ url, title, heading }: VideoData) {
    const router = useRouter()
    return (
        <div className="z-25">
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

                    <h1 className="font-bold text-xl text-white mb-4 relative z-25">
                        {title}
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-25">
                        {heading}
                    </p>
                    <a href={url}>
                        <button type="button" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                            Explore more
                        </button>
                    </a>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
