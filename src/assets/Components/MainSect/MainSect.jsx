import React from "react";
import Cards from "../Cards/Cards";

const MainSect = ({
  tickets,
  onCardClick,
  taskStatus,
  onCompleteClick,
  resolvedTasks,
}) => {
  return (
    <>
      <div className="text-3xl font-bold mb-5">
        <h1>Customer Tickets</h1>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-4">
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {tickets.map((ticket) => (
            <Cards
              key={ticket.id}
              ticket={ticket}
              onClick={() => onCardClick(ticket)}
            />
          ))}
        </div>
        <div className="col-span-2">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold mb-5">Task Status</h1>
            <div className="flex flex-col gap-4 justify-center">
              {taskStatus.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 shadow-md rounded-md bg-white flex flex-col justify-between items-center"
                >
                  <h2 className="font-semibold text-lg">{ticket.title}</h2>
                  <button
                    className="btn btn-sm w-full btn-success mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCompleteClick(ticket.id);
                    }}
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <h1 className="text-2xl font-bold my-5">Resolved Tasks</h1>
          <div className="flex flex-col gap-2">
            {resolvedTasks &&
              resolvedTasks.map((ticket) => (
                <div
                  key={ticket.id}
                  className="w-full h-[62px] bg-pink-100 flex justify-center items-center rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-center">
                    {ticket.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSect;
