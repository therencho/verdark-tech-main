import { FC } from "react";

interface HeadingProps {
  title: string
  subtitle?: string
}

const Heading: FC<HeadingProps> = ({title,subtitle}) => {
  return (
    <div className="h-[8rem] w-full max-w-screen-xl mx-auto bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md mt-20 ">
      <h1 className="text-5xl  font-bold text-center text-white relative z-20">
        {title}
      </h1>
      <p className="text-slate-500 font-bold text-center text-xl p-1.5 ">{subtitle}</p>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-14"
          particleColor="#FFFFFF"
        /> */}

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Heading;
