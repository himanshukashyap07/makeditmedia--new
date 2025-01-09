'use client'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className='bg-slate-900'>
      <footer className="footer footer-center bg-slate-800 text-white rounded p-10">
          <div className="grid grid-flow-col gap-4">
            <Link href={'#'}>
                <InstagramIcon/>
            </Link>
            
            <Link href={'#'}>
                <TwitterIcon/>
            </Link>
            <Link href={'#'}>
                <LinkedInIcon/>
            </Link>
          </div>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
        </aside>
      </footer>
    </div>
  )
}
