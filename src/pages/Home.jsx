import React, { useState,useRef } from "react";
import axios from 'axios'

import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { TbStack2 } from "react-icons/tb";
import { TbDeviceImacCode } from "react-icons/tb";
import { MdOutlineAppShortcut } from "react-icons/md";
import { MdOutlineOnlinePrediction } from "react-icons/md";

import { Toaster,toast } from "react-hot-toast";

import '../styles/homeStyles.css'

function Home()
{
    const [optionBar,setOptionBar] = useState(true)
    const [showOptions,setShowOptions] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
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

        // console.log('Form Data:', formData);

        // call backend to send mail
        try
        {
            try
            {
                const response = await axios.post('http://localhost:4000/sendMail',{formData})
                // console.log("response : ",response.status);
            }
            catch(error)
            {
                // console.log("Error");
                // console.log(error.response.data.message);
                toast.error(error.response.data.message)
                return
            }
            // console.log("response : ",response.data);
            toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="/utils/checked.png"
                          alt="checked"
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium animate-bounce text-gray-900">
                          Message Sent
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          We will get back to you soon!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))
        }
        catch(e)
        {
            console.log("Error in mail ctrl");
        }
    
        // clear the form after submission
        setFormData({
          name: '',
          email: '',
          number: '',
          subject: '',
          message: ''
        });
        
      };

    function optionsCtrl()
    {
        setOptionBar(!optionBar)
        setShowOptions(!showOptions)
    }

    const scrollToDiv = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // setOptionBar(!optionBar)
      };

    return (
        <div className="home-main flex flex-col gap-10 w-full items-center">
            {/* navbar */}
            <div className=" w-screen z-20 bg-gray-100 fixed flex items-center p-4 justify-around">
                {/* left */}
                <div className="xs:w-[80%] sm:w-[80%] md:w-[40%] lg:w-[40%]">
                    <img onClick={() => scrollToDiv('home-section')} src="/utils/logo2.jpg" alt="logo" className="xs:h-8 md:h-12 lg:h-12 hover:cursor-pointer" />
                </div>

                {/* right */}
                <div className="md:w-[40%] lg:w-[40%] hidden md:flex lg:flex lg:justify-between md:justify-between text-2xl text-slate-400 ">
                    <div onClick={() => scrollToDiv('home-section')} className="hover:text-blue-500 hover:cursor-pointer">
                        Home
                    </div>
                    <div onClick={() => scrollToDiv('about-section')} className="hover:text-blue-500 hover:cursor-pointer ">
                        About
                    </div>
                    <div onClick={() => scrollToDiv('services-section')} className="hover:text-blue-500 hover:cursor-pointer ">
                        Services
                    </div>
                    <div onClick={() => scrollToDiv('contact-section')} className="hover:text-blue-500 hover:cursor-pointer ">
                        Contact
                    </div>
                </div>

                {/* option bar */}
                <div className="xs:w-[10%] sm:w-[10%] visible md:hidden lg:hidden xl:hidden">
                    {
                        optionBar ? 
                            <FaBarsStaggered onClick={optionsCtrl} className="size-8 hover:cursor-pointer"/>
                         : <IoCloseSharp onClick={optionsCtrl} className="size-9 hover:cursor-pointer"/>
                    }

                </div>
            </div>

            <div className=" text-white w-[full] xs:h-[30px] sm:h-[30px] md:h-[50px] lg:h-[50px] xl:h-[50px]">
                ac
            </div>

            {/* options */}
            {
                showOptions ? 
                    <div className="w-[90%] h-[250px] p-5 flex flex-col gap-5 justify-center absolute z-10 top-[15%] bg-slate-700 text-lg text-white">
                        <div onClick={() => scrollToDiv('home-section')} className="hover:cursor-pointer">
                            Home
                        </div>
                        <div onClick={() => scrollToDiv('about-section')} className="hover:cursor-pointer">
                            About
                        </div>
                        <div onClick={() => scrollToDiv('services-section')} className="hover:cursor-pointer">
                            Services
                        </div>
                        <div onClick={() => scrollToDiv('contact-section')} className="hover:cursor-pointer">
                            Contact
                        </div>
                </div> : <div></div>
            }


            {/* home section */}
            <div id="home-section" className="home-section w-[90%] flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row xs:gap-6 sm:gap-6 bg-blue-50 h-auto xs:p-5 sm:p-5 md:p-8 lg:p-8 xl:p-8">
                {/* left */}
                <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-5 items-center justify-center">
                    <div className="text-blue-500 font-bold xs:text-lg sm:text-lg md:text-3xl lg:text-3xl xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
                        Welcome To BestCoder.
                    </div>
                    <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] ">
                        We are what you are searching for all of your digital needs.
                    </div>
                    <div className="xs:w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] text-slate-400 xs:text-lg sm:text-lg md:text-3xl lg:text-3xl">
                        We are a dynamic software development company specializing in creating digital solutions that drive growth and innovation. With expertise spanning Web, Mobile App Development & Digital Marketing
                    </div>
                </div>

                {/* right */}
                <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]">
                    <img src="/utils/hero-img.svg" className=" scale-105" alt="img"/>
                </div>
            </div>

            {/* our services */}
            <div id="services-section" className="services-section w-[100%] bg-slate-100 px-5 py-20 flex flex-col items-center gap-8">
                {/* upper */}
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <div className="text-4xl font-extrabold text-slate-700">
                        Our Services
                    </div>
                    <div className="xs:w-[90%] sm:w-[90%] text-center text-xl text-slate-500">
                        We provide vast variety of services tailored to your needs to give optimum user experience.
                    </div>
                </div>

                {/* lower */}
                <div className="w-[90%] flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center xs:gap-5 sm:gap-5 md:gap-0 lg:gap-0 xl:gap-0">
                    {/* UI design */}
                    <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
                        {/* icon */}
                        <div className="w-[40%] rounded-full transition-all bg-violet-100 group-hover:bg-violet-500 h-24 flex justify-center items-center">
                            <TbStack2 className="size-16"/>
                        </div>

                        {/* head */}
                        <div className="text-2xl font-bold">
                            UI/UX Design
                        </div>

                        {/* para */}
                        <div className="text-slate-400 text-lg">
                            Interactive UI design is key to client satisfaction.
                        </div>
                    </div>

                    {/* web design */}
                    <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
                        {/* icon */}
                        <div className="w-[40%] rounded-full transition-all bg-blue-100 group-hover:bg-blue-500 h-24 flex justify-center items-center">
                            <TbDeviceImacCode className="size-16"/>
                        </div>

                        {/* head */}
                        <div className="text-2xl font-bold">
                            Web Design
                        </div>

                        {/* para */}
                        <div className="text-slate-400 text-lg">
                            Web applications developed using latest technologies.
                        </div>
                    </div>

                    {/* mobile app design */}
                    <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
                        {/* icon */}
                        <div className="w-[40%] rounded-full transition-all bg-rose-100 group-hover:bg-rose-500 h-24 flex justify-center items-center">
                            <MdOutlineAppShortcut className="size-16"/>
                        </div>

                        {/* head */}
                        <div className="text-2xl font-bold">
                            Mobile Applications
                        </div>

                        {/* para */}
                        <div className="text-slate-400 text-lg">
                            All sorts of mobile applications to increase your accessibility.
                        </div>
                    </div>
                    
                    {/* Digital Marketing */}
                    <div className="group flex flex-col justify-center items-center bg-white xs:w-[90%] sm:w-[90%] md:w-[20%] lg:w-[20%] xl:w-[20%] gap-5 text-center p-5 rounded-2xl">
                        {/* icon */}
                        <div className="w-[40%] rounded-full transition-all bg-emerald-100 group-hover:bg-emerald-500 h-24 flex justify-center items-center">
                            <MdOutlineOnlinePrediction className="size-16"/>
                        </div>

                        {/* head */}
                        <div className="text-2xl font-bold">
                            Digital Marketing
                        </div>

                        {/* para */}
                        <div className="text-slate-400 text-lg">
                            Digital marketing to take your business to upper levels.
                        </div>
                    </div>
                </div>
            </div>

            {/* why choose us */}
            <div id="about-section" className="about-section w-[85%] h-auto flex">
                {/* left  */}
                <div className="w-[50%] hidden md:flex lg:flex xl:flex justify-around">
                    {/* 2 images */}
                    <div className="flex flex-col gap-7">
                        <div>
                            <img src="/utils/red-wave.svg" alt="red-wave" className="absolute z-10 left-[8%]"/>
                        </div>
                        <div>
                            <img src="/utils/about-01.png" alt="about-01"/>
                        </div>
                        <div>
                            <img src="/utils/about-02.png" alt="about-02"/>
                        </div>
                    </div>

                    {/* 1 image */}
                    <div className="flex flex-col gap-2 justify-between">
                        <div>
                            <img src="/utils/yellow-semicircle.svg" alt="yellow-semicircle"/>
                        </div>
                        <div>
                            <img src="/utils/about-03.png" alt="about-03"/>
                        </div>
                        <div>
                            <img src="/utils/blue-semicircle.svg" alt="blue-semicircle"/>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-6 justify-center xs:items-center sm:items-center md:items-end lg:items-end xl:items-end">
                        <div className="w-[80%] text-xl font-semibold text-blue-600">
                            Why Choose Us
                        </div>
                        <div className="w-[80%] xs:text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">
                            We Make Our customers happy through our expertise.
                        </div>
                        <div className="w-[80%] text-slate-500">
                            With a team of skilled developers, designers, and strategists, we bring innovative solutions to complex challenges, ensuring quality, scalability, and a seamless user experience.
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
                        We Offer The Best Quality Service for You
                    </div>
                    <div className="animate-ping rotate-90 absolute xs:right-[8%] sm:right-[8%] md:right-48 lg:right-48 xl:right-48">
                        <img src="/utils/pink-triangle.svg" alt="pink-trinagle" className="p-4 xs:size-20 sm:size-20 md:size-32 lg:size-32 xl:size-32 animate-bounce"/>
                    </div>
                    <div className="text-slate-400 xsLw-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center">
                        We are dedicated to providing best-in-class services that prioritize quality, reliability, and customer satisfaction. Our team follows rigorous development standards and industry best practices to deliver solutions that meet the highest standards of performance and security.
                    </div>
                </div>
                {/* lower */}
                <div className=" w-full flex mt-5 mb-5 justify-center items-center">
                    <div className="w-[90%] flex xs:flex-col sm:flex-col md:grid lg:grid xl:grid grid-cols-3 grid-rows-2 gap-6">
                        <div className="flex flex-col border p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
                            {/* icon */}
                            <div className="">
                                <img src="/utils/icon-04.svg" alt="icon-04"/>
                            </div>

                            {/* head */}
                            <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                                Crafted for Startups
                            </div>

                            {/* desc */}
                            <div className="text-slate-600">
                                Startups need a good start so that they have a good future ahead.
                            </div>
                        </div>
                        <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
                            {/* icon */}
                            <div className="">
                                <img src="/utils/icon-05.svg" alt="icon-05"/>
                            </div>

                            {/* head */}
                            <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                                High-quality Design
                            </div>

                            {/* desc */}
                            <div className="text-slate-600">
                                The application development is done specially according to the client's needs.
                            </div>
                        </div>
                        <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl transition-all">
                            {/* icon */}
                            <div className="">
                                <img src="/utils/icon-06.svg" alt="icon-06"/>
                            </div>

                            {/* head */}
                            <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                                All Essential Sections
                            </div>

                            {/* desc */}
                            <div className="text-slate-600">
                                We don't miss out on what you ask for.
                            </div>
                        </div>
                        <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
                            {/* icon */}
                            <div className="">
                                <img src="/utils/icon-07.svg" alt="icon-07"/>
                            </div>

                            {/* head */}
                            <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                                Speed Optimized
                            </div>

                            {/* desc */}
                            <div className="text-slate-600">
                                We believe time is money and we abide by it.
                            </div>
                        </div>
                        <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
                            {/* icon */}
                            <div className="">
                                <HiMiniWrenchScrewdriver className="size-10 fill-blue-600"/>
                            </div>

                            {/* head */}
                            <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                                Fully Customizable
                            </div>

                            {/* desc */}
                            <div className="text-slate-600">
                                We make codes that are easy to customize whenever there is need to.
                            </div>
                        </div>
                        <div className="flex flex-col p-10 xs:gap-2 sm:gap-2 md:gap-5 lg:gap-5 xl:gap-5 rounded-3xl hover:bg-slate-50 shadow-md hover:shadow-xl  transition-all">
                            {/* icon */}
                            <div className="">
                                <IoMdTime className="size-12 fill-blue-600"/>
                            </div>

                            {/* head */}
                            <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                                Regular Updates
                            </div>

                            {/* desc */}
                            <div className="text-slate-600">
                                Regular updates on all development stages to maintain good client relationship.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* contact */}
            <div id="contact-section" className="contact-section w-full bg-slate-100 flex justify-center items-center pb-10">
                <div className="w-[80%] flex flex-col gap-5 justify-center items-center mt-6">
                    {/* upper */}
                    <div className="w-full">
                        <div className="xs:hidden sm:hidden md:absolute lg:absolute xl:absolute">
                            <img src="/utils/yellow-semicircle.svg"/>
                        </div>
                        <div className="w-fill flex flex-col gap-6 items-center">
                            <div className="xs:text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl  font-semibold">
                                Let's Stay Connected
                            </div>
                            <div className="text-lg text-slate-400 text-center">
                                If you have any query or just want to know anything about us, feel free to contact.
                            </div>
                        </div>
                    </div>

                    {/* wave */}
                    <div className="w-[90%] flex justify-end">
                        <img src="/utils/red-wave.svg" alt="wave" className="rotate-90 scale-125"/>
                    </div>

                    {/* lower */}
                    <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-5 md:gap-0 lg:gap-0 xl:gap-0 w-full ">
                        {/* details */}
                        <div className="xs:w-[100%] sm:w-[100%] md:w-[35%] lg:w-[35%] xl:w-[35%] flex flex-col gap-6 bg-white xs:pl-8 sm:pl-8 md:pl-16 lg:pl-16 xl:pl-16 xs:pr-3 sm:pr-3 md:pr-0 lg:pr-0 xl:pr-0 pt-10 pb-7">
                            <div className="flex flex-col">
                                {/* head */}
                                <div className="text-2xl ">
                                    Email Address
                                </div>

                                {/* value */}
                                <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                                    jscoder2023@gmail.com
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {/* head */}
                                <div className="text-2xl ">
                                    Office Location
                                </div>

                                {/* value */}
                                <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                                    A-70 Marium Nagar, Ghaziabad, 201003
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {/* head */}
                                <div className="text-2xl ">
                                    Phone Number
                                </div>

                                {/* value */}
                                <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                                    +91 8595031668
                                </div>
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
                            <img className="animate-slow-spin" src="/utils/blue-semicircle.svg" alt="ring"/>
                        </div>

                        {/* form */}
                        <div className="bg-white flex flex-col pt-8 pb-10 gap-8 items-center xs:w-[100%] sm:w-[100%] md:w-[62%] lg:w-[62%] xl:w-[62%]">
                            {/* name & email  */}
                            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-2 gap-0 w-full">
                                {/* name */}
                                <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] xs:items-center sm:items-center md:items-start lg:items-start">
                                    <div className="text-xl">
                                        Full Name
                                    </div>
                                    <div>
                                        <input onChange={handleInputChange} value={formData.name} name="name" className="h-12 text-center border-2 xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg" type="text" placeholder="Enter your name."/>
                                    </div>
                                </div>

                                {/* email */}
                                <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] xs:items-center sm:items-center md:items-start lg:items-start">
                                    <div className="text-xl">
                                        Email
                                    </div>
                                    <div>
                                        <input onChange={handleInputChange} value={formData.email} name="email" className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg" type="email" placeholder="Example@gmail.com"/>
                                    </div>
                                </div>
                            </div>

                            {/* number & subject */}
                            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-2 gap-0 w-full">
                                {/* number */}
                                <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] xs:items-center sm:items-center md:items-start lg:items-start">
                                    <div className="text-xl">
                                        Phone Number
                                    </div>
                                    <div>
                                        <input onChange={handleInputChange} value={formData.number} name="number" className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg" type="text" placeholder="Enter your phone number"/>
                                    </div>
                                </div>

                                {/* sub */}
                                <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] xs:items-center sm:items-center md:items-start lg:items-start">
                                    <div className="text-xl">
                                        Subject
                                    </div>
                                    <div>
                                        <input onChange={handleInputChange} value={formData.subject} name="subject" className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg" type="email" placeholder="Type your Subject"/>
                                    </div>
                                </div>
                            </div>

                            {/* message */}
                            <div className="flex flex-col gap-3 w-[65%] xs:items-center sm:items-center md:items-start lg:items-start">
                                <div className="text-xl">
                                    Message
                                </div>
                                <div className="w-full">
                                    <textarea onChange={handleInputChange} value={formData.message} name="message" className="w-full border-2 h-36 rounded-lg p-4 ">
                                    </textarea>
                                </div>
                            </div>

                            {/* button */}
                            <div className="">
                                <button onClick={handleSubmit} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home


// can you find the problem due to which it is taking more width than the screen