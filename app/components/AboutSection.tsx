"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-4 gap-4">
        <li>Cooking</li>
        <li>Baking</li>
        <li>Crocheting</li>
        <li>Sewing</li>
        <li>Hand craft activities</li>
        <li>Piano</li>
      </ul>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Freshman Computer Science - University of Texas Rio Grande Valley</li>
        <li>High School Graduate IDEA Weslaco Pike</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Add Later</li>
        <li>Add More Stuff</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#fa91cc]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/snoopy.jpg" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello! I am someone who finds joy in hands-on activities, whether it is baking a delicious treat,
          crocheting a cozy blanket, cooking up a new recipe, or sewing something unique. I love the process 
          of creating and learning new skills along the way. This love for creating and exploring has naturally 
          led me to pursue a path in computer science. I am excited by the idea of using technology to bring my 
          own designs to life, combining my creative interests with technical skills. I can not wait to see where 
          this journey will take me in the future, as I continue to discover new ways to express myself and 
          innovate in the digital world.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;