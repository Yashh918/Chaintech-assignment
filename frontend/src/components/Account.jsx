import { useState } from 'react';
import Input from './Input';

const Account = () => {

    /*
        currently the values for username and password are hardcoded
        when backend is implemented, the values will be fetched from there
    */

    const [username, setUsername] = useState('Yashh');
    const [prevUsername, setPrevUsername] = useState('Yashh');
    const [email, setEmail] = useState('yashhdhopeshwarkar18@gmail.com');
    const [prevEmail, setPrevEmail] = useState('yashhdhopeshwarkar18@gmail.com');
    const [password, setPassword] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => setEditMode(!editMode);

    const handleSubmit = (e) => {
        e.preventDefault();

        /*
            when implemented with backend, it will get updated in the database
            of course the password will be verified before that,
            by checking whether it matches the one in the database

            since we dont have that right now, 
            it will get updated with any password

            so replace this part with by sending axios post and get the response and update accordingly
        */

        // updating prev username and emails with new ones
        setPrevUsername(username)
        setPrevEmail(email)

    };

    const handleCancel = () => {
        handleEdit()

        /*
            if the edit is cancelled even after changing the values, 
            then username and email will again be set with the information of the logged in user
            
            but we dont have that now, 
            so i am using 2 more useStates for keeping track of the old values of username and email
        */

        // restoring current username and emails with prev ones
        setUsername(prevUsername)
        setEmail(prevEmail)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Account Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Username"
                        value={username}
                        setValue={setUsername}
                        disabled={!editMode}
                    />
                    <Input
                        label="Email"
                        type='email'
                        value={email}
                        setValue={setEmail}
                        disabled={!editMode}
                    />
                    {
                        !editMode && (
                            <button
                                type="button"
                                onClick={handleEdit}
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Edit Information
                            </button>
                        )
                    }
                    {editMode && (
                        <>
                            <Input
                                label="Password"
                                type='password'
                                value={password}
                                setValue={setPassword}
                            />

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 mt-4"
                            >
                                Save Changes
                            </button>

                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Account;
