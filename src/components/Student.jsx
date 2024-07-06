import React, { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from 'axios'; // Import Axios
import { useNavigate } from "react-router-dom";

import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
const Student = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [cityName, setCityName] = useState("");
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const [dob, setDob] = useState("");

    const changeHandler = value => {
        setValue(value)
    }
    // const [gender, setGender] = useState("");

    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        address: '',
        phoneNumber: '',
        gender: '',
        email: '',
        previousEducation: '',
        programOfInterest: '',
        consent: false,
        languageProficiency: {
            marathi: false,
            hindi: false,
            english: false,
        },
    });
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Format the dateOfBirth value to be sent in the correct format
            const formattedDateOfBirth = new Date(dob).toISOString().split('T')[0];
            const response = await axios.post('http://localhost:8080/api/v1/student/createStudent', {
                ...formData,
                dateOfBirth: formattedDateOfBirth,

            });
            console.log(response.data); // Handle success response
            navigate("/");
        } catch (error) {
            console.error('Error:', error.response.data); // Handle error response
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'consent') {
                setFormData({ ...formData, [name]: checked });
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    languageProficiency: {
                        ...prevData.languageProficiency,
                        [name]: checked,
                    },
                }));
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    return (
        <div className="w-full flex p-4 ">
            <div>
                {/* <h1 className="text-2xl font-bold mb-4 text-center text-purple-500">Student Counseling and Admission Information Form</h1> */}
                <div className='mt-35 rounded-full ml-10 mb-4 p-6 '>
                    <img className='mb-8 hover:scale-110 rounded-xl' src={`https://plus.unsplash.com/premium_photo-1705091309202-5838aeedd653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8 `} alt='student' />
                    <img className='hover:scale-110 rounded-xl' src={`https://media.istockphoto.com/id/1304345307/photo/young-women-sitting-on-chair-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=94DS_TcuEhdWBsWRRUxHj1_T2cwS15BFIWW9F6xH1Gc=`} alt='student' />

                </div>
            </div>

            <form onSubmit={handleSubmit} className=" mx-auto">

                <div className="mb-4 flex-initial">
                    <h1 className="text-2xl font-bold mb-4 text-center text-purple-500">Student Counseling and Admission Information Form</h1>

                    <label className="block mb-1 mt-10">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                    <label className="block mb-1">email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                    <label className="block mb-1">Mobile Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="border w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Gender:</label>
                        <select
                            id="gender"
                            name='gender'
                            value={formData.gender}
                            onChange={handleChange}
                            className="border w-full p-2 rounded"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>
                <div className='  w-full items-center m-3 ml-0'>
                    <h6 className='p-3'>Country</h6>
                    <CountrySelect
                        onChange={(e) => {
                            setCountryid(e.id);
                        }}
                        placeHolder="Select Country"
                    />
                    <h6 className='p-3'>State</h6>
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                            setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                    <h6 className='p-3'>City</h6>
                    <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        onChange={(e) => {
                            setCityName(e.id);
                        }}
                        placeHolder="Select City"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Previous Education History:</label>
                    <input
                        type="text"
                        id="previousEducation"
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Program of Interest:</label>
                    <input
                        type="text"
                        id="programOfInterest"
                        name="programOfInterest"
                        value={formData.programOfInterest}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>

                <div className='mb-3'>
                    <label>Language Proficiency:</label>
                    <div className="flex flex-wrap">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="marathi"
                                checked={formData.languageProficiency.marathi}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Marathi</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="hindi"
                                checked={formData.languageProficiency.hindi}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Hindi</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="english"
                                checked={formData.languageProficiency.english}
                                onChange={handleChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">English</span>
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label>I hereby consent to the use of my personal data...</label>
                </div>
                <div className="mb-4 mr-8  flex justify-center">
                    <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Submit</button>
                </div>
            </form>
        </div>

    );
};

export default Student;
