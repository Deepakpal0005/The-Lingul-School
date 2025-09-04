import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import Details from "../components/Details";
import Home from "./Home";
import { Helmet } from "react-helmet";


function Main() {
  return (
    <>
         <Helmet>
        <title>The Lingual - Foreign Language Classes in India</title>
        <meta 
          name="description" 
          content="Join The Lingual to learn German, French, Spanish, and English with expert tutors. Flexible courses designed for beginners and professionals." 
        />
        <meta 
          name="keywords" 
          content="learn German, learn French, language school India, English classes, Spanish courses, foreign language school" 
        />
        <link rel="canonical" href="https://www.lingualeducation.com/" />
      </Helmet>

            {/* Structured Data for Local Business (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Lingual",
            "image": "https://www.lingualeducation.com/logo.png",
            "@id": "https://www.lingualeducation.com",
            "url": "https://www.lingualeducation.com",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "XYZ Street",
              "addressLocality": "Your City",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "sameAs": [
              "https://www.facebook.com/lingualeducation",
              "https://www.instagram.com/lingualeducation"
            ]
          }
          `}
        </script>

      <div className="w-full h-auto overflow-x-hidden overflow-y-auto ">
        <div className="fixed z-30 max-w-full">
          <Details />
        </div>
        <div className="xs:mt-14 sm:mt-14 md:mt-5 lg:mt-5 xl:mt-5 max-w-full ">
          <Home />
        </div>
      </div>
    </>
  );
}
export default Main;
