import React from 'react';

const projects = [
  {
    name: 'Gamesphere',
    description: 'This project was created to demonstrate an important milestone in our full-stack bootcamp: Designing and building our first full-stack web application. We have designed and built an app using the MVC paradigm, created our own server-side API, added user authentiction and connected to a database.',
    image: 'https://github.com/ianm1837/gamesphere/blob/main/public/images/login.jpg?raw=true',
    github: 'https://github.com/gamesphere',
  },
];

function Portfolio() {
  return (
    <section className=''>
      <h2>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
