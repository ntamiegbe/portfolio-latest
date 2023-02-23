import { FiGithub, FiExternalLink } from 'react-icons/fi'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react';
import ProjectCard from './Card';

const builder = imageUrlBuilder({
    projectId: 'pshyhqa6',
    dataset: 'production',
    apiVersion: 'v2021-10-21', // or the API version you are using
    useCdn: true // `false` if you want to force using the Sanity API
});

function urlFor(source) {
    return builder.image(source);
}

const ProjectSection = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://pshyhqa6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'projects'%5D%7B%0A%20%20_id%2C%0A%20%20%20%20githubLink%2C%0A%20%20%20%20projectImage%2C%0A%20%20%20%20projectLink%2C%0A%20%20%20%20projectName%2C%0A%7D')
            .then(response => response.json())
            .then(data => console.log(data.result))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center py-12">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>

    );
};

export default ProjectSection;