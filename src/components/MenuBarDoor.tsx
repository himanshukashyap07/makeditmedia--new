"use client"
import Link from 'next/link';
import React from 'react';

const linkData =[
  {
    content:"Home",
    link:"/Home"
  },
  {
    content:"About",
    link:"/About"
  },
  {
    content:"Portfolio",
    link:"/Portfolio"
  },
  {
    content:"Contac tUs",
    link:"/ContactUs"
  },
]

function MenuDoor({className}:any){
  return (
    <div className={`drawer w-full flex justify-end md:hidden z-50 mt-2 ${className}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="bg-none drawer-button">
          <div className='md:hidden'>
              <summary className="btn m-1 bg-slate-800 border-slate-500">
                 <div>
                      <svg
                        className="swap-off fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                      </svg>
                    </div>
              </summary>
          </div>      
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-slate-800 text-base-content min-h-full p-8">
          {
            linkData.map((value,index)=>(
              <Link href={value.link} key={index} className='mt-5 mr-2 text-lg w-32 inline-flex justify-center items-center rounded-lg bg-green-500  hover:bg-green-300 text-black hover:text-black'> {value.content}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default MenuDoor;