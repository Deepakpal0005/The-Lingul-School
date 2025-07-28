import React from "react";

import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Details() {
  //   function OpenWhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "+919540647081"; // Replace with your desired phone number
    const message = encodeURIComponent("Hello!"); // Customize your message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-screen fixed top-0 flex items-center justify-center bg-blue-500 overflow-hidden">
      {/* strip */}
      <div className="w-[80%] flex sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center xs:gap-6 sm:gap-0 md:gap-10 lg:gap-10 xl:gap-10 text-white">
        {/* email */}
        <div className="flex items-center  gap-3">
          <div className="xs:hidden sm:hidden md:block lg:block xl:block">
            <IoMail />
          </div>
          <div className=" text-sm md:text-md lg:text-md xl:text-md">
            <a href="mailto:info@lingualeducation.com">
              Info@lingualeducation.com
            </a>
          </div>
        </div>
        {/* number */}
        <div className="flex items-center  gap-3">
          <div className="xs:hidden sm:hidden md:block lg:block xl:block">
            <FaPhoneAlt />
          </div>
          <div className=" text-sm md:text-md lg:text-md xl:text-md ">
            <a href="tel:+919540647081" class="">
              +91 9540647081
            </a>
          </div>
        </div>
        {/* whatsapp */}
        {/* <div onClick={openWhatsApp} className="hover:cursor-pointer flex items-center gap-3">
                    <div className=" text-sm md:text-md lg:text-md xl:text-md ">click to open : </div>
                    <div><IoLogoWhatsapp/></div>
                </div> */}
      </div>
    </div>
  );
}

export default Details;
