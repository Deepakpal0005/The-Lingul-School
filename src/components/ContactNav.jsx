import React from "react";

function ContactNav()
{
    return (
<div className=" w-screen z-20 bg-gray-100 fixed flex items-center p-4 justify-around">
                {/* left */}
                <div className="xs:w-[80%] sm:w-[80%] md:w-[40%] lg:w-[40%]">
                    <img onClick={() => navigate('/')} src="/public/utils/logo3.jpg" alt="logo" className="xs:h-8 md:h-12 lg:h-12 hover:cursor-pointer" />
                </div>

                {/* right */}
                <div className="md:w-[40%] lg:w-[40%] hidden md:flex lg:flex lg:justify-between md:justify-between text-2xl text-slate-400 ">
                    <div onClick={scrollToDiv} className="hover:text-blue-500 hover:cursor-pointer">
                        Home
                    </div>
                    <div onClick={scrollToDiv} className="hover:text-blue-500 hover:cursor-pointer ">
                        About
                    </div>
                    <div onClick={scrollToDiv} className="hover:text-blue-500 hover:cursor-pointer ">
                        Services
                    </div>
                    <div onClick={scrollToDiv} className="hover:text-blue-500 hover:cursor-pointer ">
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
    )
}
export default ContactNav