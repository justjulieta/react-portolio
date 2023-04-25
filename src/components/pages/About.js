import React from "react";

const About = ({ currentPage, handlePageChange }) => {
  return (
    <section className="100vh">
      <div
        className="bg-image jumbotron d-flex flex-wrap justify-content-center align-items-center "
      >
        <div className="d-flex flex-row align-items-center flex-wrap text-white ">
          <div className="mx-5 ">
            <div className="display-2 p-2">Julieta Ramirez-Solis Nguyen</div>
            <div className="display-6 p-2">
              Student Full Stack Web Developer
            </div>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              <button className="btn  text-white rounded-pill py-2 px-4 mt-4 border-light bg-dark ">
                My Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex text-light p-4 align-items-center">
        <div className="text-center">
          <h2 className="px-5 pt-4 display-6">About Me</h2>
          <p className="lead p-4">
            I'm a student web developer and full time teacher in downtown Portland, OR. I wanted to adventure out of teaching to learn something new!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;