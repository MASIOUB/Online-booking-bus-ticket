import React from 'react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>

            <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
                {/* <!-- logo --> */}
                <div className="inline-flex">
                    <Link to='/'>Supratour</Link>
                </div>

                {/* <!-- login --> */}
                <div className="flex-initial">
                    <div className="flex justify-end items-center relative">

                        <div className="block">
                            <div className="inline relative">
                                <button type="button" className="inline-flex items-center relative px-2">
                                    <Link to='/login'>
                                        <FaSignInAlt />Login
                                    </Link>

                                    <Link to='/register'>
                                        <FaSignOutAlt />Register
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header