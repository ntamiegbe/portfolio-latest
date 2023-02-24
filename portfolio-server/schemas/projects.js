export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'projectName',
            title: 'ProjectName',
            type: 'string'
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
            name: 'technologiesUsed',
            title: 'TechnologiesUsed',
            type: 'array',
            of: [{ type: 'string' }]
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