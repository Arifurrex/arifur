import React from "react";
import Logo from "../assets/ar2.png";
const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="w-[90px]">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm text-sm sm:text-base">
            work with me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
