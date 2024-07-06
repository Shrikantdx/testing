

import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import OAuth from "../components/OAuth";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPhoneNumber,
    updateProfile,
} from "firebase/auth";

import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import book from '../book.png';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;
    const [mobile, setMobile] = useState('');
    const [isValidMobile, setIsValidMobile] = useState(true);
    const navigate = useNavigate();

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    const onChangeMobile = (e) => {
        const value = e.target.value;
        setMobile(value);
        setIsValidMobile(validateMobile(value));
    };

    const validateMobile = (mobile) => {
        // Regular expression for a valid mobile number format
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    };

    const [selectedOption, setSelectedOption] = useState('');

    function handleChange(event) {
        setSelectedOption(event.target.value);
    }





    async function onSubmit(e) {
        e.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;
            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();
            formDataCopy.mobile = mobile; // Add mobile number to the form data
            formDataCopy.role = selectedOption;
            await setDoc(doc(db, "users", user.uid), formDataCopy);


            switch (selectedOption) {
                case "student":
                    navigate("/student");
                    break;
                case "counselor":
                    navigate("/counselor");
                    break;
                case "recruiter":
                    navigate("/recruiter");
                    break;
                case "jobSeeker":
                    navigate("/jobSeeker");
                    break;
                default:
                    navigate("/");
                    break;
            }

            // navigate("/");
        } catch (error) {
            toast.error("Something went wrong with the registration");
        }

        // No need to retrieve mobile number from Firebase Authentication response
        // It's already stored in formDataCopy.mobile
    }

    return (
        <section className="flex justify-center items-center h-screen mt-20">
            <div className="flex justify-between w-full max-w-6xl mx-auto">
                {/* <div className="w-full md:w-1/2"> */}
                {/* <img
                    src={book}
                    alt="key"
                    className="w-full h-auto rounded-2xl"
                /> */}
                <div className="ml-4 ">
                    <div className="relative">
                        <img
                            src={book}
                            alt="key"
                            className="w-441px h-445px rounded-2xl"
                            style={{ width: "441px", height: "445px" }}
                        />
                    </div>



                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Make your profile
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Book your Counselor appointment
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Book your slots/timing
                        </li>
                    </ul>
                </div>

                {/* </div> */}

                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <h6 className="text-2xl mb-3 mr-8">Find Your <span className="text-red-500">Dream College</span></h6>
                    <form onSubmit={onSubmit}>                        <span>Full Name</span>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="What is your Name?"
                            className="mb-3 w-full px-4 py-2 border font-inter  bg-white  rounded transition ease-in-out"
                        />
                        <span className="">Mobile Number</span>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={onChangeMobile}
                            placeholder="Mobile"
                            className={` mb-3 mt-1 w-full px-4 py-2  border  bg-white   ${isValidMobile ? 'border-gray-300' : 'border-red-500'} rounded transition ease-in-out`}
                        />
                        {!isValidMobile && <p className="text-red-500">Please enter a valid mobile number.</p>}
                        <span>Email ID</span>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email address"
                            className="mb-3 w-full px-4 mt-0 py-2 border  bg-white rounded transition ease-in-out"
                        />
                        <div className="relative mb-6">
                            <span>Password</span>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                                className="w-full px-4 py-2  border  bg-white border-gray-300 rounded transition ease-in-out"
                            />
                            {showPassword ? (
                                <AiFillEyeInvisible
                                    className="absolute right-3 top-9 text-xl cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                            ) : (
                                <AiFillEye
                                    className="absolute right-3 top-9 cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                            )}

                        </div>
                        <div className=" justify-between mb-8 ">
                            <span className="p-3 flex mb-3">Select your Role</span>
                            <label className=" ">
                                <input
                                    type="radio"
                                    value="student"
                                    onChange={handleChange}
                                    checked={selectedOption === "student"}
                                    className="mr-2"
                                    name="userRole"
                                    required
                                />
                                <span className="text-lg mr-7  px-7 py-3 bg-blue-500 rounded-full text-white">Student</span>
                            </label>
                            <label className="">
                                <input
                                    type="radio"
                                    value="counselor"
                                    onChange={handleChange}
                                    checked={selectedOption === "counselor"}
                                    className="mr-2"
                                    name="userRole"
                                    required
                                />
                                <span className="text-lg px-7 py-3 w-full  bg-blue-500 rounded-full text-white">Counselor</span>
                            </label>
                            <div className=" "> <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="recruiter"
                                    onChange={handleChange}
                                    checked={selectedOption === "recruiter"}
                                    className="mr-2"
                                    name="userRole"
                                    required
                                />


                                <span className="text-lg m-4 ml-0 px-6 py-2 bg-blue-500 rounded-full text-white">Recruiter</span>
                            </label>
                                <label className="">
                                    <input
                                        type="radio"
                                        value="jobSeeker"
                                        onChange={handleChange}
                                        checked={selectedOption === "jobSeeker"}
                                        className="mr-2"
                                        name="userRole"
                                        required
                                    />
                                    <span className="text-lg px-7 py-3 w-full bg-blue-500 rounded-full text-white">Job Seeker</span>
                                </label>
                            </div>

                        </div>
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-6">
                                Already have an account?
                                <Link
                                    to="/contact"
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                                >
                                    Sign in
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
                            Registration
                        </button>
                        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>
                        <div className=" py-1 ">
                            <OAuth />
                        </div>
                    </form>
                </div>
                <div className="fixed left-0 bottom-0 blur-xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-blue-500 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>

                </div>

            </div>
        </section>
    );
}
