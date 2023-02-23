import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
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

const FeaturedProject = ({ project }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen max-w-[600px] mx-auto py-[50px]" key={project.name}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full overflow-hidden"
            >
                <img
                    src={urlFor(project.projectImage).height(300).url()}
                    alt={project.name}
                    className="absolute inset-0 w-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-dark opacity-70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl text-white font-bold mb-8 z-20"
                    >
                        {project.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-white text-center mb-8 px-4"
                    >
                        {project.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="flex space-x-10 items-center z-30">
                        <a href={project.link} className='bg-white hover:bg-secondary-200 rounded-full p-2 hover:text-white text-secondary-200'>
                            <FiGithub className='w-6 h-6' />
                        </a>
                        <a href={project.link} className='bg-white hover:bg-secondary-200 rounded-full p-2 hover:text-white text-secondary-200'>
                            <FiExternalLink className='w-6 h-6' />
                        </a>
                    </motion.div>
                    <motion.ul
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, delay: 1.2 }}
                        className="flex flex-wrap justify-center absolute bottom-0"
                    >
                        {project.technologiesUsed.map((technology) => (
                            <li className="text-secondary-200 py-2 px-4 m-2" key={technology}>
                                {technology}
                            </li>
                        ))}
                    </motion.ul>
                </div>
                <div className="absolute inset-0 z-10"></div>
            </motion.div>
        </div>
    );
};

export default FeaturedProject;