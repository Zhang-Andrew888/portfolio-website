import React from "react";
import Image from "next/image";

const experiencesData = [
  {
    id: 1,
    image: "/images/expierences/hack4impact.webp",
    role: "Developer",
    organization: "Hack4Impact",
    period: "2025 — Present",
    description:
      "As a developer for Hack4Impact Cornell, I create software solutions for nonprofits, recently engineering a scalable authentication layer for a Member Archive serving over 1,000 users across 13 chapters. Currently, I am focused on refactoring the Endowment Manager codebase to ensure a seamless production deployment for public users.",
  },
  {
    id: 2,
    image: "/images/expierences/unr.webp",
    role: "Researcher",
    organization: "University of Nevada at Reno",
    period: "May 2023 - December 2023",
    description:
      "As a reseacher, I focused on designing Multimodal Machine Learning for healthcare and analyzed the intersection of Federated Learning and data privacy.",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-12 sm:py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">Experience</h2>
      <ul className="flex flex-col gap-10 sm:gap-12">
        {experiencesData.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-1 gap-6 rounded-xl border border-white/10 bg-[#181818] p-5 shadow-lg sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-8 sm:p-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:aspect-square sm:h-full sm:min-h-[160px]">
              <Image
                src={item.image}
                alt={`${item.organization} — ${item.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 200px"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-start text-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                {item.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-base text-[#ADB7BE]">
                {item.organization}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#ADB7BE] sm:text-base">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperiencesSection;
