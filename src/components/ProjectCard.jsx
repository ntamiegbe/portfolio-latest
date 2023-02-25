import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import ProjectCard from './Card';
import { motion } from "framer-motion"

const ProjectSection = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://pshyhqa6.api.sanity.io/v2021-10-21/data/query/production?query=*[_type=="projects"]{ _id, projectName, projectImage, projectLink, githubLink, technologiesUsed }')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (!data.result) {
                    throw new Error('Data result is missing');
                }
                setProjects(data.result);
            })
            .catch(error => console.error(error));
    }, []);



    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="py-10"
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