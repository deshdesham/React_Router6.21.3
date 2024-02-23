import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'


const AutherrElmt = () => {
    const navigate=useNavigate()
  return (
    <div className="py-10">
    <div className="text-center">
      <div className="text-base font-semibold text-black">404</div>
      <div className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
      <h1>Could not Fetch Data! plese try leter.</h1>
      </div>
      <p className="mt-4 text-base leading-7 text-gray-600">
        Sorry, AUTH eRROR we couldn&apos:t find the page you&apos;re looking for.
      </p>
      <div className="mt-4 flex items-center justify-center gap-x-3">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>navigate("/about")}
        >
          <ArrowLeft size={16} className="mr-2" />
          Go back
        </button>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Contact us
        </button>
      </div>
    </div>
  </div>
  )
}

export default AutherrElmt;