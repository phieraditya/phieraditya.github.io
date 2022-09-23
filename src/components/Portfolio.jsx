import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import pf1 from '../assets/portfolio/portfolio-1.png';
import pf2 from '../assets/portfolio/portfolio-2.png';
import pf3 from '../assets/portfolio/portfolio-3.png';
import pf4 from '../assets/portfolio/portfolio-4.png';
import pf5 from '../assets/portfolio/portfolio-5.png';
import pf6 from '../assets/portfolio/portfolio-6.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pf1,
      demo: 'https://phieraditya.github.io/react-dog-adoption-website/',
      code: 'https://github.com/phieraditya/react-dog-adoption-website',
    },
    {
      id: 2,
      src: pf2,
      demo: 'https://phieraditya.github.io/react-todo-list-app/',
      code: 'https://github.com/phieraditya/react-todo-list-app',
    },
    {
      id: 3,
      src: pf3,
      demo: 'https://phieraditya.github.io/react-yahtzee/',
      code: 'https://github.com/phieraditya/react-yahtzee',
    },
    {
      id: 4,
      src: pf4,
      demo: 'https://phieraditya.github.io/map-workouts-log/',
      code: 'https://github.com/phieraditya/map-workouts-log',
    },
    {
      id: 5,
      src: pf5,
      demo: 'https://phieraditya.github.io/marketing-page/',
      code: 'https://github.com/phieraditya/marketing-page',
    },
    {
      id: 6,
      src: pf6,
      demo: 'https://phieraditya.github.io/online-banking/',
      code: 'https://github.com/phieraditya/online-banking',
    },
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
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="duration-300 hover:scale-105">
              <img src={src} alt="Webpage" className="rounded-t-md" />
              <div className="max-w-screen-lg p-4 flex">
                <a
                  href={demo}
                  className="w-1/2 py-2 flex justify-center duration-300  hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorld size={25} />
                </a>
                <a
                  href={code}
                  className="w-1/2 py-2 flex justify-center duration-200  hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
