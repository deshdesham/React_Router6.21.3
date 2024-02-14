import React,{useEffect} from 'react'
import {useFetcher} from 'react-router-dom';
const Notified = () => {
    const fetcher=useFetcher()
    const {data,state}=fetcher;

    useEffect(()=>{
        if(state==="idle" && data && data.message){
            window.alert(data.message)
        }
    },[state,data])
  return (
    <fetcher.Form method='POST' action='/notify'>
    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-[220px] rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="email"
        placeholder="Email"
        name='email'
      ></input>
      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Subscribe
      </button>
    </div>
    </ fetcher.Form>
  )
}

export default Notified;