"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text content — spans 7 of 12 columns */}
        <div className="col-span-1 lg:col-span-7 sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
              Hello, I am Andrew. I know{" "}
            </span>
            <TypeAnimation
              sequence={[
                "React",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack Development",
                1000,
                "CNNs",
                1000,
                "Distrubuted Systems",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nobis voluptates quas placeat, ipsam dolorem minus dolorum mollitia
            eos fugiat architecto libero aspernatur voluptatibus illum adipisci
            maxime consequatur commodi vero.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white"
            >
              View My Projects
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>

        {/* Image — spans 5 of 12 columns */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile_pic.png"
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
