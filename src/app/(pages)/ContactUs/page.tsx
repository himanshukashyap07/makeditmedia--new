import { SignupFormDemo } from '@/components/SignInForm'
import React from 'react'

export default function ContactUs() {
  return (
    <div className='bg-slate-900 text-white flex flex-col justify-center items-center'>
      <div className='flex justify-center items-start rounded-md shadow-md'>
       <h1 className='h-40 flex justify-center items-center pointer-events-none whitespace-pre-wrap bg-gradient-to-b md:from-green-500 md:to-gray-200/70 from-green-400 to-gray-300/90 bg-clip-text text-center text-5xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>CONTACT US</h1>
      </div>
      <div className='bg-slate-700 py-8 px-4 rounded-lg flex flex-col mb-10 justify-center items-center bg-gradient-to-b md:from-green-600 md:to-gray-300/70 from-green-600 to-gray-400/90'>
        <SignupFormDemo/>
      </div>
    </div>
  )
}
