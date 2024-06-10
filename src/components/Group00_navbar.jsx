import logo from '../assets/Group01/01_logo.png';
import searchIcon from '../assets/Group01/01_search.svg';

const Navbar = () => {
  return (
    <nav className="flex w-full flex-wrap items-center justify-center py-4 pl-1 pr-4 text-center sm:justify-between sm:text-left">
      {/* Logo */}
      <div className="logo mb-4 flex w-full justify-center sm:mb-0 sm:w-auto">
        <img src={logo} alt="Logo" style={{ width: '75px', height: '75px' }} />{' '}
      </div>
      {/* Text and Search bar */}
      <div className="flex w-full flex-col items-center space-y-4 sm:w-auto sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="links space-x-4 sm:space-x-20">
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
        <div className="relative flex w-full justify-center sm:w-auto">
          <input
            id="searchInput"
            name="search"
            type="text"
            className="ml-8 h-11 w-full rounded-full border border-gray-300 bg-[#7f7770] px-3 py-2 font-bold text-black opacity-80 focus:outline-none focus:ring-2 focus:ring-[#776c64] sm:w-4/6"
          />
          <img src={searchIcon} alt="Search" className="absolute right-12 top-2 h-7 w-7 text-[#54524f]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
