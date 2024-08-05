import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Login 
    const onSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            console.log(res.data.msg);
            localStorage.setItem("token", res.data.accessToken)
            localStorage.setItem("uid", res.data.uid)
            setError('');
            const isAuthenticated = Boolean(localStorage.getItem('token'));
            if(isAuthenticated){
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error)
            // console.log(res.data.msg);
            setError(error.response.data.msg || 'Something went wrong..');
            // setError( 'Something went wrong....!');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="max-w-sm mx-auto lg:mx-auto mt-20 md:mr-5 p-3">
                <h6 className='font-sans grid justify-items-center text-center text-4xl font-bold mb-4 text-gray-700'>Login</h6>

                {/* Error Message */}
                {error && (
                    <p className=" grid justify-items-center   text-sm text-red-500 items-center">
                        {error}
                    </p>
                )}

                {/* Email */}
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-700 ">Your email</label>
                    <input type="email" name="email" value={email} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>

                {/* password */}
                <div className="mt-5 mb-3">
                    <label for="password" className="block mb-2  text-sm font-medium text-gray-700 ">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>

                <p className='text-sm mt-3 mb-3 font-medium text-gray-700'>Don't Have An Account? <span><a href="/signin" className='text-blue-500'>Sign Up</a></span> </p>

                {/* Button */}
                <div className='grid justify-items-center w-full mt-2'>
                    <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center ">Login</button>
                </div>

            </form>

        </div>
    )
}

export default Login