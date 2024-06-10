import logo from '../assets/Group01/01_logo.png';
import searchIcon from '../assets/Group01/01_search.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />{' '}
      </div>
      {/* Text and Search bar */}
      <div className="flex items-center space-x-4">
        <div className="links space-x-4">
          <a
            href="#"
            className="font-sans text-lg font-semibold uppercase tracking-widest text-[#54524f] hover:text-gray-800">
            HOME
          </a>
          <a
            href="#"
            className="font-sans text-lg font-semibold uppercase tracking-widest text-[#54524f] hover:text-gray-800">
            MENU
          </a>
          <a
            href="#"
            className="font-sans text-lg font-semibold uppercase tracking-widest text-[#54524f] hover:text-gray-800">
            OUR STORY
          </a>
          <a
            href="#"
            className="font-sans text-lg font-semibold uppercase tracking-widest text-[#54524f] hover:text-gray-800">
            CONTACT US
          </a>
        </div>
        {/* Search icon */}
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search"
          />
          <img
            src={searchIcon}
            alt="Search"
            className="absolute right-3 top-3 h-5 w-5 text-gray-700 hover:text-gray-900"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
