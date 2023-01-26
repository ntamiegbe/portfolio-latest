import React from 'react'
import Logo from "../assets/images/logo.png"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

import { useState } from "react";
import { Link } from 'react-router-dom';
import Switcher from './Switcher';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="dark:bg-dark bg-light sticky top-0 z-50">
            <div className="justify-between px-4 mx-auto lg:items-center lg:flex md:px-8">
                <div className="flex items-center justify-between lg:py-4 lg:block">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='w-16 h-16 rounded-full' />
                    </Link>
                    <div className="lg:hidden">
                        <button
                            className="p-2 text-gray-700"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <AiOutlineClose className='text-[25px] text-secondary-200' />
                            ) : (
                                <BiMenuAltRight className='text-[25px] text-secondary-200' />
                            )}
                        </button>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block h-screen" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-10 lg:space-y-0">
                            <li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="">
                                    <span className='text-secondary-100'>01. </span>
                                    Home
                                </a>
                            </li>
                            <li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="">
                                    <span className='text-secondary-100'>02. </span>
                                    Skills
                                </a>
                            </li>
                            <li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="">
                                    <span className='text-secondary-100'>03. </span>
                                    Portfolio
                                </a>
                            </li>
                            <li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="">
                                    <span className='text-secondary-100'>04. </span>
                                    Testimonials
                                </a>
                            </li>
                            <li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="">
                                    <span className='text-secondary-100'>05. </span>
                                    Contact
                                </a>
                            </li>
                            <Switcher />
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <a
                                href=""
                                className="inline-block w-full px-4 py-2 text-center text-gray bg-secondary-100 mt-3 rounded-md shadow"
                            >
                                <span class="relative">My Blog</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:inline-block">
                    <a href="#_" class="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-secondary-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
                        <span className="absolute inset-0 w-full h-full border-2 border-secondary-300 rounded"></span>
                        <span className="relative text-gray text-[18px]">My Blog</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}