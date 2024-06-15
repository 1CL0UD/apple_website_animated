import { appleImg, bagImg, searchImg } from '../utils/index';
import { navList } from '../constants/index';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
      </nav>
      <div className="flex flex-1 justify-center max-sm:hidden">
        {navList.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div>
        <img src={searchImg} alt="Search" width={18} height={18} />
        <img src={bagImg} alt="Bag" width={18} height={18} />
      </div>
    </header>
  );
};

export default Navbar;
