import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";

import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import { Toaster, toast } from "react-hot-toast";

function Contact() {
  const navigate = useNavigate();

  const [optionBar, setOptionBar] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // update the form field based on input name
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim == "") {
      toast.error("Name is required.");
      return;
    }
    if (formData.email.trim == "") {
      toast.error("Email is required.");
      return;
    }
    if (formData.number.trim == "") {
      toast.error("Number is required.");
      return;
    }
    try {
      try {
        const response = await axios.post(
          `https://bestcoder.onrender.com/sendMail`,
          { formData }
        );
        // console.log("response : ",response.status);
      } catch (error) {
        // console.log("Error");
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
        return;
      }
      // console.log("response : ",response.data);
      // toast.custom((t) => (
      //     <div
      //       className={`${
      //         t.visible ? 'animate-enter' : 'animate-leave'
      //       } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      //     >
      //       <div className="flex-1 w-0 p-4">
      //         <div className="flex items-start">
      //           <div className="flex-shrink-0 pt-0.5">
      //             <img
      //               className="h-10 w-10 rounded-full"
      //               src="/utils/checked.png"
      //               alt="checked"
      //             />
      //           </div>
      //           <div className="ml-3 flex-1">
      //             <p className="text-sm font-medium animate-bounce text-gray-900">
      //               Message Sent
      //             </p>
      //             <p className="mt-1 text-sm text-gray-500">
      //               We will get back to you soon.
      //             </p>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="flex border-l border-gray-200">
      //         <button
      //           onClick={() => toast.dismiss(t.id)}
      //           className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      //         >
      //           Close
      //         </button>
      //       </div>
      //     </div>
      //   ))
      navigate("/thank-you");
    } catch (e) {
      console.log("Error in mail ctrl");
    }

    // clear the form after submission
    // clear the form
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  function optionsCtrl() {
    setOptionBar(!optionBar);
    setShowOptions(!showOptions);
  }

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    navigate("/");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // setOptionBar(!optionBar)
  };

  return (
    <div className="w-screen h-screen">
      {/* back */}
      <div className="w-[100%] bg-slate-100 p-5">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white w-24 h-12 rounded-2xl"
        >
          Home
        </button>
      </div>

      <div className=" text-white select-none w-[full] xs:h-[30px] sm:h-[30px] md:h-[50px] lg:h-[50px] xl:h-[50px]">
        ac
      </div>

      

      {/* contact */}
      <div
        id="contact-section"
        className="contact-section w-full bg-slate-100 flex justify-center items-center pb-10"
      >
        <div className="w-[80%] flex flex-col gap-5 justify-center items-center mt-6">
          {/* upper */}
          <div className="w-full">
            <div className="xs:hidden sm:hidden md:absolute lg:absolute xl:absolute">
              <img src="/utils/yellow-semicircle.svg" />
            </div>
            <div className="w-fill flex flex-col gap-6 items-center">
              <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl  font-semibold">
                Let's Stay Connected
              </div>
              <div className="text-lg text-slate-400 text-center">
                If you have any query or just want to know anything about us,
                feel free to contact.
              </div>
            </div>
          </div>

          {/* wave */}
          {/* <div className="w-[90%] flex justify-end">
            <img
              src="/utils/red-wave.svg"
              alt="wave"
              className="rotate-90 scale-125"
            />
          </div> */}

          {/* lower */}
          <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-5 md:gap-0 lg:gap-0 xl:gap-0 w-full ">
            {/* details */}
            <div className="xs:w-[100%] sm:w-[100%] md:w-[35%] lg:w-[35%] xl:w-[35%] flex flex-col gap-6 bg-white xs:pl-8 sm:pl-8 md:pl-16 lg:pl-16 xl:pl-16 xs:pr-3 sm:pr-3 md:pr-0 lg:pr-0 xl:pr-0 pt-10 pb-7">
              <div className="flex flex-col">
                {/* head */}
                <div className="text-2xl ">Email Address</div>

                {/* value */}
                <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                  {/* jscoder2023@gmail.com */}
                  <a href="mailto:Info@lingualeducation.com">
                    Info@lingualeducation.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                {/* head */}
                <div className="text-2xl ">Office Location</div>

                {/* value */}
                <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                  Greater Noida (West).
                </div>
              </div>
              <div className="flex flex-col">
                {/* head */}
                <div className="text-2xl ">Phone Number</div>

                {/* value */}
                <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl hover:cursor-pointer hover:text-blue-500">
                  <a href="tel:+919540647081" class="">
                    +91 9540647081
                  </a>
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <iframe
                  title="The Lingual Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.265408246227!2d77.33867871502375!3d28.602306592383842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d13a0c4fe77bb%3A0x9aab69b3d8cc68f9!2sGreater%20Noida%20West%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719350000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* <div className="flex flex-col"> */}
              {/* head */}
              {/* <div className="text-2xl "> */}
              {/* Skype Email */}
              {/* </div> */}

              {/* value */}
              {/* <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl"> */}
              {/* youremail@gmail.com */}
              {/* </div> */}
              {/* </div> */}
            </div>

            {/* ball */}
            <div className="animate-pulse bg-transparent xs:w-[13%] sm:w-[13%] md:w-[3%] lg:w-[3%] xl:w-[3%]">
              <img
                className="animate-slow-spin"
                src="/utils/blue-semicircle.svg"
                alt="ring"
              />
            </div>

            {/* form */}
            <div className="bg-white flex flex-col pt-8 pb-10 gap-8 items-center xs:w-[100%] sm:w-[100%] md:w-[62%] lg:w-[62%] xl:w-[62%]">
              {/* name & email  */}
              <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-2 gap-0 w-full">
                {/* name */}
                <div className="flex flex-col gap-3 xs:items-center sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                  <div className="text-xl">Full Name</div>
                  <div>
                    <input
                      onChange={handleInputChange}
                      value={formData.name}
                      name="name"
                      className="h-12 text-center border-2 xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                      type="text"
                      placeholder="Enter your name."
                    />
                  </div>
                </div>

                {/* email */}
                <div className="flex flex-col gap-3 mt-5 xs:items-center sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                  <div className="text-xl">Email</div>
                  <div>
                    <input
                      onChange={handleInputChange}
                      value={formData.email}
                      name="email"
                      className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                      type="email"
                      placeholder="Example@gmail.com"
                    />
                  </div>
                </div>
              </div>

              {/* number & subject */}
              <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-1 gap-0 w-full">
                {/* number */}
                <div className="flex flex-col gap-3 xs:items-center sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                  <div className="text-xl">Phone Number</div>
                  <div>
                    <input
                      onChange={handleInputChange}
                      value={formData.number}
                      name="number"
                      className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* sub */}
                <div className="flex flex-col gap-3 mt-5 xs:items-center sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                  <div className="text-xl">Subject</div>
                  <div>
                    <input
                      onChange={handleInputChange}
                      value={formData.subject}
                      name="subject"
                      className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                      type="email"
                      placeholder="Type your Subject"
                    />
                  </div>
                </div>
              </div>

              {/* message */}
              <div className="flex flex-col gap-3 w-[65%] xs:items-center sm:items-center md:items-start lg:items-start">
                <div className="text-xl">Message</div>
                <div className="w-full">
                  <textarea
                    onChange={handleInputChange}
                    value={formData.message}
                    name="message"
                    className="w-full border-2 h-36 rounded-lg p-4 "
                  ></textarea>
                </div>
              </div>

              {/* button */}
              <div className="">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
