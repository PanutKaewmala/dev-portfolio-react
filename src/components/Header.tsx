import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold">Alex Carter</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#experience" className="hover:text-gray-300 transition">Experience</a>
          <a href="#gallery" className="hover:text-gray-300 transition">Gallery</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          id="menu-toggle"
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-gray-800 px-6 py-4 space-y-4"
        >
          <a
            href="#home"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#gallery"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
