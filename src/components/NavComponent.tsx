import { AiOutlineSearch } from "react-icons/ai";
const NavComponent = () => {
  return (
    <div className="relative text-white">
      <input className="w-full h-14 relative bg-primaryGray px-16" />
      <div className="absolute top-5 left-5 text-xl">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default NavComponent;
