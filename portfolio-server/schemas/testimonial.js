export default {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'string'
        },

    ]
}