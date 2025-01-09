"use client"
import axios from 'axios'

import { useParams, useRouter } from 'next/navigation';

import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function addData() {
  const parms = useParams()
  const urlId = parms.id
  console.log(urlId);
 
  const [data, setData] = useState({
    url: "",
    title: "",
    heading: ""
  })
  
 

  const [loding, setLoding] = useState(false)
  const route = useRouter()


  const handleSubmit = async () => {
    try {
      setLoding(true)
      const response = await axios.put(`/api/data/updateData/${urlId}`, data)
      if (response.data.message === "Data Not Found") {
        toast("Data is not save. incorrect Urlid");
        route.replace("/")
      }
      setLoding(false)
      toast("Data is updated successfully");
      setData({
        url: "",
        title: "",
        heading: ""
      })
      route.replace('/Portfolio')
    } catch (error) {
      console.log("Error occre in update Data",error);
      toast("Data is not save. Something went wrong");
      setLoding(false)
    }
  

  }
  return (
    <div className='flex bg-slate-900 w-full min-h-screen justify-center items-center p-4'>
      <div className='flex flex-col w-full max-w-lg justify-center items-center bg-white p-6 rounded-lg shadow-lg'>
        {
          loding 
          ?<>
            <span className="loading loading-spinner loading-lg"></span>
          </>
          :<>
              <span className='text-4xl bg-slate-900 text-slate-100 px-4 py-2 rounded-lg'>Update Data</span>
          </>
        }
      <label htmlFor="heading" className="text-lg font-semibold mb-2">Enter Heading:</label>
        <input
          value={data.heading}
          onChange={(e) => setData({ ...data, heading: e.target.value })}
          className='input text-white bg-zinc-900 input-bordered w-full mb-4' 
          name='heading' type="text" 
          placeholder='Enter heading' 
          id='heading'
        />
        <label htmlFor="title" className="text-lg font-semibold mb-2">Enter Title:</label>
        <input
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className='input bg-zinc-900 text-white input-bordered w-full mb-4' 
          name='title' 
          type="text" 
          placeholder='Enter title' 
          id='title' 
        />
        <label className="text-lg font-semibold mb-2" htmlFor="url">Enter Url:</label>
        <input
          value={data.url}
          onChange={(e) => setData({ ...data, url: e.target.value })}
          className='input bg-zinc-900 text-white input-bordered w-full mb-4'
          name='url'
          type="text"
          placeholder='Enter url'
          id='url'
        />
        <button type='submit' onClick={handleSubmit} className="btn btn-primary w-full">Submit</button>
      </div>
      <ToastContainer />
    </div>
  )
}
