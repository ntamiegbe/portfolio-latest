import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            jobTitle: "CEO, Acme Inc.",
            avatarUrl: "https://example.com/john-doe-avatar.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Jane Smith",
            jobTitle: "Designer, XYZ Agency",
            avatarUrl: "https://example.com/jane-smith-avatar.jpg",
            text: "Fusce dictum feugiat massa, a luctus quam placerat ac.",
        },
        {
            name: "Bob Johnson",
            jobTitle: "Developer, PQR Corp.",
            avatarUrl: "https://example.com/bob-johnson-avatar.jpg",
            text: "Nulla viverra sapien vel enim malesuada, ut dictum justo interdum.",
        },
    ];

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
                                    src={testimonial.avatarUrl}
                                    alt={testimonial.name}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="ml-8">
                                <h3 className="font-bold text-white text-lg mb-1">
                                    {testimonial.name}
                                </h3>
                                <p className="text-secondary-200 text-sm">
                                    {testimonial.jobTitle}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray text-sm md:text-base leading-relaxed">
                            {testimonial.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
