import React from 'react';
import bgImg from '../../vector1.png';
import bgImg2 from '../../vector2.png';

const Banner = () => {
      return (
            <section className="grid grid-cols-1 md:grid-cols-2 my-10 gap-2">
        <div className="max-w-[708px] h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg flex flex-col justify-center items-center relative">
            <h3 className="text-xl text-white mb-3">In Progress</h3>
            <h1 className="text-5xl text-white">0</h1>
            <img className="absolute mr-75" src={bgImg} alt="" />
            <img className="absolute ml-75" src={bgImg2} alt="" />
        </div>
        <div className="max-w-[708px] h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-xl text-white mb-3" >Resolved</h3>
            <h1 className="text-5xl text-white">0</h1>
            <img className="absolute mr-75" src={bgImg} alt="" />
            <img className="absolute ml-75" src={bgImg2} alt="" />
        </div>
      </section>
      );
};

export default Banner;