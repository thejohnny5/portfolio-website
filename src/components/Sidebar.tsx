import Image from 'next/image'

const Sidebar = () => {
    return (
        <aside className='bg-black text-white p-4 h-screen flex flex-col'>
            <div className='mb-4'>
                {/* Social Links */}
                <ul className="space-y-4">
                    <li> 
                        <a target="_blank" href='https://www.linkedin.com/in/jonathan-lee-gray/' rel="noopener noreferrer">
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/thejohnny5/" rel="noopener noreferrer">
                            <Image
                                src="/github.png"
                                alt="Github Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex-grow"></div>

            <div className='mt-4'>
                {/* Navigation Links */}
                <nav className='flex flex-col space-y-2'>
                    <a href="#about"><span className="p-2 hover:bg-gray-800 rounded">About</span></a>
                    <a href="#experience"><span className="p-2 hover:bg-gray-800 rounded">Experience</span></a>
                    <a href="#projects"><span className="p-2 hover:bg-gray-800 rounded">Projects</span></a>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
