import React from 'react'
import logo from '../../mages/logo.png'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return <div className='first'>
        <div className='control'>
            <Link to='/'><img src={logo} width='50px' alt='' /></Link>
            <Link to='login' className='lnk'>LOGIN</Link>
        </div>
    </div>
}

export default Nav