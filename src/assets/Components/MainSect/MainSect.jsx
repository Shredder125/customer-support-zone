import React from "react";
import Cards from "../Cards/Cards";

const MainSect = () => {
  return (
    <>
      <div className="text-3xl font-bold mb-5">
        <h1>Customer Tickets</h1>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-4">
       
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>

        <div className="col-span-2 border-2 border-red-500">
          <h1 className="text-2xl font-bold mb-5">Completed Tasks</h1>
          <div className="flex flex-col gap-4">
            <div className="p-4 shadow-md rounded-md bg-white">
              <h2 className="font-semibold text-lg">
                Payment Failed - Card Declined
              </h2>
              <button className="btn btn-sm w-full btn-success mt-2">
                Completed
              </button>
            </div>

            <div className="p-4 shadow-md rounded-md bg-white">
              <h2 className="font-semibold text-lg">Resolved: Login Issue</h2>
              <button className="btn btn-sm w-full btn-success mt-2">
                Completed
              </button>
            </div>
            
          </div>
          <h1 className="text-2xl font-bold my-5">Resolved Tasks</h1>
          <div className="w-full h-[62px] bg-pink-100 flex justify-center items-center rounded-lg"> 
                  <h3 className="text-lg font-semibold text-center">Anyone</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSect;
