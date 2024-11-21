import React from "react";
import { useNavigate } from "react-router-dom/dist";

function ThankYou()
{
    const navigate = useNavigate()

    return (
        <div className="w-screen h-screen flex flex-col gap-6 items-center justify-">
            {/* back */}
            <div className="w-[100%] bg-slate-100 p-3">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white w-24 h-12 rounded-2xl">
                    Home
                </button>
            </div>
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between w-full h-screen bg-slate-5 px-5">
                <div className=" xs:w-[90%] sm:w-[30%] md:w-[30%] lg:w-[30%]">
                    <img src="/utils/celeb3.jpg" className="w-[90%] xs:rotate-0 sm:rotate-0 md:-rotate-90 lg:-rotate-90"/>
                </div>
                <div className="flex flex-col xs:gap-4 sm:gap-4 md:gap-10 lg:gap-10 items-center">
                    <div className="text-2xl">
                        <span className="text-5xl font-semibold">Thank You </span> for contacting us.
                    </div>
                    <div className="text-4xl">
                        We will get back to you soon!!!
                    </div>
                </div>
                <div className=" flex justify-end  xs:w-[90%] sm:w-[30%] md:w-[30%] lg:w-[30%]">
                <img src="/utils/celeb4.jpg" className="w-[100%]"/>
                </div>

            </div>
        </div>
    )
}

export default ThankYou