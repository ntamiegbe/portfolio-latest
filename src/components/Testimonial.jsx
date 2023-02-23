import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            jobTitle: "CEO, Acme Inc.",
            avatarUrl: "data:image/jpeg;base64,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",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
