"use client";

import Image from "next/image";
import React from "react";

const LandingSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/images/landscape/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#121212]/40" aria-hidden />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 pb-12">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-slate-50">Andrew Zhang</span>
        </h1>
      </div>
    </section>
  );
};

export default LandingSection;
