import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin,getUserData } = useContext(AppContent);

  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (state === 'Sign Up') {
        ({ data } = await axios.post(`${backendUrl}/api/auth/register`, { name, email, password }));
      } else {
        ({ data } = await axios.post(`${backendUrl}/api/auth/login`, { email, password }));
      }

      if (data.success) {
        setIsLoggedin(true);
        getUserData();
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message || 'Something went wrong';
      toast.error(msg);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt=""
        className="absolute left-5 sm:left-20 top-5 w-8 sm:w-32 cursor-pointer"
      />

      <div className="bg-slate-900 p-8 sm:p-10 rounded-lg shadow-lg w-full max-w-sm text-indigo-300">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">
          {state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}
        </h2>
        <p className="text-center mb-6 text-sm text-indigo-400">
          {state === 'Sign Up' ? 'Sign up to get started.' : 'Please login to continue.'}
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {state === 'Sign Up' && (
            <div className="flex items-center gap-3 w-full px-4 py-2 bg-[#333A5C] rounded-full">
              <img src={assets.person_icon} alt="" className="w-5 h-5" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent flex-1 outline-none text-indigo-100 placeholder-indigo-400"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="flex items-center gap-3 w-full px-4 py-2 bg-[#333A5C] rounded-full">
            <img src={assets.mail_icon} alt="" className="w-5 h-5" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent flex-1 outline-none text-indigo-100 placeholder-indigo-400"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex items-center gap-3 w-full px-4 py-2 bg-[#333A5C] rounded-full">
            <img src={assets.lock_icon} alt="" className="w-5 h-5" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent flex-1 outline-none text-indigo-100 placeholder-indigo-400"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <p onClick={() => navigate('/reset-password')} className="mb-4 text-indigo-500 cursor-pointer">
            Forgot password?
          </p>

          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition"
          >
            {state === 'Sign Up' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-indigo-400 text-sm">
          {state === 'Sign Up' ? 'Already have an account? ' : "Don't have an account? "}
          <button
            onClick={() => setState((prev) => (prev === 'Sign Up' ? 'Login' : 'Sign Up'))}
            className="text-indigo-200 hover:underline font-medium"
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
