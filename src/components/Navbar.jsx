import React from 'react'
import Logo from "../assets/images/logo.png"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"

import { useState } from "react";
import Switcher from './Switcher';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="dark:bg-dark bg-light sticky top-0 z-50 shadow py-2">
            <div className="justify-between px-4 mx-auto lg:items-center lg:flex md:px-8">
                <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex items-center justify-between lg:py-4 lg:block">
                    <a href="/">
                        <img src={Logo} alt="Logo" className='w-16 h-16 rounded-full' />
                    </a>
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
                </motion.div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block h-screen" : "hidden"}`}>
                        <motion.ul initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="items-center justify-center space-y-8 lg:flex lg:space-x-10 lg:space-y-0">
                            <motion.li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="#home">
                                    <span className='text-secondary-100'>01. </span>
                                    Home
                                </a>
                            </motion.li>
                            <motion.li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="#about">
                                    <span className='text-secondary-100'>02. </span>
                                    About
                                </a>
                            </motion.li>
                            <motion.li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="#projects">
                                    <span className='text-secondary-100'>03. </span>
                                    Portfolio
                                </a>
                            </motion.li>
                            <motion.li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="#testimonials">
                                    <span className='text-secondary-100'>04. </span>
                                    Testimonials
                                </a>
                            </motion.li>
                            <motion.li className="text-gray hover:text-secondary-200 font-semibold text-[20px]">
                                <a href="#contact">
                                    <span className='text-secondary-100'>05. </span>
                                    Contact
                                </a>
                            </motion.li>
                            <Switcher />
                        </motion.ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <a
                                href='mailto:ntamiegbe00@gmail.com'
                                className="inline-block w-full px-4 py-2 text-center text-gray bg-secondary-100 mt-3 rounded-md shadow"
                            >
                                <span class="relative">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
                <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="hidden space-x-2 lg:inline-block">
                    <a href='mailto:ntamiegbe00@gmail.com' class="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-secondary-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
                        <span className="absolute inset-0 w-full h-full border-2 border-secondary-300 rounded"></span>
                        <span className="relative text-white text-[18px]">Email</span>
                    </a>
                </motion.div>
            </div>
        </nav>
    );
}