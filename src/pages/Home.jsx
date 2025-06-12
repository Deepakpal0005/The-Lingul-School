import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";

import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import { TbStack2 } from "react-icons/tb";
import { TbDeviceImacCode } from "react-icons/tb";
import { MdOutlineAppShortcut } from "react-icons/md";
import { MdOutlineOnlinePrediction } from "react-icons/md";

function Home() {
  const [optionBar, setOptionBar] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const backendUrl = process.env.BACKEND_URL;

  const navigate = useNavigate();

  function optionsCtrl() {
    setOptionBar(!optionBar);
    setShowOptions(!showOptions);
  }

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // setOptionBar(!optionBar)
  };

  return (
    <div className="flex flex-col gap-10 w-full items-center">
      {/* navbar */}
      <div className=" w-screen z-20 bg-gray-100 fixed flex items-center p-4 justify-around">
        {/* left */}
        <div className="xs:w-[80%] sm:w-[80%] md:w-[40%] lg:w-[40%]">
          <img
            onClick={() => scrollToDiv("home-section")}
            src=""
            alt=""
            className="xs:h-8 md:h-12 lg:h-14 hover:cursor-pointer"
          />
        </div>

        {/* right */}
        <div className="md:w-[40%] lg:w-[40%] hidden md:flex lg:flex lg:justify-between md:justify-between text-2xl text-slate-400 ">
          <div
            onClick={() => scrollToDiv("home-section")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => scrollToDiv("about-section")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            About
          </div>
          <div
            onClick={() => scrollToDiv("testimonials-section")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            Testimonials
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            Contact
          </div>
        </div>

        {/* option bar */}
        <div className="xs:w-[10%] sm:w-[10%] visible md:hidden lg:hidden xl:hidden">
          {optionBar ? (
            <FaBarsStaggered
              onClick={optionsCtrl}
              className="size-8 hover:cursor-pointer"
            />
          ) : (
            <IoCloseSharp
              onClick={optionsCtrl}
              className="size-9 hover:cursor-pointer"
            />
          )}
        </div>
      </div>

      <div className=" text-white w-[full] xs:h-[30px] sm:h-[30px] md:h-[50px] lg:h-[50px] xl:h-[50px]">
        ac
      </div>

      {/* options */}
      {showOptions ? (
        <div className="w-[90%] h-[250px] pl-5 flex flex-col gap-5 justify-center absolute z-10 top-[15%] bg-slate-700 text-lg text-white">
          <div
            onClick={() => scrollToDiv("home-section")}
            className="hover:cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => scrollToDiv("about-section")}
            className="hover:cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => scrollToDiv("testimonials-section")}
            className="hover:cursor-pointer"
          >
            Testimonials
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="hover:cursor-pointer"
          >
            Contact
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* home section */}
      <div
        id="home-section"
        className="home-section w-[90%] flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row xs:gap-6 sm:gap-6 bg-blue-50 h-auto xs:p-5 sm:p-5 md:p-8 lg:p-8 xl:p-8"
      >
        {/* left */}
        <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-5 items-center justify-center">
          <div className="text-blue-500 font-bold xs:text-lg sm:text-lg md:text-3xl lg:text-3xl xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
            <ReactTyped
              strings={["Willkommen bei The Lingual.","Welcome To The Lingual."]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            
            />
          </div>
          <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] ">
            Master the German Language with Confidence.
          </div>
          <div className="xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] text-slate-400 xs:text-lg sm:text-lg md:text-3xl lg:text-3xl">
            Learn from expert tutors and immersive methods tailored to help you
            speak German fluently and confidently.
          </div>
        </div>

        {/* right */}
        <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] bg-[#f3f8fe]">
          <img src="/utils/herosection.png" className="scale-105 w-full h-auto object-contain bg-transparent bg-[#f3f8fe]" alt="img" />
        </div>
      </div>

      {/* our services */}
      {/* <div id="services-section" className="services-section w-[100%] bg-slate-100 px-5 py-20 flex flex-col items-center gap-8"> */}
      {/* upper */}
      {/* <div className="w-full flex flex-col justify-center items-center gap-4"> */}
      {/* <div className="text-4xl font-extrabold text-slate-700">
                        Why Choose German Language?
                    </div> */}
      {/* <div className="xs:w-[90%] sm:w-[90%] text-center text-xl text-slate-500">
                        We provide vast variety of services tailored to your needs to give optimum user experience.
                    </div> */}
      {/* </div> */}

      {/* lower */}
      {/* <div className="w-[90%] flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center xs:gap-5 sm:gap-5 md:gap-0 lg:gap-0 xl:gap-0"> */}
      {/* UI design */}
      {/* <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl"> */}
      {/* icon */}
      {/* <div className="w-[40%] rounded-full transition-all bg-violet-100 group-hover:bg-violet-500 h-24 flex justify-center items-center">
                            <TbStack2 className="size-16"/>
                        </div> */}

      {/* head */}
      {/* <div className="text-2xl font-bold">
                            UI/UX Design
                        </div> */}

      {/* para */}
      {/* <div className="text-slate-400 text-lg">
                            Interactive UI design is key to client satisfaction.
                        </div> */}
      {/* </div> */}

      {/* web design */}
      {/* <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl"> */}
      {/* icon */}
      {/* <div className="w-[40%] rounded-full transition-all bg-blue-100 group-hover:bg-blue-500 h-24 flex justify-center items-center">
                            <TbDeviceImacCode className="size-16"/>
                        </div> */}

      {/* head */}
      {/* <div className="text-2xl font-bold">
                            Web Design
                        </div> */}

      {/* para */}
      {/* <div className="text-slate-400 text-lg">
                            Web applications developed using latest technologies.
                        </div> */}
      {/* </div> */}

      {/* mobile app design */}
      {/* <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl"> */}
      {/* icon */}
      {/* <div className="w-[40%] rounded-full transition-all bg-rose-100 group-hover:bg-rose-500 h-24 flex justify-center items-center">
                            <MdOutlineAppShortcut className="size-16"/>
                        </div> */}

      {/* head */}
      {/* <div className="text-2xl font-bold">
                            Mobile Applications
                        </div> */}

      {/* para */}
      {/* <div className="text-slate-400 text-lg">
                            All sorts of mobile applications to increase your accessibility.
                        </div> */}
      {/* </div> */}

      {/* Digital Marketing */}
      {/* <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl"> */}
      {/* icon */}
      {/* <div className="w-[40%] rounded-full transition-all bg-emerald-100 group-hover:bg-emerald-500 h-24 flex justify-center items-center">
                            <MdOutlineOnlinePrediction className="size-16"/>
                        </div> */}

      {/* head */}
      {/* <div className="text-2xl font-bold">
                            Digital Marketing
                        </div> */}

      {/* para */}
      {/* <div className="text-slate-400 text-lg">
                            Digital marketing to take your business to upper levels.
                        </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose German Language?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="text-5xl mb-3">💼</div>
            <p>Career in MNCs</p>
          </div>
          <div>
            <div className="text-5xl mb-3">🎓</div>
            <p>Study in Germany</p>
          </div>
          <div>
            <div className="text-5xl mb-3">✈️</div>
            <p>Travel with Confidence</p>
          </div>
          <div>
            <div className="text-5xl mb-3">🤝</div>
            <p>Cultural Connections</p>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <div id="about-section" className="about-section w-[85%] h-auto flex">
        {/* left  */}
        <div className="w-[50%] hidden md:flex lg:flex xl:flex justify-around">
          {/* 2 images */}
          <div className="flex flex-col gap-7">
            <div>
              <img
                src="/utils/red-wave.svg"
                alt="red-wave"
                className="absolute z-10 left-[8%]"
              />
            </div>
            <div>
              <img src="/utils/about-01.png" alt="about-01" />
            </div>
            <div>
              <img src="/utils/about-02.png" alt="about-02" />
            </div>
          </div>

          {/* 1 image */}
          <div className="flex flex-col gap-2 justify-between">
            <div>
              <img src="/utils/yellow-semicircle.svg" alt="yellow-semicircle" />
            </div>
            <div>
              <img src="/utils/about-03.png" alt="about-03" />
            </div>
            <div>
              <img src="/utils/blue-semicircle.svg" alt="blue-semicircle" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-6 justify-center xs:items-center sm:items-center md:items-end lg:items-end xl:items-end">
          <div className="w-[80%] text-xl font-semibold text-blue-600">
            Why Choose Us
          </div>
          <div className="w-[80%] xs:text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">
            Your Gateway to Fluent German Starts Here 
          </div>
          <div className="w-[80%] text-slate-500">
           Our experienced instructors use proven teaching methods, personalized guidance, and immersive practice to help you speak German confidently. Whether for academic, travel, or career goals — we're here to support your success.
          </div>
             {/* wave only for mobile view */}
                        <div className="absolute md:hidden lg:hidden xl:hidden w-full">
                            <div className="left-[80%] relative">
                                <img src="/utils/red-wave.svg"/>
                            </div>
                        </div>
        </div>
        </div>


      {/* features */}
      <div className="flex flex-col gap-8 w-[85%] bg-slate-50">
        {/* upper */}
        <div className=" w-full flex flex-col gap-5 pt-4 justify-center items-center">
          <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold xs:w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center">
            {/* We Offer The Best Quality Service for You */}
            What Makes Us the Top Choice for German Learners
          </div>
          <div className="animate-ping rotate-90 absolute xs:right-[8%] sm:right-[8%] md:right-48 lg:right-48 xl:right-48">
            <img
              src="/utils/pink-triangle.svg"
              alt="pink-trinagle"
              className="p-4 xs:size-20 sm:size-20 md:size-32 lg:size-32 xl:size-32 animate-bounce"
            />
          </div>
          <div className="text-slate-400 xsLw-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center">
             We focus on personalized German learning with expert guidance, engaging classes, and real-world communication practice — helping you master the language in a comfortable, interactive environment.
          </div>
        </div>
        {/* lower */}
        <div className=" w-full flex mt-5 mb-5 justify-center items-center">
          <div className="w-[90%] flex xs:flex-col sm:flex-col md:grid lg:grid xl:grid grid-cols-3 grid-rows-2 gap-6">
            <div className="flex flex-col border p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                <img src="/utils/icon-04.svg" alt="icon-04" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* Crafted for Startups */}
                heading-I
              </div>

              {/* desc */}
              <div className="text-slate-600">
                content
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                <img src="/utils/icon-05.svg" alt="icon-05" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* High-quality Design */}
                heading-II
              </div>

              {/* desc */}
              <div className="text-slate-600">
                content
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl transition-all">
              {/* icon */}
              <div className="">
                <img src="/utils/icon-06.svg" alt="icon-06" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* All Essential Sections */}
                heading-III
              </div>

              {/* desc */}
              <div className="text-slate-600">
                  content
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <img src="/utils/icon-07.svg" alt="icon-07" /> */}
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                heading-IV
              </div>

              {/* desc */}
              <div className="text-slate-600">
                content
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <HiMiniWrenchScrewdriver className="size-10 fill-blue-600" /> */}
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* Fully Customizable */}
                heading-V
              </div>

              {/* desc */}
              <div className="text-slate-600">
                content
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                <IoMdTime className="size-12 fill-blue-600" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* Regular Updates */}
                heading-VI
              </div>

              {/* desc */}
              <div className="text-slate-600">
                content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// can you find the problem due to which it is taking more width than the screen
