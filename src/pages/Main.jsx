import React from "react";

import Details from "../components/Details";
import Home from "./Home";

function  Main ()
{
    return (
        <div className="w-screen h-auto overflow-x-hidden overflow-y-auto">
            <div className="fixed z-30">
                <Details/>
            </div>
            <div className="xs:mt-14 sm:mt-14 md:mt-5 lg:mt-5 xl:mt-5">
                <Home/>
            </div>

        </div>
    )
}
export default Main