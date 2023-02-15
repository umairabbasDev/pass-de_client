import React from "react";

type Props = {
  children: JSX.Element;
};

const Background = ({ children }: Props) => {
  return (
    // <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div className="w-1/2  bg-white p-5 rounded-xl backdrop-blur-md bg-white/60 dark:bg-slate-900/60 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <img
            src="/assets/logo.svg"
            className="h-6 w-6 text-indigo-500"
            alt="svg icon"
          />
        </span>
      </div>
      <div className="flex justify-center justify-items-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Background;
