import { cn } from "@/lib/utils";
import {
  IconBulb,
  IconPageBreak,

} from "@tabler/icons-react";
import { BsCardChecklist } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";
import { VscExtensions } from "react-icons/vsc";
import React from "react";




export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI Resume Builder",
      description:
        "Create ATS-optimized resumes tailored to your" +
          " experience",
      icon: <IconPageBreak />,
    },
    {
      title: "Skill Recommender",
      description:
        "Identify relevant skills to enhance your profile",
      icon: <IconBulb/>,
    },
    {
      title: "Application Tracker",
      description:
        "Organize and monitor your job applications all" +
          " in once place",
      icon: <BsCardChecklist  />,
    },
    {
      title: "Smart Networking",
      description: "Reach out to recruiters and" +
          " employees for your dream job",
      icon: <FaPeopleGroup />,
    },
    {
      title: "Personalized Cover Letters",
      description: "Stand out from the crowd with custom" +
          " cover letters",
      icon: <PiReadCvLogoBold />,
    },
    {
      title: "Web Extension Support",
      description:
        "Tired of answering the same questions again and" +
          " again? We got you",
      icon: <VscExtensions />,
    },

  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative" +
          " group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
