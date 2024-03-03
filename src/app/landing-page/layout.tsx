import Footer from "@app/components/landingPage/Footer";
import React from "react";
import Header from "./partials/partials/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col overflow-y-auto h-full">
      <Header />
      <div className="flex-grow bg-white">{children}</div>
      <Footer />
    </div>

  );
};

export default Layout;


