import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import ProjectCard from './Card';
import { motion } from "framer-motion"

const ProjectSection = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://pshyhqa6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22projects%22%5D%7B%0A%20%20_id%2C%0A%20%20%20%20githubLink%2C%0A%20%20%20%20projectImage%2C%0A%20%20%20%20projectLink%2C%0A%20%20%20%20projectName%2C%0A%7D')
            .then(response => response.json())
            .then(data => setProjects(data.result))
            .catch(error => console.error(error));
    }, []);


    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center py-10"
        >
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectSection;