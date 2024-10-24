import { useState } from 'react';
import { Link } from 'react-router-dom'
import Input from './Input';
import Button from './Button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
            add backend logic here.

            sending the data through axios post
           
            checking whether the user exists in the database and the password matches the one in db after hashing it
            as of now, there are no check and user will just be redirected to home page
        */
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-quicksand">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Username"
                        value={username}
                        setValue={setUsername}
                    />
                    <Input
                        label="Password"
                        value={password}
                        setValue={setPassword}
                    />
                    <Button
                        type="submit"
                        text="Login"
                    />
                </form>
                <div className="mt-6 text-center">
                    <p>
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
