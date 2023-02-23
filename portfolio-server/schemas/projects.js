export default {
    name: 'projects',
    title: 'projects',
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