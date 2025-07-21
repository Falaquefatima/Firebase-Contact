import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
const Input = ({onOpen}) => {
  return (
    <div className="flex justify-between">
      <div className="flex border bg-transparent gap-1 rounded-xl h-[40px] px-4">
        <CiSearch className="text-white text-3xl pt-2" />
        <input
          placeholder="Search contact"
          type="text"
          className="mr-4  border-white  outline-none bg-transparent text-white w-full h-full placeholder:text-white placeholder:opacity-50"
        />
      </div>
      <div>
        <CiCirclePlus 
        className="text-5xl text-white cursor-pointer" 
        onClick={onOpen}
        />
      </div>
    </div>
  );
};

export default Input;
