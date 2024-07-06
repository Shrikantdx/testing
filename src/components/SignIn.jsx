import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import book from '../book.png'
export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;
    const navigate = useNavigate();
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (userCredential.user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Bad user credentials");
        }
    }
    return (
        <section >
            <h1 className="text-3xl text-center  font-bold mb-0 text-red-400">Sign In</h1>
            <div className="flex justify-center flex-wrap items-center  max-w-6xl mx-auto">
                <div className="relative">
                    <img
                        src={book}
                        alt="key"
                        className="w-441px h-445px rounded-2xl"
                        style={{ width: "441px", height: "445px" }}
                    />
                </div>

                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">

                    <form onSubmit={onSubmit}>



                        <div className=" justify-between mb-8 ">
                            {/* <label className=" ">
                                <input
                                    type="radio"
                                    value="student"
                                    onChange={() => console.log("student clicked")}
                                    className="mr-2"
                                    name="userRole"
                                />
                                <span className="text-lg mr-7  px-7 py-3 bg-blue-500 rounded-full text-white">Student</span>
                            </label>
                            <label className="">
                                <input
                                    type="radio"
                                    value="counselor"
                                    onChange={() => console.log("counselor clicked")}
                                    className="mr-2"
                                    name="userRole"
                                />
                                <span className="text-lg px-7 py-3 w-full  bg-blue-500 rounded-full text-white">Recruiter</span>
                            </label> */}
                            {/* <div className=" "> <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="student"
                                    onChange={() => console.log("student clicked")}
                                    className="mr-2"
                                    name="userRole"
                                />
                                <span className="text-lg m-4 ml-0 px-6 py-2 bg-blue-500 rounded-full text-white">Counsellor</span>
                            </label>
                                <label className="">
                                    <input
                                        type="radio"
                                        value="counselor"
                                        onChange={() => console.log("counselor clicked")}
                                        className="mr-2"
                                        name="userRole"
                                    />
                                    <span className="text-lg px-7 py-3 w-full bg-blue-500 rounded-full text-white">Job Seeker</span>
                                </label>
                            </div> */}

                        </div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email address"
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                        />
                        <div className="relative mb-6">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                            />
                            {showPassword ? (
                                <AiFillEyeInvisible
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                            ) : (
                                <AiFillEye
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                            )}
                        </div>
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-6">
                                Don't have a account?
                                <Link
                                    to="/sign-up"
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                                >
                                    Register
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/forgot-password"
                                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                                >
                                    Forgot password?
                                </Link>
                            </p>
                        </div>
                        <button
                            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                            type="submit"
                        >
                            Sign in
                        </button>
                        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
            <div>

                <div className="fixed right-1/4 bottom-10 top-36 right-6 border-l-white-900 blur-2xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-yellow-300 overflow-hidden shadow-lg" style={{ height: '200px', width: '200px' }}>

                </div>

            </div>
            <div className="fixed left-0 bottom-0 blur-xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-blue-500 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>

            </div>
            <div className="blur-2xl fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex items-start justify-start rounded-full bg-gradient-to-br bg-purple-400 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px', left: '33%' }}>
                {/* Content */}
            </div>


            <div>

                <div className="fixed left-0 bottom-0 blur-3xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-blue-600 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>

                </div>

            </div>
        </section>
    );
}
