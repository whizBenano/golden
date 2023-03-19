import React from 'react'
import './Login.css'
import pic from '../../mages/secure_login.svg'
import { Link } from 'react-router-dom'
import Leg from '../Leg/Leg'

const Login = () => {
    return <div className='big'>
        <div className='box'>
            <h2>Login</h2>
            <form>
                <div className='enter'>
                    <input type='text' required />
                    <label>Username</label>
                </div>
                <div className='enter'>
                    <input type='password' required />
                    <label>Password</label>
                </div>
                <center>forgot password? click <Link to='/reset'>here</Link></center>
                <button className='lnk'>LOGIN</button>
                <center><p className='signup'>not a member? click <Link to='/register'>here</Link> to sign up</p></center>
            </form>
        </div>
        <div className='pic'>
            <img src={pic} alt='' />
        </div>

        <Leg />
    </div>
}

export default Login