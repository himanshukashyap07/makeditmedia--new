"use client"
import React, { useState } from "react";
import { Meteors } from "./ui/meteors";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export interface VideoData {
  id: string;
  url: string;
  title: string;
  heading: string;
}


export function MeteorsDemo({ id, url, title, heading }: VideoData) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const handleDelete = async () => {
    setIsLoading(true)
    await axios.delete(`/api/data/deletData?id=${id}`)
    toast("Video Deleted Successfully. please refresh to see effect")
    setIsLoading(false)
  }
  const handleUpdate = () => {
    router.push(`/edit_data/${id}`)
  }
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {
            isLoading
              ? (
                <span className="loading loading-spinner loading-lg"></span>
              )
              : null
          }
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {heading}
          </p>

          <a href={url}>
            <button type="button" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore more
            </button>
          </a>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
          <div className="mt-5">
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300" type="button" onClick={handleDelete}>
              Delete
            </button>
            <button className="border px-4 py-1 rounded-lg ml-4 border-gray-500 text-gray-300" type="button" onClick={handleUpdate}>
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
