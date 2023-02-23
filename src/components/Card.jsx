const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-[30rem] dark:bg-[#2c2c2c] bg-[#595d60] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="flex items-center justify-between mb-4">
                <a href={project.githubLink}>
                    <FiGithub className='text-secondary-100 hover:text-secondary-200 w-6 h-6' />
                </a>
                <a href={project.projectLink}>
                    <FiExternalLink className='text-secondary-100 hover:text-secondary-200 w-6 h-6' />
                </a>
            </div>
            <div className="relative">
                <img className="w-full rounded-xl" src={urlFor(project.projectImage).url()} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray text-[18px] font-bold">{project.projectName}</h1>
        </div>
    );
};

export default ProjectCard;