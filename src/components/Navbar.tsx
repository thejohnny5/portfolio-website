import Image from 'next/image'
import Link from 'next/link';
const Navbar = () => {
    // Your top bar implementation
    return (
        <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">My Portfolio</span>
        </Link>
        <div className="flex">
          <Link href="/">
            <span className="p-2 hover:bg-gray-700 rounded">Home</span>
          </Link>
          <Link href="/about">
            <span className="p-2 hover:bg-gray-700 rounded">About</span>
          </Link>
          <Link href="/experience">
            <span className="p-2 hover:bg-gray-700"></span>
          </Link>
          <Link href="/projects">
            <span className="p-2 hover:bg-gray-700 rounded">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="p-2 hover:bg-gray-700 rounded">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
    );
  };
  
  export default Navbar;