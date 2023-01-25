import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm dark:bg-[#2c2c2c] bg-[#595d60] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-gray text-3xl font-bold">{project.title}</h1>
                <div className="flex space-x-4 items-center">
                    <a href={project.link}>
                        <FiGithub className='text-secondary-100 hover:text-secondary-200 w-6 h-6' />
                    </a>
                    <a href={project.link}>
                        <FiExternalLink className='text-secondary-100 hover:text-secondary-200 w-6 h-6' />
                    </a>
                </div>
            </div>
            <div className="relative">
                <img className="w-full rounded-xl" src={project.image} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray text-[18px] font-bold">{project.description}</h1>
            <h1 className="mt-4 text-secondary-200 text-[1.3rem] font-bold">React, Redux, Tailwind CSS</h1>

        </div>
    );
};

const ProjectSection = () => {
    const projects = [
        {
            title: 'Project 1',
            image: 'https://via.placeholder.com/250',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com'
        },
    ];

    return (
        <div className="min-h-screen flex justify-center items-center py-20">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>

    );
};

export default ProjectSection;