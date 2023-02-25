import { FiExternalLink, FiGithub } from "react-icons/fi";

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
    projectId: 'pshyhqa6',
    dataset: 'production',
    apiVersion: 'v2021-10-21', // or the API version you are using
    useCdn: true // `false` if you want to force using the Sanity API
});

function urlFor(source) {
    return builder.image(source);
}

const ProjectCard = ({ project }) => {
    return (
        <div className="dark:bg-[#2c2c2c] bg-[#595d60] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="flex items-center justify-between mb-4">
                <a href={project.githubLink}>
                    <FiGithub className='text-secondary-100 hover:text-secondary-200 w-6 h-6' />
                </a>
                <a href={project.projectLink}>
                    <FiExternalLink className='text-secondary-100 hover:text-secondary-200 w-6 h-6' />
                </a>
            </div>
            <div className="relative">
                <img className="w-full rounded-xl" src={urlFor(project.projectImage).width(500).height(400).url()} alt={project.projectName} />
            </div>
            <h1 className="mt-4 text-gray text-[18px] font-bold">{project.projectName}</h1>
            <div className="flex items-center space-x-1 flex-wrap">
                {project.technologiesUsed.map((technology, index) => (
                    <div className="text-secondary-200" key={technology}>
                        {technology}{index === project.technologiesUsed.length - 1 ? '' : ', '}
                    </div>
                ))}
            </div> 
        </div>
    );
};

export default ProjectCard;