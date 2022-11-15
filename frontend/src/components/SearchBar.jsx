import { useState } from 'react';

function SearchBar() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [trips, setTrips] = useState('');
    const url = 'http://localhost:8000/api/trips/searchTrips?from=' + from + '&to=' + to + '&date=' + date;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'departure') {
            setFrom(value);
        }
        if (id === 'destination') {
            setTo(value);
        }
        if (id === 'date') {
            setDate(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(url);
        const data = await response.json();

        setTrips(data)
        console.log(data)
    }

    return (
        <div className="flex items-center">
            <form className="flex space-x-1" method='GET'>
                <input
                    type="text"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Departure..."
                    id='departure'
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Destination..."
                    id='destination'
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    id='date'
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                />
                <button onClick={(e) => handleSubmit(e)} className="px-4 text-white bg-blue-600 rounded-full ">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar