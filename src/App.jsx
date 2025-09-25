import "./App.css";
import Banner from "./assets/Components/Banner/Banner";
import Cards from "./assets/Components/Cards/Cards";
import MainSect from "./assets/Components/MainSect/MainSect";


function App() {
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
      <Banner></Banner>
      <MainSect></MainSect>
    </>
  );
}

export default App;
