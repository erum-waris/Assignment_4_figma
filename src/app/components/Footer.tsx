import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" absolute top-[100%] flex justify-center items-center">
       <div className="flex justify-center  flex-col gap-4">
        <div className="flex gap-8">
        <FaFacebookSquare  className="w-[30px] h-[30px] text-[#21243D] "/>
        <FaInstagram  className="w-[30px] h-[30px] text-[#21243D] "/>
        <FaTwitter className="w-[30px] h-[30px] text-[#21243D] "/>
        <FaLinkedin  className="w-[30px] h-[30px] text-[#21243D] "/>
        </div>
      </div>
      <p className="text-center font-heebo py-10 text-lg font-semibold">
      Copyright &copy;2020 All rights reserved 
      </p>
    </footer>
  );
};

export default Footer;