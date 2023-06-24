import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../variant";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0 ">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden flex-1 rounded-sm bg-about bg-contain bg-center  bg-no-repeat mix-blend-luminosity md:flex lg:h-[500px]"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">about me</h2>
            <h3 className="h3 mb-4">
              i am a freelancer frontend web developer with 5 years of exprience
            </h3>
            <p className="mb-6 text-slate-300">
              I have always had a deep fascination with technology and its
              potential to create meaningful experiences. My journey as a web
              developer started with self-learning, and I have since acquired a
              diverse set of skills in frontend and backend development. With a
              keen eye for design and a problem-solving mindset, I strive to
              deliver high-quality websites that exceed client expectations.
            </p>
            <div>
              <div className="flex flex-row justify-center gap-x-6 gap-y-10 border border-gray-300/10  py-4 md:flex-row lg:items-center">
                <div className="text-gradient font-tertiary text-[40px]">
                  {inView ? <CountUp start={0} end={5} duration={8} /> : null}
                  <div className="font-primary text-sm tracking-[2px]">
                    years of <br />
                    exprience
                  </div>
                </div>
                {/*  */}
                <div className="text-gradient font-tertiary text-[40px]">
                  {inView ? <CountUp start={0} end={16} duration={50} /> : null}
                  k+
                  <div className="font-primary text-sm tracking-[2px]">
                    project
                    <br />
                    complete
                  </div>
                </div>
                {/*  */}
                <div className="text-gradient font-tertiary text-[40px]">
                  {inView ? <CountUp start={0} end={12} duration={50} /> : null}
                  k+
                  <div className="font-primary text-sm tracking-[2px]">
                    satisfy <br />
                    client
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
