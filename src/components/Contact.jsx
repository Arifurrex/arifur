import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../../variant';
"../../variant.js"

const Contact = () => {
    return (
        <section id="contact" className='section'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                        className='flex-1'>
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>get in touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>let's work <br />together</h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                         variants={fadeIn('left', 0.3)}
                         initial="hidden"
                         whileInView={'show'}
                         viewport={{once:false, amount:0.7}}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 pb-24 items-start' action="">
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text"
                        placeholder='your name'
                        />
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text"
                        placeholder='your email'
                        />
                        <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                            placeholder='your massage' name="" id=""></textarea>
                        <button className='btn btn-lg'>send message</button>
                    </motion.form>
                </div>
             </div>
        </section>
    ) 
};

export default Contact;