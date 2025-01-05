import React, { useContext, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setError("");
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoUrl.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        // Validation checks
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Email Error",
                text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
            });
            return;
        }

        setIsLoading(true);
        createUser(email, password)
            .then((result) => {
                Swal.fire({
                    title: "Good job!",
                    text: "Account created successfully!",
                    icon: "success",
                });
                e.target.reset();
                updateUserProfile({ displayName, photoURL });
                navigate('/');
            })
            .catch((error) => {
                if (error.message.includes("email-already-in-use")) {
                    Swal.fire({
                        icon: "error",
                        title: "Email Error",
                        text: "This email is already in use. Please try logging in.",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                    });
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className='mb-[600px]'>
            <div className="grid lg:grid-cols-2 gap-4 bg-[#185C65] px-8 py-12 h-[320px]">
                <div className='max-w-7xl mx-auto'>
                    <a>
                        <p className='text-4xl font-semibold text-white'>Crowd Cube</p>
                    </a>
                    <div className="max-w-lg mt-16 max-lg:hidden">
                        <h3 className="text-3xl font-bold text-white">Sign Up</h3>
                        <p className="text-sm mt-4 text-white">Join us to explore exciting opportunities. Create your account today!</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl px-6 py-8 max-w-md w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <form onSubmit={handleSignUp}>
                        <div className="mb-8">
                            <h3 className="text-3xl font-extrabold text-gray-800">Sign Up</h3>
                        </div>
                        <div>
                            <label htmlFor="name" className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="text-gray-800 text-sm mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]"
                                    placeholder="Enter your email"
                                />
                                <MdEmail className="absolute right-4 text-gray-400" size="20px" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="photoUrl" className="text-gray-800 text-sm mb-2 block">Photo URL</label>
                            <div className="relative flex items-center">
                                <input
                                    id="photoUrl"
                                    name="photoUrl"
                                    type="text"
                                    required
                                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]"
                                    placeholder="Enter photo URL"
                                />
                                <BiCodeCurly className="absolute right-4 text-gray-400" size="20px" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="text-gray-800 text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]"
                                    placeholder="Enter password"
                                />
                                {showPassword ? (
                                    <FaEyeSlash className="absolute right-4 text-gray-400 cursor-pointer" size="20px" onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaEye className="absolute right-4 text-gray-400 cursor-pointer" size="20px" onClick={togglePasswordVisibility} />
                                )}
                            </div>
                            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-3 px-6 text-sm font-semibold text-white ${
                                    isLoading ? "bg-gray-400" : "bg-[#185C65] hover:bg-gray-600"
                                } focus:outline-none rounded-full shadow-xl`}
                            >
                                {isLoading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </div>
                        <p className="text-sm mt-8 text-center text-gray-800">
                            Already have an account?
                            <Link to='/login' className="text-[#185C65] font-semibold hover:underline ml-1">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
