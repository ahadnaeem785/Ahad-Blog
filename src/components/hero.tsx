import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='border-b border-gray-600'>
      <div className="hero min-h-[90vh] custom-image bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-3 scroll-m-20 text-4xl text-mywhite font-extrabold tracking-tight lg:text-5xl">Ahad Blogs</h1>
            <p className="mb-5 capitalize scroll-m-20 text-mywhite text-lg font-medium tracking-tight">This blog site is a space for inspiration, reflection, and connection.</p>
            <Link href={"/blogs"}>
              <Button className="bg-transparent outline outline-offset-2 outline-1 text-mywhite
      text-lg group hover:outline-myBlackHead hover:text-myBlackHead hover:bg-transparent hover:duration-200">View Blogs</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
