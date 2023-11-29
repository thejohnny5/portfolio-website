import Image from 'next/image'

const Sidebar = () => {
    const emailAddress = "johnny5jg5@gmail.com";
    return (
        <aside className='bg-black text-white p-4 h-screen flex flex-col'>
            <div className='mb-4 self-center'>
                {/* Social Links */}
                <ul className="space-y-4">
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
                <nav className='flex flex-col'>
                    <div className="p-2 hover:bg-slate-700 lg-rounded"><a href="#about"> About</a></div>
                    <div className="p-2 hover:bg-slate-700 lg-rounded"><a href="#experience"> Experience</a></div>
                    <div className="p-2 hover:bg-slate-700 lg-rounded"><a href="#projects"> Projects</a></div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
