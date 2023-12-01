'use client'
import Image from 'next/image'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Sidebar from '@/components/Sidebar'
import { useState, useEffect } from 'react'
export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Set initial state based on window width
    const handleResize = () => {
        setOpen(window.innerWidth >= 768);
    };

    // Call the function to set the initial state
    handleResize();

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
}, []);


  const toggleOpen = () => {
    console.log("state", open)
    setOpen(!open);
  }
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-1 overflow-hidden'>
      {/* <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleOpen}></div> */}

      {/* <Sidebar open={open} toggleOpen={toggleOpen} /> */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0 w-full' : '-translate-x-full w-0'} md:relative md:translate-x-0 md:w-64`}>
        {open ? 
        <Sidebar toggleOpen={toggleOpen} open={open}/> 
        : 
        <button className={`fixed top-0 left-0 p-4 z-50 transition-opacity duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'}`} onClick={toggleOpen}>
        {/* Replace with an icon or text to open/close sidebar */}
        <svg viewBox="0 0 100 80" width="30" height="30" className='fill-white'>
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
    </button>
    

        
    }
      </div>

        <div className={`flex min-h-screen flex-col items-center justify-between p-6 text-white overflow-y-auto transition-opacity duration-300 ${open ? 'opacity-50 md:opacity-100' : 'opacity-100'} md:block md:translate-x-0`}>
                <section id="about">
                    <About />
                </section>

                <section id="experience">
                    <Experience />
                </section>

                <section id="projects">
                    <Projects />
                </section>
        </div>
      </div>
    </div>
  )
}
