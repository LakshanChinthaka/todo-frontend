import React, { useState } from 'react';
import axios from 'axios';

function Dropdown({onFilter }) {
    const [isOpen, setIsOpen] = useState(false);
    const [filterData, setFilterData] = useState(false);
    const [select, setSelect] = useState('');
    const values = ["All", "Complete", "Incomplete"];

    const handleItemClick = (status) => {
        console.log(status)
        setIsOpen(false);
        setSelect(status)
        onFilter(status);
    };

    return (
        <div className="relative w-max mx-auto mt-[23px] px-5 ml-5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="px-3 py-3 rounded text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
                Selected - {select}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 fill-white inline ml-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <ul className="absolute block shadow-lg shadow-blue-100 bg-white py-4 z-10 min-w-full w-max rounded max-h-96 overflow-auto">
                    {values.map((status, index) => (
                        <li

                            key={index}
                            onClick={() => handleItemClick(status)}
                            className="py-3 px-4 flex items-center hover:bg-blue-50 text-black text-sm cursor-pointer"
                        >
                            {status}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default Dropdown;
