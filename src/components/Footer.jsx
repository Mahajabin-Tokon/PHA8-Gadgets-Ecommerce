import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4 pt-10">
        <h2 className="font-bold text-black text-2xl">Gadget Heaven</h2>
        <p className="w-11/12 text-center">Leading the way in cutting-edge technology and innovation.</p>
        <hr className="w-3/5"/>
      </div>
      <footer className="footer p-10 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-28">
        <nav className="flex flex-col justify-center items-center">
          <h6 className="font-bold text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="font-bold text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="font-bold text-black">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
