import { FC } from "react";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";

interface TypewriterProps {}

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500",
  },
];

const Typewriter: FC<TypewriterProps> = ({}) => {
  return (
    <div className="flex flex-col bg-slate-900 w-full rounded-xl items-center justify-center h-[20rem] max-w-screen-xl mx-auto p-4 ">
      <p className="text-neutral-200 text-xl   text-center">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button className="border text-sm font-medium relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 rounded-full">
          <a href="/contact">Contact</a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
    </div>
  );
};

export default Typewriter;
