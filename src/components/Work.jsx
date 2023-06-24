import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../variant";
import templateImg from "../assets/latestWork/Screenshot 2023-06-19 012644.png";
const mywork = [
  {
    workImg: "../assets/latestWork/Screenshot 2023-06-19 012644.png",
    link: "facebook.com",
  },
  {
    workImg: "../assets/latestWork/Screenshot 2023-06-19 013320.png",
    link: "facebook.com",
  },
];
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <div className="mb-10 flex flex-1 flex-col gap-y-12 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                my latest <br />
                work
              </h2>
              <p className="text-slate-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur sint cupiditate earum itaque atque quasi,
                laudantium ipsum nobis maiores corporis.
              </p>
              <button className="btn btn-sm">view all project</button>
            </div>
            {/* image  */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="group relative overflow-hidden rounded-xl border-2 border-white/50"
            >
              {/* overlay */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* image */}
              <img
                className="h-60 w-full border bg-cover object-cover object-top transition-all duration-500 group-hover:scale-125"
                src={templateImg}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">ux/ui design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">project title</span>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col gap-y-10">
            {/*  */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden rounded-xl border-2 border-white/50"
            >
              {/* overlay */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* image */}
              <img
                className="h-60 w-full border bg-cover object-cover object-top transition-all duration-500 group-hover:scale-125"
                src={templateImg}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">ux/ui design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">project title</span>
              </div>
            </motion.div>
            {/*  */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden rounded-xl border-2 border-white/50"
            >
              {/* overlay */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* image */}
              <img
                className="h-60 w-full border bg-cover object-cover object-top transition-all duration-500 group-hover:scale-125"
                src={templateImg}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">ux/ui design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">project title</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
