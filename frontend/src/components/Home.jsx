import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-5 flex items-center justify-between">
                <h1 className="text-white text-3xl">Home</h1>
                <Link to="/account" className="text-white hover:text-gray-300 text-3xl"><FaUserCircle /></Link>
            </nav>

            <div className="p-8">
                <h2 className='text-4xl mb-3'>Welcome to the Home Page!</h2>
                <p className='text-2xl mb-9'>This is the main dashboard after logging in.</p>
                <p className='text-2xl'>Click on the profile icon on the navbar to redirect to user information.</p>
            </div>
        </div>
    );
};

export default Home;
