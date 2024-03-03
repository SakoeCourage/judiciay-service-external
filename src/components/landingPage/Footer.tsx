import React from "react";
import Logo from "@app/asessts/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black dotted-bg">
      <footer className="text-white">
        <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="  flex flex-col">
            <a className="flex justify-center">
              <Image src={Logo} alt="" className="w-32" />
            </a>
            <h1 className="mt-2 text-sm text-gray-200">
              Ghana Revenue Authority
            </h1>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3 ">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3 ">
                QUICK LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Our services
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    goto to Top
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3 ">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 text-sm hover:text-gray-50">
                    Cookie policy
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; 2023 Ghana Revenue Authority (GRA)
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
