import React from 'react'
import '../scss/nav.scss'
import { Link } from 'react-router-dom'

const nav = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <ul className="nav-ul">
                    <Link to='/' exact> <li className="item">Home</li></Link>
                    <Link to='/upcoming'> <li className="item">Upcoming/New</li></Link>
                    <Link to='/top'> <li className="item">Top</li></Link>
                    <Link to='/genre'> <li className="item">Genre</li></Link>


                </ul>

            </nav>


        </div>
    )
}

export default nav
