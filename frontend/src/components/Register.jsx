import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Input from './Input';
import Button from './Button';

function validatePassword(password) {
  const hasUpperCase = [...password].some(char => char >= 'A' && char <= "Z")
  const hasLowerCase = [...password].some(char => char >= 'a' && char <= "z")
  const hasDigit = [...password].some(char => char >= '0' && char <= "9")
  const hasSpecialChar = [...password].some(char => '!@#$%^&*()_+[]{};:,.<>/?'.includes(char))
  const isLongEnough = password.length >= 8

  if (!(hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar)){
    return `Password must contain atleast one uppercase character, one lowercase character, one digit, and one special character`
  }

  if(!isLongEnough){
    return "Password must be at least 8 characters long."
  }

  return null
}

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      add backend logic here.
      
      sending the data through axios post

      checking whether the user already exists in the database whenever username is updated
      as of now, there are no check and user will just be redirected to login page

      encrypting the password before storing it using bcrypt
    */

    navigate('/login')
  };

  useEffect(() => {
    const error = validatePassword(password);
    setPasswordError(error);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Username"
            value={username}
            setValue={setUsername}
          />
          <Input
            label="Email"
            value={email}
            setValue={setEmail}
            type='email'
          />
          <Input
            label="Password"
            value={password}
            setValue={setPassword}
            type='password'
          />
          {
            password && passwordError && (
              <p className='px-1 font-medium text-red-600'>
                {passwordError}
              </p>
            )
          }
          <Input
            label="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            type='password'
          />
          {
            confirmPassword && (password !== confirmPassword) ? (
              <p className='px-1 font-medium text-red-600'>
                Passwords are not matching
              </p>
            ) : true
          }
          <Button 
            type="submit"
            text="Register" 
          />
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
