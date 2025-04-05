import React from 'react';
import { useLogin } from '../../controller/authController';
import styleCss from './signin.module.css';
import TextInput from '../../components/FormComponents/TextInput';
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [userdata, setUserdata] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const { 
    mutate: login, 
    isLoading, 
    isError, 
    error 
  } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ userdata, password });
  };

  return (
    <div className='w-screen h-screen flex flex-row '>
      <div className='bg-white w-full'></div>
      <div className=' w-full' id={styleCss.loginContainer}>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-evenly bg-[#1e1611] border-1 border-[#fb6724] rounded-lg' id={styleCss.loginDiv}>
          <h1 className='text-[#d9d9d9] text-3xl uppercase font-bold'>Sign In</h1>
          <div className='w-[80%] flex flex-col gap-9'>
            <TextInput 
              label="UserId" 
              value={userdata} 
              onChange={(e) => setUserdata(e.target.value)}
              required
            />
            <TextInput 
              label="Password"
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className='text-end text-[#2196f3]'>Forgot Password?</p>
          </div>
          <button 
            type='submit'
            className='rounded-lg uppercase font-bold' 
            id={styleCss.btnsignin}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
          {isError && (
            <p className='text-red-500'>{error.message}</p>
          )}
          <div className='border-t border-[#d9d9d9] w-full h-20 flex justify-center items-center' id={styleCss.googleBtnContain}>
            <p>Or</p>
            <button id={styleCss.btngoogle} className='rounded-lg uppercase font-bold flex justify-center items-center gap-3'>
              <FcGoogle className='text-2xl'/> SignIn With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;