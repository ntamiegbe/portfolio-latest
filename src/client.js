import client from '@sanity/client'

export const sanityClient = client({
    projectId: 'pshyhqa6',
    dataset: 'production',
    useCdn: true // turn off to ensure fresh data
})