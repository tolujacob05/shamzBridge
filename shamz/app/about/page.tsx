"use client";

import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    Our journey began with a simple yet ambitious goal: to provide service
    beyond compare. Over the years, we have evolved and grown, expanding
    our offerings to meet the diverse needs of our clients. From tailored
    solutions to comprehensive consultations, we leverage our extensive
    knowledge and experience to drive transformative change and help our
    clients succeed in today's dynamic business environment. What
    sets us apart is our commitment to understanding our clients' 
    unique challenges and goals. We take a collaborative approach, 
    working closely with each client to develop customized strategies 
    that address their specific needs and objectives. Our team of seasoned
    professionals brings together a wealth of expertise from various
    industries, ensuring that we can provide insights and solutions that
    are both innovative and effective.
  `;

  const truncatedText = fullText.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <section className="flex flex-col items-center justify-center pt-28 gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">About Us</h1>

        <div className="p-4 flex flex-col items-center md:w-[70%]">
          <p className="text-center">{isExpanded ? fullText : truncatedText}</p>
          <button
            className="mt-2 text-[#1985dd] underline"
            onClick={handleToggle}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:w-[70%]">
        <h1 className="text-center text-3xl font-bold">
          Our Vision and Mission
        </h1>

        <p className="p-4 text-center">
          Redefining industry standards through consultation, our innovative
          approach integrates cutting-edge technology with expert insights,
          driving transformative change and setting new benchmarks for
          excellence.
        </p>

        <div className="p-4 space-y-6">
          <div className="border border-white rounded-[5px] p-4 transition-transform duration-300 transform hover:scale-105 shadow-md">
            <h5 className="font-semibold text-black text-center">Vision</h5>
            <p className="text-center">
              To become a premier organization dedicated to enhancing both
              personal and professional capacities of individuals and
              businesses, fostering efficiency, heightened productivity, and
              innovation.
            </p>
          </div>

          <div className="border border-white rounded-[5px] p-4 transition-transform duration-300 transform hover:scale-105 shadow-md">
            <h5 className="font-semibold text-black text-center">Mission</h5>
            <p className="text-center">
              Our mission is to cultivate an empowering atmosphere for skill
              acquisition and capacity enhancement that heralds a holistic
              growth and developent for individuals and organizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
