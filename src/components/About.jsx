import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          error laudantium tempore possimus, accusantium harum quaerat
          voluptates. Hic magni mollitia modi consequuntur nesciunt eius nemo,
          reiciendis quibusdam nobis corrupti incidunt consequatur obcaecati
          minus similique ullam libero blanditiis neque ducimus omnis aliquam?
          Magni sunt asperiores distinctio excepturi at ut inventore eum?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae
          aut reiciendis inventore voluptate ex quas labore obcaecati alias
          accusamus velit, sequi iste necessitatibus nemo libero nobis
          perferendis quibusdam adipisci voluptatibus, dolores nisi illum
          numquam. Reiciendis odit eum sunt dolor. Nemo, exercitationem! Vel
          assumenda quas ipsum molestias iste error! Veniam.
        </p>
      </div>
    </div>
  );
};

export default About;
