"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const MenuIcon = () => {
  const route = useRouter()
  const [menuClick, setMenuClick] = useState(false)
  return (
    <div className='md:hidden mt-2'>
      <details className="dropdown">
        <summary className="btn m-1 bg-slate-800 border-slate-500">
          {
            menuClick
              ? <div onClick={e => setMenuClick(false)} className='transition-all duration-75'>
                <svg
                  className="swap-on fill-white  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </div>
              : <div onClick={e => setMenuClick(true)}>
                <svg
                  className="swap-off fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </div>
          }
        </summary>
      </details>
    </div>
  );
}
export default MenuIcon;