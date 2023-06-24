import { motion } from "framer-motion";
import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../../variant";
import image from "../assets/mypic/profile-pic (14).png";

const Banner = () => {
  return (
    <section className="px-6 py-8" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-5xl font-bold capitalize leading-[0.8] lg:text-[110px]"
            >
              arifur <span>rahman</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-4 font-secondary text-4xl font-semibold leading-[1] lg:text-[60px]"
            >
              <div className="lg:hidden" />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "software engineer",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "react developer",
                  2000,
                  "frontend web developer",
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="text-2xl font-semibold text-accent"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-6 text-slate-300"
            >
              Welcome to my frontend web developer portfolio! I am a self-taught
              developer with a passion for creating beautiful and user-friendly
              websites. Through dedicated self-learning, I have gained
              proficiency in various frontend technologies and frameworks.
              dedication.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-12 mt-2 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg focus:ring focus:ring-accent focus:ring-opacity-50 focus:ring-offset-2 lg:tracking-widest">
                contact me
              </button>
              <a className="text-gradient btn-link" href="#">
                explore
              </a>
            </motion.div>
            <div className="flex  justify-center gap-2 text-2xl lg:justify-start lg:text-4xl">
              <a href="#">
                <CiFacebook />
              </a>
              <a href="#">
                <AiOutlineYoutube />
              </a>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          {/* image  */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
          >
            <img
              className="hidden max-w-[320px] flex-1 lg:flex lg:max-w-[482px]"
              src={image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
