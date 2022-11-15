import SearchBar from '../components/SearchBar'
import Background from '../images/bg-home.jpeg'

import { useState } from 'react'

function Booking() {

    return (
        <div>
            <SearchBar />
            <div className="py-6">
                <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-cover" style={{backgroundImage: `url(${Background})`}}>
                    </div>
                    <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">SAfi</h1>
                        <p className="mt-2 text-gray-600 text-sm">10:00</p>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Book Seat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking