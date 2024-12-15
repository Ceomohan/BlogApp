import React from 'react'

const Categeroy = () => {
    return (
        <div className="w-full lg:w-1/3 px-3">
            {/* topics */}
            <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                <ul>
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                            <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                            Nutrition
                            <span className="text-gray-500 ml-auto">23 articles</span>
                            <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                        </a>
                    </li>
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                            <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                            Food & Diet
                            <span className="text-gray-500 ml-auto">18 articles</span>
                            <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                        </a>
                    </li>
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                            <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                            Workouts
                            <span className="text-gray-500 ml-auto">34 articles</span>
                            <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                        </a>
                    </li>
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                            <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                            Immunity
                            <span className="text-gray-500 ml-auto">9 articles</span>
                            <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* divider */}
            <div className="border border-dotted"></div>

            {/* subscribe */}
            <div className="p-1 mt-4 mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
                <p className="text-gray-600">
                    Subscribe to our newsletter. We deliver the best health-related articles to your inbox
                </p>
                <input placeholder="your email address"
                    className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
                <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                    Subscribe
                </button>
            </div>

            {/* divider */}
            <div className="border border-dotted"></div>

        </div>
    )
}

export default Categeroy