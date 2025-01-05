import { Link } from "react-router-dom";


const error404 = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <section className="bg-white">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-4xl font-medium text-[#185C65] dark:text-[#185C65]">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <Link to='/' className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#185C65] rounded-lg shrink-0">
                                Take me home
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default error404;