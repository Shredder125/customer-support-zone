// README QUESTION ANSWERS ARE IN README2 FILE>>>>>>>>>
// PLEASE DO NOT FORGET TO CHECK README2 FILE..************************

import React, { useState } from "react";
import "./App.css";
import Banner from "./assets/Components/Banner/Banner";
import MainSect from "./assets/Components/MainSect/MainSect";
import ticketData from "./CsProblems.json";
import Footer from "./assets/Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);

  const handleAddTask = (ticket) => {
    if (!taskStatus.find((tick) => tick.id === ticket.id)) {
      setTaskStatus([...taskStatus, ticket]);
      toast.success("Ticket added to Task Status");
      setInProgressCount(inProgressCount + 1);
      setTickets(tickets.filter((tick) => tick.id !== ticket.id));
    }
  };

  const handleCompleteTask = (ticketId) => {
    const completedTicket = taskStatus.find((tick) => tick.id === ticketId);
    if (completedTicket) {
      toast.success("Ticket marked as completed");
      setTaskStatus(taskStatus.filter((tick) => tick.id !== ticketId));
      setResolvedTasks([...resolvedTasks, completedTicket]);
      setInProgressCount(inProgressCount - 1);
    }
  };

  return (
    <>
      <div>
        <div className="navbar bg-base-100 shadow-sm max-w-[1600px] mx-auto flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">CS — Ticket System</a>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-6">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>
            <a href="">Contact</a>
            <button className="btn btn-square btn-ghost bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-30 h-11 text-white">
              + New Ticket
            </button>
          </div>
        </div>
      </div>

      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedTasks.length}
      ></Banner>
      <MainSect
        tickets={tickets}
        onCardClick={handleAddTask}
        taskStatus={taskStatus}
        onCompleteClick={handleCompleteTask}
        resolvedTasks={resolvedTasks}
      ></MainSect>
      <Footer></Footer>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
