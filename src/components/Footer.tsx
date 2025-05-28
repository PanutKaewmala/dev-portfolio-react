import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">Alex Carter</a>
            <p className="mt-2 text-gray-400">Creating digital experiences that matter.</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white transition duration-300">Experience</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition duration-300">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Alex Carter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
