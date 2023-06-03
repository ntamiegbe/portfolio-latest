import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react';

const builder = imageUrlBuilder({
    projectId: 'pshyhqa6',
    dataset: 'production',
    apiVersion: 'v2021-10-21', // or the API version you are using
    useCdn: true // `false` if you want to force using the Sanity API
});

function urlFor(source) {
    return builder.image(source);
}

const FeaturedProject = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://pshyhqa6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%27featuredProjects%27%5D%7B%0A%20%20_id%2C%0A%20%20%20%20description%2C%0A%20%20%20%20githubLink%2C%0A%20%20%20%20projectImage%2C%0A%20%20%20%20projectLink%2C%0A%20%20%20%20projectName%2C%0A%20%20%20%20technologiesUsed%0A%7D')
            .then(response => response.json())
            .then(data => setProjects(data.result))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="max-w-[800px] px-2 container mx-auto flex-col space-y-40">
            {projects.map((project, index) => (
                <motion.section
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative rounded-lg shadow-md overflow-hidden mx-auto my-4 text-gray" key={project._id}
                >
                    <img className="w-full h-[30rem] object-cover" src={urlFor(project.projectImage).height(500).url()} alt={project.projectName} />
                    <div className="p-5 dark:bg-[#2c2c2c] bg-[#595d60]">
                        <div className="font-bold text-3xl mb-2">
                            {project.projectName}
                        </div>
                        <p className="text-xl">
                            {project.description}
                        </p>
                        <div className="flex items-center justify-start space-x-5 py-4">
                            {project.technologiesUsed.map((technology, index) => (
                                <div className="text-secondary-200 text-center text-sm md:text-base" key={technology}>
                                    {technology}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 m-3 p-3 rounded-full bg-secondary-200 hover:bg-secondary-100 font-semibold transition duration-300 ease-in-out">
                        <FiExternalLink className="text-white text-xl" />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="absolute top-0 left-0 m-3 p-3 rounded-full bg-secondary-200 hover:bg-secondary-100 font-semibold transition duration-300 ease-in-out">
                        <FiGithub className="text-white text-xl" />
                    </a>
                </motion.section>
            ))}
        </div>
    );
};

export default FeaturedProject;