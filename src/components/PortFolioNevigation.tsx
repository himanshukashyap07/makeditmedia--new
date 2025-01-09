"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


export default function PortFolioNevigation() {
  const router = useRouter();

  return (
    <div className='w-screen h-48  flex flex-col justify-end items-center'>
          <ul className="menu menu-horizontal text-[0.83rem]  md:text-sm lg:text-lg md:w-11/12 lg:w-[60vw] flex justify-evenly  bg-slate-100 rounded-box">
            <li> <button className='text-black hover:text-red-500' onClick={()=>{router.push("/Portfolio/Long")}} type="button">Long Form</button> </li>
            <li> <button className='text-black hover:text-red-500' onClick={()=>{router.push("/Portfolio/Short")}} type="button">Short Form</button> </li>
          </ul>
        </div>
  )
}
