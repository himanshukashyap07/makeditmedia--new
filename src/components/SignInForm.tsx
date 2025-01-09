"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from '@/components/ui/input'

import { useForm, ValidationError } from '@formspree/react';


export function SignupFormDemo() {
    const [state, handleSubmit] = useForm("xyzgbvaw");
    if (state.succeeded) {
        return (
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-green-600 inline-flex justify-center items-center">Thank you for your submission!</h1>
        );
    }
    return (
        <form onSubmit={handleSubmit} className="">
            <div className='rounded-lg '>
                <div className='flex flex-col justify-center items-start mb-3'>
                    <Label className=' text-black text-md ' htmlFor='username'><em className='text-red-500 text-[20px]'>*</em> Fullname:</Label>
                    <Input
                        className='bg-white w-80  md:h-12'
                        id='username'
                        type='text'
                        placeholder='SahilSingh'
                        name='username'
                    />
                    <ValidationError
                        prefix="username"
                        field="username"
                        errors={state.errors}
                    />
                </div>
                <div className='flex flex-col justify-center items-start mb-3'>
                    <Label className=' text-black text-md ' htmlFor='email'><em className='text-red-500 text-[20px]'>*</em> Email:</Label>
                    <Input
                        className='bg-white  w-80  md:h-12'
                        id='email'
                        type='email'
                        placeholder='e.g. abc@gmail.com'
                        name='email'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className='flex flex-col justify-center items-start mb-3'>
                    <Label className=' text-black text-md ' htmlFor='password'><em className='text-red-500 text-[20px]'>*</em> Message:</Label>
                    <Input
                        className='bg-white  w-80  md:h-12'
                        id='password'
                        type='text'
                        placeholder='Message'
                        name='password'
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>

                <div className=" flex flex-col  mb-2 mt-6 text-sm justify-center items-center ">
                    <button
                        type='submit'
                        disabled={state.submitting}
                        className={`text-center bg-blue-700 w-32 h-8 rounded-md px-6 hover:bg-blue-600 `}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </form>
    );
}
