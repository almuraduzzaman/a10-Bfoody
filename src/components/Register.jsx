import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        // console.log(name, email, password, url);

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setError('');

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                // console.log(newUser);
                updateUserName(newUser);
                toast.success('Account created Successfully!');
                form.reset();
            })
            .catch(err => {
                setError(err.message);
            })


        const updateUserName = (user) => {
            updateProfile(user, {
                displayName: name, photoURL: url
            })
                .then(() => {
                    // console.log('user name updated')
                })
                .catch(err => {
                    setError(err.message)
                })
        }
    }

    return (
        <div className="relative flex flex-col justify-center h-screen">
            <div className="lg:flex lg:gap-x-4 justify-center items-center mx-4">
                <div className="lg:max-w-xl w-full">
                    <img
                        className="w-full h-[200px] md:h-[400px] object-cover rounded-md border-4"
                        src="https://img.freepik.com/free-photo/tomato-omelette-with-olives-cheese_140725-4095.jpg?w=740&t=st=1682963348~exp=1682963948~hmac=a604cba6b06ec8263d239a123140f2806783b98201184b975ac09e1b22f0c3f3"
                        alt="sign up with image"
                    />
                </div>
                <div className="w-full bg-white rounded-md lg:max-w-xl">
                    <h1 className="text-2xl font-semibold text-center text-gray-700">
                        Create an account
                    </h1>
                    <form onSubmit={handleRegister} className="mt-6">
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name='url'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>

                        <p className="text-xs text-gray-800 font-bold">
                            {error}
                        </p>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-xs text-center text-gray-700">
                        {" "}
                        Already a member?{" "}
                        <Link to={'/login'} className="font-medium text-gray-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;