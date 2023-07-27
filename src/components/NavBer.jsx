"use client"

import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { useRouter } from 'next/navigation'

const NavBer = () => {

    const [toggle, setToggle] = useState(false);
    const { asPath } = useRouter()

    return (
        <main className='container my-5'>
            <div className='flex items-center justify-between'>
                <Image className='w-44' src={logo} alt='' />

                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} /> : <HiMenuAlt1 onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`font-semibold  flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black top-20 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6   absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <Link className={asPath === "/" ? "active" : ""} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={asPath === "/about" ? "active" : ""} >About</Link>
                    </li>
                    <li>
                        <Link className={({ isActive }) => isActive ? "active" : ""} href="/our-project">Our Project</Link>
                    </li>
                    <li>
                        <Link className={({ isActive }) => isActive ? "active" : ""} href="/our-team">Our Team</Link>
                    </li>
                    <li>
                        <Link className={({ isActive }) => isActive ? "active" : ""} href="/service">Service</Link>
                    </li>
                    <li>
                        <Link className={({ isActive }) => isActive ? "active" : ""} href="/contact">Contact</Link>
                    </li>
                    <button className='px-4 py-2 btn '>Contact</button>
                </ul>
            </div>
        </main>
    );
};

export default NavBer;