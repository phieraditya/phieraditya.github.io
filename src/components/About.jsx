import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  text-blue-500">Me, Myself and I</p>
        </div>

        <p className="text-xl mt-16">
          I am a Front-End Web Developer located in Indonesia. I have a serious
          passion for the betterment of user experiences.
        </p>

        <br />

        <p className="text-xl mt-2">
          I am a well-organized, problem solver, and independent employee with
          great attention to detail. I thrive in an environment that keeps me
          curious and push to keep learning. I like going out to nature and
          doing outdoor activities as much as I enjoy being at home.
        </p>

        <br />

        <p className="text-xl mt-2">
          Interested in the entire front-end spectrum and working on projects
          with positive people.
        </p>

        <br />

        <a href="/#" className="text-xl mt-2 text-blue-500">
          Let's make something special.
        </a>
      </div>
    </div>
  );
};

export default About;
