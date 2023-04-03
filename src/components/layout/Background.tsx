import React from "react";

type Props = {
  children: JSX.Element;
  setActiveTab: any;
  activeTab: string;
};

const Background = ({ children, setActiveTab, activeTab }: Props) => {
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    // <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <>
      <div className="w-1/2  bg-white p-5 rounded-xl backdrop-blur-md bg-white/60 dark:bg-slate-900/60 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <img
              src="/assets/logo.svg"
              className="h-6 w-6 text-indigo-500"
              alt="svg icon"
            />
          </span>
          <h1
            style={{ color: "#8884fa" }}
            className="text-3xl font-extrabold text-gray-800 text-center mt-20"
          >
            {activeTab === "tab1"
              ? "Password Checker"
              : activeTab === "tab2"
              ? "Password Tester"
              : "Password Generater"}
          </h1>
        </div>

        <div
          className="absolute top-0 left-0 w-full h-16 from-purple-400 to-blue-500 flex justify-center items-center px-4"
          style={{ marginTop: "4rem" }}
        >
          <div className="flex justify-center items-center space-x-4">
            <button
              className={`text-white font-bold text-lg py-2 px-4 rounded ${
                activeTab === "tab1"
                  ? "border-b-4 border-purple"
                  : "bg-transparent hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              Pass Checker
            </button>
            <button
              className={`text-white font-bold text-lg py-2 px-4 rounded ${
                activeTab === "tab2"
                  ? "border-b-4 border-purple"
                  : "bg-transparent hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              Pass Tester
            </button>
            <button
              className={`text-white font-bold text-lg py-2 px-4 rounded ${
                activeTab === "tab3"
                  ? "border-b-4 border-purple"
                  : "bg-transparent hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              Pass Generator
            </button>
          </div>
        </div>
        <div className="flex justify-center justify-items-center w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Background;
