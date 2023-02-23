import React from "react";
import { motion } from "framer-motion";
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react';

const builder = imageUrlBuilder({
    projectId: 'pshyhqa6',
    dataset: 'production',
    apiVersion: 'v2021-10-21', // or the API version you are using
    useCdn: true // `false` if you want to force using the Sanity API
});

function urlFor(source) {
    return builder.image(source);
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://pshyhqa6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%27testimonial%27%5D%7B%0A%20%20_id%2C%0A%20%20%20%20name%2C%0A%20%20%20%20image%2C%0A%20%20%20%20company%2C%0A%20%20%20%20comment%2C%0A%7D')
            .then(response => response.json())
            .then(data => setTestimonials(data.result))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="max-w-[800px] px-2 container mx-auto flex-col">
            <h1 className='text-lightgray text-6xl pb-10'>User Reviews: <b className='text-secondary-200'>Honest Feedback on My Web Development Skills</b></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="dark:bg-[#2c2c2c] bg-[#595d60] rounded-lg shadow-lg p-6 sm:p-8 relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden -mr-4">
                                <img
                                    src={urlFor(testimonial.image).url()}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="ml-8">
                                <h3 className="font-bold text-white text-lg mb-1">
                                    {testimonial.name}
                                </h3>
                                <p className="text-secondary-200 text-sm">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray text-sm md:text-base leading-relaxed">
                            {testimonial.comment}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
