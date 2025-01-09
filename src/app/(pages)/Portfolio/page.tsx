'use client'
import { MeteorCardForUser } from '@/components/MetroCardForUser';
import PortFolioNevigation from '@/components/PortFolioNevigation';
import axios from 'axios';
import React, { useEffect, useState } from 'react';




export default function Portfolio() {
  const [useDbData,setUseDbData] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  const getDataFromDatabase= async()=>{
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
  
 
  return (
    <div>
      <div className="w-screen min-h-screen bg-slate-900 text-white">
        <div className="flex flex-col items-center px-4 md:px-8">
          {/* Navigation Section */}
          {/* <PortFolioNevigation /> */}

          {/* Portfolio Grid Section */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-6 self-center w-full md:w-11/12 lg:w-[80vw]">
          {
            isLoading
              ? (
                <span className="loading loading-spinner loading-lg text-center"> Loading...</span>
              )
              : null
          }
          {
            useDbData && useDbData.map((value:any,index)=>(
              <div key={value._id}>
                <MeteorCardForUser url={value.url} title={value.title} heading={value.heading}  />
              </div>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
}