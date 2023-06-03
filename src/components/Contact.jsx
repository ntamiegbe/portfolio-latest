import { useState } from 'react';
// import SocialMediaLinks from './SocialMediaLinks';
import { motion } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    //     // You can add your own logic here to submit the form data to your server
    // };

    const [state, handleSubmit] = useForm("xjvdwqav");
    if (state.succeeded) {
        return <p className='text-center text-secondary-200 text-3xl'>Thanks for reaching out !!</p>;
    }

    return (
        <div className='max-w-[800px] px-2 container mx-auto flex-col py-20 dark:bg-dark bg-light'>
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-lightgray md:text-6xl pb-10 text-[30px]'>Let's Build Something Great Together: <b className='text-secondary-200'>Connect with Me</b>
            </motion.h1>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-md mx-auto dark:bg-[#2c2c2c] bg-[#595d60] rounded-lg shadow-lg p-6 sm:p-8"
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-secondary-200">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md focus:outline-none " required />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-secondary-200">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md focus:outline-none " required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-secondary-200">Message</label>
                        <textarea id="message" name="message" className="w-full px-4 py-2 rounded-md focus:outline-none " rows="5" required></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <button type="submit" disabled={state.submitting} className="px-4 py-2 font-bold text-base border-2 border-secondary-300 text-white hover:text-secondary-200 rounded-lg">Submit</button>
                    </div>
                </form>
            </motion.div>
            {/* <SocialMediaLinks /> */}
        </div>
    )
}

export default Contact