import React from "react";
import Green from "../../../assets/green.jpg";
import CalendarIcon from "../../../assets/Vector.png";

const Cards = ({ ticket, onClick }) => {
  const priorityColourMap = {
    Critical: "text-red-600",
    High: "text-orange-500",
    Medium: "text-yellow-500",
    Low: "text-green-600",
  };
  const priorityColour = priorityColourMap[ticket.priority] || "text-gray-500";

  return (
    <div
      onClick={onClick}
      className="w-full rounded-lg p-3 shadow-lg bg-white cursor-pointer hover:bg-gray-100"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-base">{ticket.title}</h1>
        <button className="px-2 py-1 bg-green-300 rounded-md flex items-center gap-1 text-sm">
          <img className="w-3 h-3" src={Green} alt="" />
          {ticket.status}
        </button>
      </div>
      <p className="text-gray-500 mt-2 text-sm">{ticket.description}</p>
      <div className="flex flex-wrap justify-between items-center mt-2 text-xs md:text-sm">
        <h3>#{ticket.id}</h3>
        <h2 className={`font-semibold ${priorityColour}`}>{ticket.priority}</h2>
        <h3>{ticket.customer}</h3>
        <div className="flex items-center gap-1">
          <img src={CalendarIcon} alt="" className="w-3 h-3" />
          <h3>{new Date(ticket.createdAt).toLocaleDateString()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
