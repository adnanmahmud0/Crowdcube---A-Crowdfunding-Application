import React, { useContext, useState } from 'react';
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleNavigate = () => {
        navigate('/ForgetPassword', { state: { email } });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successfully!",
                    icon: "success"
                });
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire({
                    title: "Good job!",
                    text: "Login successfully!",
                    icon: "success"
                });
                navigate('/');
            })
            .catch(error => Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error"
            }));
    };

    const handleGitHubLogin = () => {
        signInWithGithub()
            .then(result => {
                Swal.fire({
                    title: "Good job!",
                    text: "Login successfully!",
                    icon: "success"
                });
                navigate('/');
            })
            .catch(error => Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error"
            }));
    };

    return (
        <div className='mb-[600px]'>
            <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-[#185C65] px-8 py-12 h-[320px]">
                <div className='max-w-7xl mx-auto'>
                    <p className="text-4xl font-semibold text-white">Crowd Cube</p>
                    <div className="max-w-lg mt-16 max-lg:hidden">
                        <h3 className="text-3xl font-bold text-white">Login</h3>
                        <p className="text-sm mt-4 text-white">
                            Embark on a seamless journey as you Login to your account. Unlock a realm of opportunities and possibilities that await you.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <form onSubmit={handleLogin}>
                        <div className="mb-8">
                            <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
                        </div>
                        <div className="sm:flex sm:items-start md:space-x-4 max-sm:space-y-4 mb-8">
                            <button type="button" onClick={handleGoogleLogin} className="md:w-1/2 w-full py-2.5 px-4 text-xs font-semibold rounded-md text-[#185C65] bg-[#185c6521] hover:bg-[#185c655e] focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline mr-4" viewBox="0 0 512 512">
                                    <path fill="#fbbd00"
                                        d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                        data-original="#fbbd00" />
                                    <path fill="#0f9d58"
                                        d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                        data-original="#0f9d58" />
                                    <path fill="#31aa52"
                                        d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                        data-original="#31aa52" />
                                    <path fill="#3c79e6"
                                        d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                        data-original="#3c79e6" />
                                    <path fill="#cf2d48"
                                        d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                        data-original="#cf2d48" />
                                    <path fill="#eb4132"
                                        d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                        data-original="#eb4132" />
                                </svg>
                                Sign in with Google
                            </button>
                            <button type="button" onClick={handleGitHubLogin} className="flex items-center space-x-4 md:w-1/2 w-full py-2.5 px-4 text-xs font-semibold rounded-md text-[#185C65] bg-[#185c6521] hover:bg-[#185c655e] focus:outline-none">
                                <FaGithub size="20px" color="black" />
                                <div>Sign in with GitHub</div>
                            </button>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]" placeholder="Enter email" />
                                <MdEmail size="25px" color="#BBBBBB" className="absolute right-4" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-[#185C65]" placeholder="Enter password" />
                                {showPassword ? (
                                    <FaEyeSlash className="absolute right-4 text-gray-400 cursor-pointer" size="20px" onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaEye className="absolute right-4 text-gray-400 cursor-pointer" size="20px" onClick={togglePasswordVisibility} />
                                )}
                            </div>
                        </div>
                        <div className="mt-4 text-right">
                            <a onClick={handleNavigate} className="text-[#185C65] text-sm font-semibold hover:underline cursor-pointer">
                                Forgot your password?
                            </a>
                        </div>

                        <div className="mt-8">
                            <button type="submit" className="w-full shadow-xl py-3 px-6 text-sm font-semibold text-white bg-[#185C65] hover:bg-gray-600 focus:outline-none rounded-full">
                                Log in
                            </button>
                        </div>
                        <p className="text-sm mt-8 text-center text-gray-800">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-[#185C65] font-semibold hover:underline ml-1 whitespace-nowrap">
                                Register here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
