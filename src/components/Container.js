import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Container() {
  const [page, setPage] = useState("About");

  const RenderPage = () => {
    if (page === "About") {
      return (
        <About currentPage={page} handlePageChange={handlePageChange} />
      );
    }
    if (page === "Portfolio") {
        return <Portfolio/>;
      }
    if (page === "Contact") {
      return <Contact/>;
    }
    return <Resume/>;
  };

  const handlePageChange = (page) => setPage(page);

  return (
    <>
      <Header currentPage={page} handlePageChange={handlePageChange} />
      <main>
      <RenderPage />
      </main>
      <Footer />
    </>
  );
}