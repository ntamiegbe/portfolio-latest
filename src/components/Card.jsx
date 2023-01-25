import React from 'react'
import Logo from '../assets/images/logo.png'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Card = () => {
    return (
        <div class="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
            <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                <div class="max-w-sm bg-lightgray px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <div class="relative">
                        <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                    </div>
                    <h1 class="mt-4 text-secondary-200 text-2xl font-bold">Javascript Bootcamp for Absolute Beginners</h1>
                    <div class="my-4">
                        <div class="flex space-x-1 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <p>1:34:23 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card