import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions or want to work together? Feel free to reach out!
        </p>
        <form className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
