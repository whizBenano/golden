import React from 'react'
import backdrop from '../../mages/settings_monochromatic.svg'
import Leg from '../Leg/Leg'
import './Reset.css'

const Reset = () => {
    return <div className='big'>
        <div className='one'>
            <h1>Reset your password</h1>
            <div className='enter'>
                <input type='text' required />
                <label>Enter your e-mail</label>
            </div>
            <button>RESET</button>
        </div>
        <div className='pic'>
            <img src={backdrop} />
        </div>

        <Leg />
    </div>
}

export default Reset