import { FaInstagramSquare,FaPinterestSquare,FaTwitterSquare,FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-300">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-400">
        {/* Empty Links */}
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        {/* Icons */}
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white"
            >
              <FaInstagramSquare className="w-4 h-4" />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Pinterest"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white"
            >
              <FaPinterestSquare className="w-4 h-4" />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white"
            >
              <FaTwitterSquare className="w-4 h-4" />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white"
            >
              <FaFacebookSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
