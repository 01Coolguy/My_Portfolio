import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto"> 
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          <Link href={'/'}>
          <h1 className=" hover:text-accent transition-all duration-300 text-5xl lg:text-5xl xl:text-5xl text-white cursor-pointer transition duration-300 transform hover:scale-110 font-serif">
              Prasoon Kumar</h1>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
