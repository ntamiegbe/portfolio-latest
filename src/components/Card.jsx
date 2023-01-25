import React from 'react'
import Logo from '../assets/images/logo.png'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Card = () => {
    return (
        <div class="bg-transparent border border-secondary-200 rounded-md bg-gray-800 shadow-lg p-3 mt-[4.5rem] flex">
            <div class="md:flex px-4 leading-none max-w-4xl">
                <div class="flex-none mx-3">
                    <img src={Logo} alt="pic" class="h-[280px] w-65 rounded-md transform -translate-x-12 bg-lightgray -translate-y-8 border border-secondary-200 shadow-xl" />
                </div>
                <div class="flex-col items-center justify-center text-gray">
                    <a href='#__' class="pt-4 text-3xl font-bold mx-4 text-lightgray hover:text-secondary-200">Shopee</a>
                    <p class="hidden md:block px-4 my-4 text-2xl">
                        In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
                    </p>
                    <div class="text-base flex">
                        <a class="border border-secondary-200 text-secondary-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-secondary-100 focus:outline-none focus:shadow-outline">React</a>

                        <a class="border border-secondary-200 text-secondary-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-secondary-100 focus:outline-none focus:shadow-outline">Redux</a>

                        <a class="border border-secondary-200 text-secondary-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-secondary-100 focus:outline-none focus:shadow-outline">Tailwind CSS</a>
                    </div>
                </div>
            </div>
            <div class="flex justify-center space-x-5 items-end p-4 text-secondary-200">
                <a href="#__">
                    <FiExternalLink className='h-6 w-6' />
                </a>
                <a href="#__">
                    <FiGithub className='h-6 w-6' />
                </a>
            </div>
        </div>
    )
}

export default Card