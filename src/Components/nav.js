import React from 'react'
import '../scss/nav.scss'
import { Link } from 'react-router-dom'

const nav = () => {
    return (
        <div className='container'>
            <nav>
                <Link to='/' exact className="logo"> <li>ff</li></Link>
                <ul className="nav-ul">
                    <Link to='/top' exact> <li className="item">Top</li></Link>
                    <Link to='/new'> <li className="item">New</li></Link>
                    <Link to='/upcoming'> <li className="item">Upcoming</li></Link>
                    <Link to='/genres'> <li className="item">Genres</li></Link>
                </ul>

            </nav>


        </div>
    )
}

export default nav
