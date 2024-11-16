import React from "react";
import Navbar from "./Navbar";

const Pagenot = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-black text-center">
        <h2 className="text-4xl font-bold text-gray-400 mb-4">
          Page Not Found
        </h2>
        <h2 className="text-xl text-gray-400">
          Or it might be under maintenance
        </h2>
      </div>
    </>
  );
};

export default Pagenot;
