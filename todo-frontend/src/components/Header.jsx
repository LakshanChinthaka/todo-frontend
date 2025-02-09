

import React from 'react';
// import Logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom';


function Header() {
    // const navigates = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        window.location.href = '/login'; 
        // navigates('/login'); // Not work
    };
    

    return (
        <div>
            <header className='flex border-b py-4 px-4 sm:px-10 bg-purple-600 font-sans min-h-[70px] tracking-wide relative z-50'>
                <div className='flex flex-wrap items-center lg:gap-y-2 gap-y-4 gap-x-4 w-full'>

                    {/* Logo */}
                    {/* <img src={Logo} alt="logo" className='w-[200px] mt-[-15px] mb-[-5px]' /> */}

                    <div id="collapseMenu"
                        className="max-lg:hidden lg:!flex lg:items-center lg:flex-1 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
                        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                    </div>

                    <div className='flex ml-auto space-x-6'>
                        <button onClick={logOut} type="button" className="py-1.5 px-6 me-2 mb-1 font-bold text-white bg-red-500 rounded-full hover:bg-red-400 hover:text-black">Logout</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
