"use client";

import Image from "next/image";
import EarTitle from "./EarTitle";

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div>
        <EarTitle color="#C6986D" />
      </div>
      <h1 className="text-4xl sm:text-[40px] lg:text-5xl">{title}</h1>
      <div className="rotate-180">
        <EarTitle color="#C6986D" />
      </div>
    </div>
  );
};

export default Title;
