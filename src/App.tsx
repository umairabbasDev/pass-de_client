import Background from "./components/layout/Background";
import FetchForm from "./components/FetchForm";
import { useState } from "react";
function App() {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500 relative">
        <div
          className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-purple-400 to-blue-500 flex justify-center items-center"
        >
          <p
            style={{
              fontFamily: "Michroma, sans-serif",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="bg-gradient-to-r from-arifPur to-arifVoil text-7xl font-bold absolute top-14 left-1/2 transform -translate-x-1/2 text-white opacity-40 z-10"
          >
            Pass De
          </p>
        </div>
        <div className="row-span-3 row-start-2 row-end-4 w-screen flex justify-center items-center z-0">
          <Background>
            <FetchForm />
          </Background>
        </div>
      </div>
    </>
  );
}

export default App;
