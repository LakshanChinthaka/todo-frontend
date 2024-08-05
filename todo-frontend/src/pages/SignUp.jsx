import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState("");
    const navitage = useNavigate();
    const { firstName, email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    };

    //Sumbit Data
    const onSubmit = async e => {
        e.preventDefault();

        // // Passwword validation
        // if (password.length <= 6 ) {
        //     setError('Passwords length is too short');
        //     return;
        // }
        if (password !== confirmPassword ) {
            setError('Passwords do not match');
            return;
        }
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(res.data);
            setError('');
            navitage("/login");
        } catch (error) {
            setError(error.response?.data?.msg || 'Something went wrong..');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="max-w-sm mx-auto lg:mx-auto mt-20 md:mr-5 p-3">

                <h6 className='font-sans grid justify-items-center text-center text-4xl font-bold mb-4 text-gray-700'>Signup</h6>

                   {/* Error Message */}
                   {error && (
                    <p className=" grid justify-items-center   text-sm text-red-500 items-center">
                        {error}
                    </p>
                )}

                {/* Firat name */}
                <div className=" grid mb-7">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-700 ">First Name</label>
                    <input type="text" name="firstName" value={firstName} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Roman Mishel" required />
                </div>

                {/* Email */}
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-700 ">Your email</label>
                    <input type="email" name="email" id="email" value={email} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>

                {/* password */}
                <div className="mt-5 mb-3">
                    <label for="password" className="block mb-2  text-sm font-medium text-gray-700 ">Password</label>
                    <input type="password" name="password"  value={password} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>


                {/* repeat passwrod */}
                <div className="mt-5 mb-3">
                    <label for="password" className="block mb-2  text-sm font-medium text-gray-700 ">Repeat password</label>
                    <input type="password"  name="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>

             
                <p className='text-sm mt-3 mb-3 font-medium text-gray-700'>If you Have An Account? <span><a href="/login" className='text-blue-500'>Login</a></span> </p>

                {/* Button */}
                <div className='grid justify-items-center w-full mt-2'>
                    <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center ">Login</button>
                </div>

            </form>

        </div>
    )
}

export default SignUp