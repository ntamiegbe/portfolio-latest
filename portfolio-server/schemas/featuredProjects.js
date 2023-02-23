export default {
    name: 'featuredProjects',
    title: 'FeaturedProjects',
    type: 'document',
    fields: [
        {
            name: 'projectName',
            title: 'ProjectName',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'technologiesUsed',
            title: 'TechnologiesUsed',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'projectImage',
            title: 'ProjectImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'projectLink',
            title: 'ProjectLink',
            type: 'string'
        },
        {
            name: 'githubLink',
            title: 'GithubLink',
            type: 'url'
        },
        
    ]
}