import { useState, useEffect } from 'react';
import { format } from 'date-fns'
// import axios from 'axios';

function SearchBar() {
    const [showTrips, setShowTrips] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [trips, setTrips] = useState('');
    const [url, setUrl] = useState(`http://localhost:8000/api/trips/searchTrips?from=${from}&to=${to}&date=${date}`);
    // const url = 'http://localhost:8000/api/trips/searchTrips?from=' + from + '&to=' + to + '&date=' + date;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'departure') {
            setFrom(value);
        }
        if (id === 'destination') {
            setTo(value);
        }
        if (id === 'date') {
            // console.log(value)
            // const dateValue = format(new Date(value), 'dd/mm/yyyy');
            // format(new Date(), 'dd/mm/yyyy')
            setDate(value);
            // console.log(dateValue);
        }
    }


    // const handleDeparture = (e) => {
    //     setFrom(e.target.value);
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // const res = await fetch(`http://localhost:8000/api/trips/searchTrips?from=${from}&to=${to}&date=${date}`)
    //     // // .then((response) => {
    //     // //     console.log(response.json());
    //     // //     return response.json();
    //     // // })
    //     // console.log(res.json);
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     // console.log(data);

    //     setTrips(data)
    //     console.log(data)
    // }



    useEffect(() => {
        async function handleClick() {

            setShowTrips(true)
            const response = await fetch(url)
            const json = await response.json()


            setTrips(json.results)




        }
        handleClick();
    }, [url])

    // const tripsList = trips?.map((trip, key) => {
    //     return (<div key={key}>
    //         <div>{trip.from}</div>
    //     </div>)
    // })

    const tripsList =  trips?.map((trip,key) => {
        return (<div key={key}>
          
          <h1>{trip.from}</h1>
        </div> )
   })

    return (
        <div className="flex items-center">
            <form className="flex space-x-1" method='GET'>
                <input
                    type="text"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Departure..."
                    id='departure'
                    // onChange={handleDeparture}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Destination..."
                    id='destination'
                    onChange={handleInputChange}
                />
                {/* <input
                    type="text"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Destination..."
                    id='date'
                    onChange={handleInputChange}
                /> */}
                <input
                    type="date"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    id='date'
                    onChange={handleInputChange}
                // min={new Date().toISOString().split('T')[0]}
                />
                <button onClick={() => setUrl(`http://localhost:8000/api/trips/searchTrips?from=${from}&to=${to}&date=${date}`)} className="px-4 text-white bg-blue-600 rounded-full ">
                    Search
                </button>
            </form>
            <div> { showTrips && tripsList }</div>
        </div>
    );
}

export default SearchBar