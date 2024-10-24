import { Link } from 'react-router-dom';
import { IoIosLogIn } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-evenly items-center">
        <h1 className='text-white text-3xl px-5'>
            Yashh
        </h1>
      <div className="container mx-auto flex justify-end gap-x-9 text-3xl items-center px-5">
        <Link to="/login" className="text-white hover:text-gray-300">
        <IoIosLogIn />
        </Link>
        <Link to="/account" className="text-white hover:text-gray-300">
        <FaUserCircle />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
