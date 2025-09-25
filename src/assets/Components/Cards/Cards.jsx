import React from "react";
import Green from "../../../assets/green.jpg";
import CalendarIcon from "../../../assets/Vector.png";

const Cards = () => {
  return (
    <div className="w-full rounded-lg p-3 shadow-lg bg-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-base">Login Issues - Can't Access</h1>
        <button className="px-2 py-1 bg-green-300 rounded-md flex items-center gap-1 text-sm">
          <img className="w-3 h-3" src={Green} alt="" />
          Open
        </button>
      </div>
      <p className="text-gray-500 mt-2 text-sm">
        Customer is unable to log in. Tried resetting password multiple times
        but still...
      </p>
      <div className="flex flex-wrap justify-between items-center mt-2 text-xs md:text-sm">
        <h3>#1001</h3>
        <h2 className="font-semibold">HIGH PRIORITY</h2>
        <h3>John Smith</h3>
        <div className="flex items-center gap-1">
          <img src={CalendarIcon} alt="" className="w-3 h-3" />
          <h3>1/15/2024</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
