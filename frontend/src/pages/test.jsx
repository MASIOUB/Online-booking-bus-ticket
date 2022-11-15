import {useEffect, useState,useRef} from 'react'
import './home.css'
import video from '../../assets/vedShow.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import Main from '../Main/main'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Trip from '../Trip'
import swal from 'sweetalert';

const test = () => {

    // useEffect(()=>{
    //     Aos.init({duration: 2000})
    // }, [])

    const [ville_depart, setDCity] = useState('')
    const [ville_arriver, setACity] = useState('')
    const [temp_depart, setDateD] = useState('')
    const [trips , setTrips]= useState([])
    const ref = useRef(null)
    const handleDCity = (e) => {
        setDCity(e.target.value)
    }
    
    const handleACity = (e) => {
        setACity(e.target.value)
    }
    
    const handleDateD = (e) => {
    setDateD(e.target.value)
    }


    const handleSearsh = async (e) => {
        e.preventDefault()

        const response = await fetch(
            `api/resrvation?ville_depart=${ville_depart}&ville_arriver=${ville_arriver}&date_depart=${temp_depart}`
        )
        const data = await response.json()
        // const message = data.message

        // if (message) {
        //     swal(message);
        //     console.log(data)
        // } else {
            setTrips(data)
            console.log(data)
        // }
    }

    const handleClick = (ref) => {
      ref.current.scrollIntoView({ inline: "center", });
      };

    // const [selectedDate, setSelectedDate] = useState(null)

    return(
        <>
        <section className='test'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="testContent container">
                <div className="textDiv">

                    <span data-aos="fade-up"  className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className='testTitle'>
                        search your Trip
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv flex items-center justify-center" ref={ref}>   

                <div className="destinationInput">
                    <div className="input flex text-black">
                        <input 
                        onChange={handleDCity}
                        type="text" placeholder='select origin ...' />
                        <GrLocation className='icon' />
                    </div>
                </div> 

                <div className="destinationInput">
                    <div className="input flex text-black">
                        <input type="text" 
                        onChange={handleACity}
                        placeholder='select destination ...' />
                        <GrLocation className='icon' />
                    </div>
                </div>

                <div className="dateInput">
                    <div className="input flex text-black">
                        <input 
                        type="date"
                        onChange={handleDateD} min={new Date().toISOString().split('T')[0]} />
                    </div>
                </div> 

                <div className="dateInput">
                    <button className='btn mb-4' onClick={(e)=> {handleSearsh(e);handleClick(ref)}}>Searsh</button>
                </div> 

                <div className="searchOptions flex">
                    <HiFilter className='icon'/>
                    <span>More Filter</span>
                </div> 
                </div>
            </div>
        </section>

        <div>
        {trips.map ((trip) => {
            return ( 
                <Trip trip={trip}/>
            );      
        })}
        </div>


        <Main />
        </>
    )
}

export default test