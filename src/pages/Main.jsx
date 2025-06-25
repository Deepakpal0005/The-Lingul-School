import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import Details from "../components/Details";
import Home from "./Home";

function Main() {
  return (
    <div className="w-full h-auto overflow-x-hidden overflow-y-auto ">
      <div className="fixed z-30 max-w-full">
        <Details />
      </div>
      <div className="xs:mt-14 sm:mt-14 md:mt-5 lg:mt-5 xl:mt-5 max-w-full ">
        <Home />
        
      </div>
    </div>
  );
}
export default Main;
