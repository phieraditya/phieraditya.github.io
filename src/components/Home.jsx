import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via=black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I am a front-end web developer with formal education in user
            experience research and design. Currently, I love to work on web
            applications using technologies like React JS and Tailwind CSS.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <FiArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
