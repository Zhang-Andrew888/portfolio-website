"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA: { title: string; id: string; content: React.ReactElement }[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Cornell University</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Hack4Impact</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section>
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          <Image
            src="/images/filler.jpg"
            alt="filler image"
            width={500}
            height={500}
          ></Image>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xlfont-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              libero pariatur fuga quam, quia reprehenderit perspiciatis unde
              sint dignissimos, ducimus, tempora culpa eos fugiat vel. Rem
              blanditiis eligendi commodi repellat.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experiences")}
                active={tab === "experiences"}
              >
                Experiences
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
