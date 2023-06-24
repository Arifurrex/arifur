import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { fadeIn } from "../../variant";
const serves = [
  {
    name: "Frontend Development:",
    description:
      "I specialize in frontend development, utilizing my expertise in HTML, CSS, and JavaScript to bring designs to life.I am proficient in modern frontend frameworks such as React.js and Vue.js, allowing me to create dynamic and interactive user interfaces.",
    link: "learn more",
  },
  {
    name: "User Interface (UI) Design",
    description:
      "I have a keen eye for design and a passion for creating visually appealing and user-friendly interfaces. I am skilled in using design tools such as Figma and Adobe XD to create wireframes and mockups..",
    link: "learn more",
  },
  {
    name: "Website Optimization",
    description:
      "I believe in delivering websites that not only look great but also perform optimally. I have experience in optimizing website performance by optimizing code, compressing assets, and implementing caching techniques",
    link: "learn more",
  },
  {
    name: "Responsive Design",
    description:
      " With the increasing use of mobile devices, it is crucial for websites to be fully responsive. I have a solid understanding of responsive design principles and use them to create websites that adapt and scale seamlessly across different screen sizes. Whether it's a desktop, tablet, or mobile device, I ensure that the user experience remains consistent and enjoyable.",
    link: "learn more",
  },
];
const Services = () => {
  return (
    <section id="service" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-12 flex-1 bg-contain bg-no-repeat
                    mix-blend-lighten lg:mb-0  lg:bg-services lg:bg-bottom"
          >
            <h2 className="h2">what i do</h2>
            <h3 className="h3 mb-6 max-w-[455px]">
              i am a freelancer frontend web developer with 5 years of exprience
            </h3>
            <button className="btn btn-sm">see my work</button>
          </motion.div>
          {/* service */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {serves.map((serve, index) => {
                // destruction serve
                const { name, description, link } = serve;
                return (
                  <div
                    className="border-b border-white/20 py-6 lg:flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="mb-6 font-primary text-xl font-semibold tracking-wider">
                        {name}
                      </h4>
                      <p className="font-secondary text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
