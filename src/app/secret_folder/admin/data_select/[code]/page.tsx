'use client'
import { MeteorsDemo } from '@/components/MetroCardProtFolioEffect';
import PortFolioNevigation from '@/components/PortFolioNevigation';
import { Button } from '@/components/ui/moving-border';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';




export default function Portfolio() {
  const params = useParams();
  const code = params.code;
  const [useDbData, setUseDbData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const checkCode = "iAmtheKing"


  const getDataFromDatabase = async () => {
    setIsLoading(true)
    const videoData = await axios.get('/api/data/getData')
    setIsLoading(false)
    return videoData
  }
  useEffect(() => {
    const fetchData = async () => {
      const videoDataExtract = await getDataFromDatabase();
      setUseDbData(videoDataExtract.data)
    };
    fetchData();
  }, []);

  if (code != checkCode) {
    return (
      <>
        <div className='text-6xl text-red-600 text-center'>
          you are enter {code}
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="w-screen min-h-screen bg-slate-900 text-white">
        <div className="flex flex-col items-center px-4 md:px-8">

          {/* Portfolio Grid Section */}
            <Link href={'/add_data'} className='mt-4'>
          <Button>
              Add new Video
          </Button>
            </Link>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-6 self-center w-full md:w-11/12 lg:w-[80vw]">
            {
              isLoading
                ? (
                  <span className="loading loading-spinner loading-lg text-center"> Loading...</span>
                )
                : null
            }
            {
              useDbData && useDbData.map((value: any, index) => (
                <div key={value._id}>
                  <MeteorsDemo id={value._id} url={value.url} title={value.title} heading={value.heading} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}