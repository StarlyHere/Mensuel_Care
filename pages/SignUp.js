import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="min-h-screen items-center justify-center bg-gradient-to-r from-[#ffd5dc] to-[#ffabb9]">
    <Navbar/>
    <div className='flex min-h-screen items-center justify-center'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Sign up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="py-2 px-4 text-white bg-[#ac1e44] hover:bg-pink-800 focus:ring-2 focus:ring-pink-900 focus:ring-opacity-50 rounded-md"
            >
            <Link href="/Login">
              Sign up
            </Link>
            </button>
            <div>
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
