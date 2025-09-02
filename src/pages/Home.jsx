import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import { FaWhatsapp } from "react-icons/fa";
import Contact from "./Contact";

import { IoMdTime } from "react-icons/io";
import {
  FaBarsStaggered,
  FaBookOpen,
  FaBriefcase,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import { RiShieldCheckFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { FaRocket } from "react-icons/fa";
import { toast } from "react-hot-toast";

import {
  FaChalkboardTeacher,
  FaUniversity,
  FaScroll,
  FaTheaterMasks,
  FaGraduationCap,
} from "react-icons/fa";

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
    setOptionBar(true);
    setShowOptions(false);
  };

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
    if (formData.name.trim === "") {
      toast.error("Name is required.");
      return;
    }
    if (formData.email.trim === "") {
      toast.error("Email is required.");
      return;
    }
    if (formData.number.trim === "") {
      toast.error("Number is required.");
      return;
    }
    try {
      try {
        const response = await axios.post(`http://localhost:3000/sendMail`, {
          formData,
        });
        console.log("response : ", response.status);
      } catch (error) {
        // console.log("Error");
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
        return;
      }

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

  return (
    <div className="flex  flex-col gap-10 w-full items-center border border-red-500">
      {/* navbar */}
      <div className=" w-screen z-20 bg-gray-100 fixed top-5 flex items-center p-4 justify-around h-16">
        {/* left */}
        <div className="xs:w-[80%] sm:w-[80%] md:w-[40%] lg:w-[40%] flex items-center space-x-3">
          <img
            onClick={() => scrollToDiv("home-section")}
            src="/utils/NewLinguallogo.png"
            alt="The Lingual"
            className="xs:h-20 md:h-20 lg:h-24 hover:cursor-pointer  object-contain "
          />
          <h1 className="xs:text-lg lg:text-2xl  font-bold text-blue-500">
            THE LINGUAL
          </h1>
        </div>

        {/* right */}
        <div className="md:w-[40%] lg:w-[40%] hidden md:flex lg:flex lg:justify-between md:justify-between md:gap-3 text-2xl text-slate-400 ">
          <div
            onClick={() => scrollToDiv("home-section")}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            <h1 className="xs:text-lg lg:text-2xl ">Home</h1>
          </div>
          <div
            onClick={() => scrollToDiv("about-section")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            <h1 className="xs:text-lg lg:text-2xl">About</h1>
          </div>
          <div
            onClick={() => scrollToDiv("courses-section")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            <h1 className="xs:text-lg lg:text-2xl">Courses</h1>
          </div>
          <div
            onClick={() => scrollToDiv("testimonials-section")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            <h1 className="xs:text-lg lg:text-2xl">Testimonials</h1>
          </div>
          <div
            onClick={() => navigate("/contacts")}
            className="hover:text-blue-500 hover:cursor-pointer "
          >
            <h1 className="xs:text-lg lg:text-2xl">Contact</h1>
            
          </div>
        </div>

        {/* option bar */}
        <div className="xs:w-[10%] sm:w-[10%] visible md:hidden lg:hidden xl:hidden ">
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
        <div className="w-[90%] h-[250px] pl-5 flex flex-col gap-5 justify-center fixed top-[80px] left-1/2 -translate-x-1/2 bg-slate-700 text-lg text-white z-50 rounded-md shadow-lg">
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
            onClick={() => scrollToDiv("courses-section")}
            className="hover:cursor-pointer"
          >
            Courses
          </div>
          <div
            onClick={() => scrollToDiv("testimonials-section")}
            className="hover:cursor-pointer"
          >
            Testimonials
          </div>
          <div
            onClick={() => navigate("/contacts")}
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
        className="home-section  w-full max-w-screen flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row xs:gap-6 sm:gap-6 bg-blue-50 h-auto xs:p-5 sm:p-5 md:p-8 lg:p-8 xl:p-8 overflow-hidden"
      >
        {/* left */}
        <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-5 items-center justify-center">
          <div className="text-blue-500 font-bold xs:text-lg sm:text-lg md:text-3xl lg:text-3xl xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
            <ReactTyped
              strings={[
                "Willkommen bei The Lingual.",
                "Welcome To The Lingual.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] ">
            Unlock Fluency at The Lingual – <br /> Foreign Language School
          </div>
          <div className="xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] text-slate-400 xs:text-lg sm:text-lg md:text-3xl lg:text-3xl">
            Join <span className=" font-semibold">The Lingual</span> to master
            German, French, Spanish, and English with expert tutors, interactive
            lessons, and real-world communication practice — all tailored to
            your goals and pace.
          </div>
        </div>

        {/* right */}
        <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] bg-[#f3f8fe]">
          <img
            src="/utils/herosection.png"
            className="scale-105 w-full h-auto object-contain bg-transparent bg-[#f3f8fe]"
            alt="img"
          />
        </div>
      </div>
      {/* our courses */}
      <div
        id="courses-section"
        className="courses-section w-[100%] bg-slate-100 px-5 py-20 flex flex-col items-center gap-8"
      >
        {/* upper */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="text-4xl font-extrabold text-slate-700">
            Our Courses
          </div>
          {/* <div className="xs:w-[90%] sm:w-[90%] text-center text-xl text-slate-500">
                      Courses We Offer: German, French, Spanish, English — designed for all levels, from beginners to advanced learners.
                    </div> */}
          <p className="text-center text-slate-400 max-w-2xl">
            Our language courses are taught by certified instructors, with a
            focus on speaking, listening, reading, and writing skills. Boost
            your career, education, and travel experiences with us.
          </p>
        </div>

        {/* lower */}
        <div className="w-[90%] flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center xs:gap-5 sm:gap-5 md:gap-0 lg:gap-0 xl:gap-0">
          {/* German */}
          <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
            {/* icon */}
            <div className="w-[40%] rounded-full transition-all bg-violet-100 group-hover:bg-violet-500 h-24 flex justify-center items-center">
              {/* <FaGlobeEurope className="size-16" /> */}
              {/* <FaLanguage className="size-16" /> */}
              <FaBookOpen className="absolute text-4xl text-violet-500 group-hover:opacity-0 transition-all duration-300" />
              <FaScroll className="absolute text-4xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>

            {/* head */}
            <div className="text-2xl font-bold">German</div>

            {/* para */}
            <div className="text-slate-400 ">
              From A1 to C2 levels, prepare for Goethe exams and master German
              grammar and conversation.
            </div>
          </div>

          {/* French */}
          <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
            {/* icon */}
            <div className="w-[40%] rounded-full transition-all bg-blue-100 group-hover:bg-blue-500 h-24 flex justify-center items-center">
              <FaTheaterMasks className="absolute text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaUniversity className="absolute text-4xl text-blue-500 group-hover:opacity-0 transition-all duration-300" />
              {/* <FaUtensils className="absolute text-4xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300" /> */}
            </div>

            {/* head */}
            <div className="text-2xl font-bold">French</div>

            {/* para */}
            <div className="text-slate-400 ">
              Build a solid foundation in French with an emphasis on practical
              communication.
            </div>
          </div>

          {/* Spanish */}
          <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
            {/* icon */}
            <div className="w-[40%] rounded-full transition-all bg-rose-100 group-hover:bg-rose-500 h-24 flex justify-center items-center">
              <FaGlobe className="absolute text-4xl text-violet-500 group-hover:opacity-0 transition-opacity duration-300" />
              <FaHeadset className="absolute text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* head */}
            <div className="text-2xl font-bold">Spanish</div>

            {/* para */}
            <div className="text-slate-400 ">
              Learn Spanish for travel, business, or exams with our immersive
              courses.
            </div>
          </div>

          {/* English */}
          <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
            {/* icon */}
            <div className="w-[40%] rounded-full transition-all bg-emerald-100 group-hover:bg-emerald-500 h-24 flex justify-center items-center">
              <FaGraduationCap className="absolute text-4xl text-violet-500 group-hover:opacity-0 transition-opacity duration-300" />
              <FaBriefcase className="absolute text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* head */}
            <div className="text-2xl font-bold">English</div>

            {/* para */}
            <div className="text-slate-400 ">
              Boost your English for academic, professional, and personal
              success.
            </div>
          </div>
        </div>
      </div>

      {/* <section className="py-20 bg-gray-100 text-center">
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
      </section> */}

      {/* why choose us */}
      <div
        id="about-section"
        className="about-section w-full max-w-[85%] h-auto flex"
      >
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
            Master Any Language with Confidence
          </div>
          <div className="w-[80%] text-slate-500">
            Our institute offers expert instructors, immersive learning
            experiences, and flexible programs to help you achieve fluency in
            the language of your choice. Whether for study, work, or travel —
            we’re committed to your success.
          </div>
          {/* wave only for mobile view */}
          <div className="absolute md:hidden lg:hidden xl:hidden w-full">
            <div className="flex justify-end relative">
              {/* <img src="/utils/red-wave.svg" /> */}
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
            What Makes Our Language Programs Stand Out
          </div>
          <div className="animate-ping rotate-90 absolute xs:right-[8%] sm:right-[8%] md:right-48 lg:right-48 xl:right-48">
            <img
              src="/utils/pink-triangle.svg"
              alt="pink-trinagle"
              className="p-4 xs:size-20 sm:size-20 md:size-32 lg:size-32 xl:size-32 animate-bounce"
            />
          </div>
          <div className="text-slate-400 xsLw-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center">
            Our courses are thoughtfully designed to provide you with the
            skills, confidence, and cultural understanding you need to
            communicate effectively in any language.
          </div>
        </div>
        {/* lower */}
        <div className=" w-full flex mt-5 mb-5 justify-center items-center">
          <div className="w-[90%] flex xs:flex-col sm:flex-col md:grid lg:grid xl:grid grid-cols-3 grid-rows-2 gap-6">
            <div className="flex flex-col border p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <img src="/utils/icon-04.svg" alt="icon-04" /> */}
                <RiShieldCheckFill className="size-12 fill-blue-600" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* Crafted for Startups */}
                Certified Trainers
              </div>

              {/* desc */}
              <div className="text-slate-600">
                Learn from qualified and experienced instructors who make
                language learning effective and enjoyable.3
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <img src="/utils/icon-05.svg" alt="icon-05" /> */}
                <FaChalkboardTeacher className="size-12 fill-blue-600" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* High-quality Design */}
                Interactive Classes
              </div>

              {/* desc */}
              <div className="text-slate-600">
                Our sessions are packed with conversations, activities, and
                real-life scenarios for practical use.
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl transition-all">
              {/* icon */}
              <div className="">
                {/* <img src="/utils/icon-06.svg" alt="icon-06" /> */}
                {/* <FaChalkboardTeacher className="size-12 fill-blue-600" /> */}
                <MdGroups className="size-12 fill-blue-600" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* All Essential Sections */}
                Small Group Batches
              </div>

              {/* desc */}
              <div className="text-slate-600">
                {" "}
                Benefit from personal attention and a friendly, supportive
                learning environment.
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <img src="/utils/icon-07.svg" alt="icon-07" /> */}
                <IoMdTime className="size-12 fill-blue-700" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                Flexible Timings
              </div>

              {/* desc */}
              <div className="text-slate-600">
                {" "}
                Choose class timings that suit your lifestyle — morning,
                evening, or weekend options available.
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <HiMiniWrenchScrewdriver className="size-10 fill-blue-600" /> */}
                <PiCertificateFill className="size-12 fill-blue-600" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* Fully Customizable */}
                Exam & Certification Preparation
              </div>

              {/* desc */}
              <div className="text-slate-600">
                We prepare you for internationally recognized exams and
                certifications for various languages.
              </div>
            </div>
            <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
              {/* icon */}
              <div className="">
                {/* <IoMdTime className="size-12 fill-blue-600" /> */}
                <FaRocket className="size-12 fill-blue-600" />
              </div>

              {/* head */}
              <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                {/* Regular Updates */}
                Fast-track & Custom Courses
              </div>

              {/* desc */}
              <div className="text-slate-600">
                Accelerated and tailor-made programs designed to meet your
                personal or professional goals faster.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}

      <div
        id="testimonials-section"
        className="services-section w-[100%] bg-slate-100 px-5 py-20 flex flex-col items-center gap-8"
      >
        {/* upper */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="text-4xl font-extrabold text-slate-700">
            What Our Students Say
          </div>
          <div className="xs:w-[90%] sm:w-[90%] text-center text-xl text-slate-500">
            Hear from our learners who have transformed their language skills
            with us.
          </div>
          {/* <p className="text-center text-slate-400 max-w-2xl">
            Hear from our learners who have transformed their language skills with us.
          </p> */}
        </div>

        {/* lower */}
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all flex flex-col gap-4 items-center text-center">
            <img
              src="/utils/image.jpg"
              alt="Student 1"
              className="w-24 h-24 rounded-full object-cover shadow"
            />
            <p className="text-slate-600 italic">
              "Thanks to this institute, I cleared my German A2 exam with
              confidence. The classes were engaging and practical."
            </p>
            <div className="font-semibold text-blue-600">Priya Sharma</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all flex flex-col gap-4 items-center text-center">
            <img
              src="/utils/image4.jpg"
              alt="Student 2"
              className="w-24 h-24 rounded-full object-cover shadow"
            />
            <p className="text-slate-600 italic">
              "The small batch size and individual attention helped me improve
              my French speaking skills quickly."
            </p>
            <div className="font-semibold text-blue-600">Ashad Ahmad</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all flex flex-col gap-4 items-center text-center mr-3">
            <img
              src="/utils/image3.jpg"
              alt="Student 3"
              className="w-24 h-24 rounded-full object-cover shadow"
            />
            <p className="text-slate-600 italic">
              "Highly recommend their English fast-track course. The trainers
              were friendly and professional."
            </p>
            <div className="font-semibold text-blue-600">Ritu Verma</div>
          </div>
        </div>
      </div>

      {/* Form */}

      <div className="w-[100%] bg-slate-100 px-5 py-20 flex flex-col items-center gap-5">
        <div className="w-fill flex flex-col gap-6 items-center">
          <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl  font-semibold">
            Let's Stay Connected
          </div>
          <div className="text-lg text-slate-400 text-center">
            If you have any query or just want to know anything about us, feel
            free to contact.
          </div>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-white w-full md:w-[62%] p-8 rounded-xl shadow-lg flex flex-col gap-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="98eec810-3a80-4389-8d71-02a03ee64b8a"
          />
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border rounded-lg px-4 py-3 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border rounded-lg px-4 py-3 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              required
              className="border rounded-lg px-4 py-3 w-full"
            />
            <select
              name="subject"
              required
              className="border rounded-lg px-4 py-3 w-full text-slate-500"
            >
              <option value="" disabled selected>
                Select Course
              </option>
              <option value="German Language">German Language</option>
              <option value="French Language">French Language</option>
              <option value="Spanish Language">Spanish Language</option>
              <option value="English Language">English Language</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="border rounded-lg px-4 py-3"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="lg:w-1/3 xs:w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Contact Details - Left */}
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-lg font-semibold text-blue-600">
              Contact Details
            </h3>
            <p>Greater Noida West</p>
            <p>
              <strong>Phone:</strong> +91 9540647081
            </p>
            <p>
              <strong>Email:</strong> info@lingualeducation.com
            </p>
          </div>

          {/* Center Logo and Info */}
          <div className="flex flex-col items-center text-center gap-2">
            <img
              src="/utils/NewLinguallogo.png"
              alt="The Lingual Logo"
              className="h-24 md:h-32 lg:h-40 rounded-full"
            />
            <p className="text-blue-600 font-bold text-xl md:text-2xl">
              THE LINGUAL
            </p>
            <p className="text-sm text-gray-500">Foreign Language School</p>
            <p className="text-xs text-gray-400">
              German | French | Spanish | English
            </p>
          </div>

          {/* Quick Links - Right */}
          <div className="flex flex-col gap-1 text-right md:items-end">
            <h3 className="text-lg font-semibold text-blue-600">Quick Links</h3>

            <div
              onClick={() => scrollToDiv("home-section")}
              className="text-gray-600 hover:text-blue-600"
            >
              Home
            </div>
            <div
              onClick={() => scrollToDiv("about-section")}
              className="text-gray-600 hover:text-blue-600"
            >
              About
            </div>
            <div
              onClick={() => scrollToDiv("about-section")}
              className="text-gray-600 hover:text-blue-600"
            >
              Courses
            </div>
            <div
              onClick={() => scrollToDiv("about-section")}
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </div>
            <div
              onClick={() => navigate("/contacts")}
              className="text-gray-600 hover:text-blue-600"
            >
              Contact
            </div>
          </div>
        </div>

        {/* Footer Bottom Social + Copyright */}
        <div className="flex justify-center gap-4 pb-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="text-center text-xs text-gray-400 pb-4">
          © {new Date().getFullYear()} THE LINGUAL. All Rights Reserved.
        </div>

        {/* whatsapp Icon */}

        <a
          href="https://wa.me/919540647081?text=Hello%2C%20I%20am%20interested%20in%20your%20language%20courses.%20Please%20share%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 text-white inline-block " />
        </a>
      </footer>
    </div>
  );
}

export default Home;

// can you find the problem due to which it is taking more width than the screen
