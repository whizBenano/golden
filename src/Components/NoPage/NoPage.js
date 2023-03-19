import React from 'react'
import Leg from '../Leg/Leg'
import './NoPage.css'

const NoPage = () => {
    return <div className='complain'>
        <h1>Woopsie!</h1>
        <h3>Page not found</h3>
        <p>
            The page you're looking for is either deleted or 
            does not exist
        </p>

        <Leg />
    </div>
}

export default NoPage