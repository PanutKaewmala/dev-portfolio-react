import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center px-4"
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi! I'm Alex</h1>
        <p className="text-lg md:text-xl mb-8">I'm a web developer who loves building things for the web.</p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition"
        >
          Contact Me
        </a>

      </div>
    </section>
  );
};

export default Home;
