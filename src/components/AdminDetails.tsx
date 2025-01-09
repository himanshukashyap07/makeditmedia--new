"use client"
import React from 'react';
const adminList = [
  {
    imageUrl: "https://res.cloudinary.com/dlfoeitcw/image/upload/v1736135296/Editor2_wguhii.png",
    name: "Sahil Singh",
    work: "Content Creator & Video Editor",
    discription: "Experienced Graphic Designer with 2 years of expertise in creating engaging visual content for brands and influencers. Skilled in Adobe After Effects and Premiere Pro, with a knack for producing videos that have garnered over 10 million views. Successfully booked and collaborated with over 20 clients, demonstrating a strong work ethic and commitment to delivering impactful results."
  },
  {
    imageUrl: "https://res.cloudinary.com/dlfoeitcw/image/upload/v1736135291/Editor1_bnagqn.png",
    name: "Anuraag Singh",
    work: "Content Creator & Video Editor",
    discription: "Experienced Graphic Designer with a proven track record of collaborating with brands and influencers to deliver impactful visual content. Proficient in Adobe After Effects and Premiere Pro, with expertise in creating compelling designs and animations. Successfully worked with over 20 clients, showcasing a commitment to creativity, quality, and client satisfaction."
  }
]

const AdminPageComponent = () => {
  return (
    <div className='bg-slate-900 text-white'>
      <div className='flex-col flex md:flex-row justify-evenly items-center w-screen'>
        {
          adminList.map((value, index) => (
            <div key={index} className='w-80 mb-4 p-5 rounded-2xl flex justify-center items-center flex-col bg-gradient-to-b md:from-green-600 md:hover:from-green-500 md:to-gray-300/70 md:hover:to-gray-200/70 from-green-600 hover:from-green-500 to-gray-400/90 hover:to-gray-400'>
              <div>
                <img width={100} src={value.imageUrl} alt='adminImage'></img>
              </div>
              <div >
                <div className='text-2xl text-black inline-flex justify-center items-center w-full m-2'>
                  {value.name}
                </div>
                <div className='text-lg text-black inline-flex justify-center items-center w-full mt-2'>
                  {value.work}
                </div>
                <div className='text-base text-black inline-flex justify-center items-center w-full px-2 py-3'>
                  {value.discription}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default AdminPageComponent;