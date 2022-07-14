import React from 'react'
import './Register.css'
import pic from '../../mages/social-media_flatline.svg'
import { Link } from 'react-router-dom'
import Leg from '../Leg/Leg'

const Register = () => {
    return <div className='big'>
        <div className='boxe'>
            <h2>Sign Up</h2>
            <form>
                <div className='enter'>
                    <input type='text' required />
                    <label>First Name</label>
                </div>
                <div className='enter'>
                    <input type='text' required />
                    <label>Last Name</label>
                </div>
                <div className='enter'>
                    <input type='text' required />
                    <label>Email</label>
                </div>
                <div className='enter'>
                    <input type='text' required />
                    <label>Username</label>
                </div>
                <div className='enter'>
                    <input type='password' required />
                    <label>Password</label>
                </div>
                <div className='enter'>
                    <input type='password' required />
                    <label>Confirm Password</label>
                </div>
                <center>already a member? click <Link to='/login'>here</Link> to sign in</center>
                <button className='lnk'>SUBMIT</button>
            </form>
        </div>
        <div className='pic'>
            <img src={pic} />
        </div>

        <Leg />
    </div>
}

export default Register