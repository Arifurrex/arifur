import React from "react";
import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
import { MdOutlineDesignServices, MdWorkOutline } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
        <div className="container mx-auto">
          <div className="mx-auto flex h-[96px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur-2xl">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-200}
              className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            >
              <AiOutlineHome />
            </Link>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center "
            >
              <SiAboutdotme />
            </Link>
            <Link
              to="service"
              activeClass="active"
              spy={true}
              smooth={true}
              className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            >
              <MdOutlineDesignServices />
            </Link>
            <Link
              to="work"
              activeClass="active"
              spy={true}
              smooth={true}
              className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center "
            >
              <MdWorkOutline />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center "
            >
              <AiOutlineContacts />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
