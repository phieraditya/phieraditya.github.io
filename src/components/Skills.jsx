import React from 'react'

import html from '../assets/techstack/html.png'
import css from '../assets/techstack/css.png'
import javascript from '../assets/techstack/javascript.png'
import bootstrap from '../assets/techstack/bootstrap.png'
import tailwind from '../assets/techstack/tailwind.png'
import reactIcon from '../assets/techstack/react.png'
import mongodb from '../assets/techstack/mongodb.png'
import mongoose from '../assets/techstack/mongoose.png'
import postman from '../assets/techstack/postman.png'
import expressIcon from '../assets/techstack/express.png'
import nodejs from '../assets/techstack/nodejs.png'
import npm from '../assets/techstack/npm.png'
import git from '../assets/techstack/git.png'
import github from '../assets/techstack/github.png'

//MongoDB, Mongoose, Postman, Express.js, Node.js, NPM, Git, GitHub

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
    },
    {
      id: 4,
      src: bootstrap,
      title: 'Bootstrap',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind CSS',
    },
    {
      id: 6,
      src: reactIcon,
      title: 'React JS',
    },
    {
      id: 7,
      src: mongodb,
      title: 'MongoDB',
    },
    {
      id: 8,
      src: mongoose,
      title: 'Mongoose',
    },
    {
      id: 9,
      src: postman,
      title: 'Postman',
    },
    {
      id: 10,
      src: expressIcon,
      title: 'Express',
    },
    {
      id: 11,
      src: nodejs,
      title: 'Node.js',
    },
    {
      id: 12,
      src: npm,
      title: 'npm',
    },
    {
      id: 13,
      src: git,
      title: 'Git',
    },
    {
      id: 14,
      src: github,
      title: 'GitHub',
    },
  ]

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

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 text-center px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className="hover:scale-105 duration-500">
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
