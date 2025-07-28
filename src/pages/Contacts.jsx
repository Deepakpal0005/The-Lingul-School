// import  { useState } from "react";
import { useNavigate } from "react-router-dom";


function Contacts() {
  const navigate = useNavigate();
  // const [optionBar, setOptionBar] = useState(true);
  // const [showOptions, setShowOptions] = useState(false);

  // function optionsCtrl() {
  //   setOptionBar(!optionBar);
  //   setShowOptions(!showOptions);
  // }

  // const scrollToDiv = (id) => {
  //   const element = document.getElementById(id);
  //   navigate("/");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

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
              <img src="/utils/yellow-semicircle.svg" alt="" />
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

          {/* form */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* contact details */}
            <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-[35%] flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-bold">Email Address</h3>
                <p className="text-slate-400">
                  <a href="mailto:Info@lingualeducation.com">
                    Info@lingualeducation.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Office Location</h3>
                <p className="text-slate-400">Greater Noida (West)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phone Number</h3>
                <p className="text-slate-400">
                  <a href="tel:+919540647081">+91 9540647081</a>
                </p>
              </div>
              <div>
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
            </div>

            {/* form */}
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
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
