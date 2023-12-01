'use client'
import Image from 'next/image'
interface props {
    toggleOpen:Function;
    open: boolean;
}
const Sidebar = ({toggleOpen, open}: props) => {
    const emailAddress = "johnny5jg5@gmail.com";
    return (

        <aside className={`flex flex-col fixed inset-y-0 left-0 z-30 bg-black text-white p-4 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} w-3/5 md:w-64`}>

        {/* <aside className='bg-black text-white p-4 h-screen flex flex-col'> */}
            <div className='mb-4 self-center'>
            

                {/* Social Links */}
                <ul className="space-y-4">
                    <li className='flex justify-center'>
                        <button className="p-4" onClick={()=>toggleOpen()}>
                            {/* Replace with an icon or text to open/close sidebar */}
                            <svg viewBox="0 0 100 80" width="30" height="30" className='fill-white'>
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg>
                            {/* {isSidebarOpen ? 'Close' : 'Menu'} */}
                        </button>
                    </li>
                    <li className='flex justify-center'> 
                        <a target="_blank" href='https://www.linkedin.com/in/jonathan-lee-gray/' rel="noopener noreferrer">
                            <Image
                                src="/linkedin.svg"
                                alt="LinkedIn Logo"
                                className="dark:invert"
                                width={50}
                                height={10}
                                priority
                            />
                        </a>
                    </li>
                    <li className='flex justify-center'>
                        <a target="_blank" href="https://github.com/thejohnny5/" rel="noopener noreferrer">
                            <Image
                                src="/github.png"
                                alt="Github Logo"
                                className="dark:invert"
                                width={60}
                                height={15}
                                priority
                            />
                        </a>
                    </li>
                    <li className='flex justify-center'>
                        <a href={`mailto:${emailAddress}`}>
                            <Image 
                                src="/email.jpg"
                                alt="Email"
                                className='dark:invert'
                                width={90}
                                height={30}
                                priority
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex-grow"></div>

            <div className='mt-4'>
                {/* Navigation Links */}
                <nav className='flex flex-col items-center'>
                    <a href="#about" className="flex justify-center p-2 hover:bg-slate-700 lg-rounded w-full text-center">About</a>
                    <a href="#experience" className="flex justify-center p-2 hover:bg-slate-700 lg-rounded w-full text-center">Experience</a>
                    <a href="#projects" className="flex justify-center p-2 hover:bg-slate-700 lg-rounded w-full text-center">Projects</a>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
