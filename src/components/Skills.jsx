import React from 'react';
import html from '../assets/techstack/html.png';
import css from '../assets/techstack/css.png';
import javascript from '../assets/techstack/javascript.png';
import bootstrap from '../assets/techstack/bootstrap.png';
import tailwind from '../assets/techstack/tailwind.png';
import reactIcon from '../assets/techstack/react.png';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-400',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: reactIcon,
      title: 'React JS',
      style: 'shadow-sky-400',
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold  text-blue-500">Skills</p>
          <p className="py-6">
            These are the technologies I work with day to day basis
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md rounded-lg hover:scale-105 duration-500 ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
