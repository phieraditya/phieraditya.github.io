import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 text-white p-4 h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full
      "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold  text-blue-500">Contact me</p>
          <p className="py-6">
            Want to work together or have any questions? <br></br>
            Don’t hesitate to use the form.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            action="https://getform.io/f/6448b8ef-80aa-415c-a58b-057be819c280"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
