import React from 'react'
import SignUp from './SignUp'
import Login from './Login'


function Home() {
    return (
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto  ">
            <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">

                <div className="max-md:order-1 md:ml-10 xl:ml-0 max-md:text-center mt-10">

                    <p className="md:mt-12 mt-4 text-3xl font-bold text-blue-600"><span className="rotate-90 inline-block uppercase mr-2 mb-2">|</span> Elevate Your Productivity</p>
                    <h2 className="text-gray-800 tracking-wide mt-3 md:mt-2 md:text-6xl text-6xl font-extrabold mb-4 md:!leading-[55px]">Note Book</h2>
                    <p className=" text-base tracking-wide mt-5 leading-7 text-gray-600 md:mt-10">Transform Your Tasks into Triumphs. Embrace the power of organization, streamline your workflow, and unlock your full potential. Start Planning Today, Achieve Tomorrow, and make every day a step towards success.</p>
                </div>

                <Login />
                {/* <SignUp /> */}

            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-1 items-center">
            </div>
        </div>
    )
}

export default Home