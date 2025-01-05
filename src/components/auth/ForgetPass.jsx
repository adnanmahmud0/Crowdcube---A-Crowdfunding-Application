import React, { useContext, useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const ForgetPass = () => {
    const { forgetPassword } = useContext(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log(location.state); // Debugging
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);
    
    const handleForgetPassword = (e) => {
        e.preventDefault();
        forgetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Email send Successfully!",
                    icon: "success"
                  });
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                const errorMessage = error.message || "Something went wrong!";
                Swal.fire({
                    title: "Good job!",
                    text: errorMessage,
                    icon: "error"
                  });
            });
    };

    return (
        <div className='mb-[600px]'>
            <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-[#185C65] px-8 py-12 h-[320px]">
                <div className='max-w-7xl mx-auto'>
                    <p className='text-4xl font-semibold text-white'>Crowd Cube</p>
                    <div className="max-w-lg mt-16 max-lg:hidden">
                        <h3 className="text-3xl font-bold text-white">Forget Password</h3>
                        <p className="text-sm mt-4 text-white">
                            Enter your email address and press reset password button. After that, you will get an email from your mail to reset password. Open the link and set a new password.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <form onSubmit={handleForgetPassword}>
                        <div className="mb-8">
                            <h3 className="text-3xl font-extrabold text-gray-800">Reset Password</h3>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-800 text-sm mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    name="email" 
                                    type="email" 
                                    required 
                                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]" 
                                    placeholder="Enter email" 
                                />
                                <MdEmail size="25px" color="#BBBBBB" className="absolute right-4" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="submit" className="w-full shadow-xl py-3 px-6 text-sm font-semibold text-white bg-[#185C65] hover:bg-gray-600 focus:outline-none rounded-full">
                                Reset Password
                            </button>
                        </div>
                        <p className="text-sm mt-8 text-center text-gray-800">
                            Remember password? <Link to="/login" className="text-[#185C65] font-semibold hover:underline ml-1 whitespace-nowrap">Go to Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;
