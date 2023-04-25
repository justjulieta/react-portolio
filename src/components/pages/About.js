import React from "react";

const About = ({ currentPage, handlePageChange }) => {
  return (
    <section className="100vh">
      <div
        className="bg-image jumbotron d-flex flex-wrap justify-content-center align-items-center "
      >
        <div className="d-flex flex-row flex-wrap text-black ">
          <div className="mx-5 ">
            <div className="display-5 p-2 align-items-center">Julieta Ramirez-Solis Nguyen</div>
            <div className="display-7 p-2 align-items-center">
              Student Full Stack Web Developer
            </div>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active bg-light"
                  : "nav-link"
              }
            >
              <button className="btn  text-white rounded-pill py-2 px-4 mt-4 border-light bg-dark align-items-center">
                My Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex text-light p-4 align-items-center">
        <div className="text-center">
          <h2 className="px-5 pt-4 display-6 text-black">About Me</h2>
          <p className="lead p-4 text-black">
            I'm a student web developer and full time teacher in downtown Portland, OR. I wanted to adventure out of teaching to learn something new!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;