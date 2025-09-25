import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-white bg-black p-10">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-5">CS — Ticket System</h1>
          <p className="text-gray-300 text-sm">
            A ticket system helps organize, track, and resolve customer issues
            efficiently. It ensures no request is missed, improves communication
            between teams and clients, and provides transparency. By
            prioritizing tasks, it boosts productivity, customer satisfaction,
            and overall service quality.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-5">Company</h1>
          <p className="text-gray-300 my-2">About Us</p>
          <p className="text-gray-300 my-2">Our Mission</p>
          <p className="text-gray-300 my-2">Contact Sales</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-5">Services</h1>
          <p className="text-gray-300 my-2">Products & Services</p>
          <p className="text-gray-300 my-2">Customer Stories</p>
          <p className="text-gray-300 my-2">Download Apps</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-5">Information</h1>
          <p className="text-gray-300 my-2">Privacy Policy</p>
          <p className="text-gray-300 my-2">Terms & Conditions</p>
          <p className="text-gray-300 my-2">Join Us</p>
        </div>
        <div className="col-span-1 md:col-span-4 border-t border-white pt-4">
          <p className="text-gray-300 text-center text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
