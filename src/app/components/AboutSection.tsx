import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="text-white">
        <div className="grid grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12 xl:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-lg md:mx-0 md:max-w-none">
            <Image
              src="/images/profile_pic.png"
              alt="Andrew Zhang"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center text-left">
            <h2 className="mb-3 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-5xl">
              About Me
            </h2>
            <p className="mb-10 text-xl font-semibold text-slate-100 sm:text-2xl lg:text-2xl">
              Computer Science at Cornell University
            </p>
            <div className="max-w-4xl space-y-8 text-xl leading-relaxed text-slate-200 sm:text-2xl sm:leading-9 lg:text-2xl lg:leading-[1.65]">
              <p>
                I’m Andrew Zhang, a Computer Science major at Cornell University
                also pursuing minors in Artificial Intelligence and Law &
                Society. I’m driven by the challenge of building large-scale
                systems, from optimizing complex databases to developing
                full-stack applications and machine learning models.
              </p>
              <p>
                Beyond my academics, I am deeply immersed in the culinary world.
                I currently serve as a cook for the Statler Hotel&apos;s
                fine-dining Italian restaurant and contribute to the culinary
                team of Crème de Cornell, the university&apos;s premier food
                publication magazine. Additionally, I am an avid photographer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
