import React from 'react';
import pf1 from '../assets/portfolio/portfolio-1.jpeg';
import pf2 from '../assets/portfolio/portfolio-2.jpeg';
import pf3 from '../assets/portfolio/portfolio-3.jpeg';
import pf4 from '../assets/portfolio/portfolio-4.jpeg';
import pf5 from '../assets/portfolio/portfolio-5.jpeg';
import pf6 from '../assets/portfolio/portfolio-6.jpeg';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: pf1 },
    { id: 2, src: pf2 },
    { id: 3, src: pf3 },
    { id: 4, src: pf4 },
    { id: 5, src: pf5 },
    { id: 6, src: pf6 },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  text-blue-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Webpage"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="max-w-screen-lg mx-auto p-4 flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
