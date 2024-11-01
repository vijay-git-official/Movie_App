import React, { useRef, useState } from 'react';
import Header from './Header';
import checkValidData from '../utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const email = useRef(null);
    const password = useRef(null);

    const handleClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setError(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Sign up successful
                    const user = userCredential.user;
                    toggleSignInForm();
                    console.log(user);
                })
                .catch((error) => {
                    setError(error.message);
                });
        } else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    };

    return (
        <div className="relative h-screen overflow-hidden">
            <Header />

            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>


            <form
                onSubmit={(e) => e.preventDefault()}
                className="relative z-10 w-full max-w-md  mx-auto p-8 bg-black bg-opacity-80 text-white rounded-lg mt-20"
            >
                <h1 className="text-3xl font-bold mb-6">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
                    />
                )}

                <input
                    type="text"
                    ref={email}
                    placeholder="Email"
                    className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
                />
                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="w-full p-2 mb-4 bg-gray-700 rounded-lg"
                />

                {error && <p className="text-red-600 mb-4">{error}</p>}

                <button
                    className="w-full p-4 bg-red-700 rounded-lg hover:bg-red-800 transition-colors"
                    onClick={handleClick}
                >
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>

                <p className="mt-6 cursor-pointer text-center" onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}
                </p>
            </form>
        </div>
    );
};

export default Login;
