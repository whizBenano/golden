import React from 'react'
import logo from '../../mages/logo.png'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    const buttons = document.querySelector('.lnk')

    return <div className='first'>
        <div className='control'>
            <Link to='/'><img src={logo} width='50px'/></Link>
            <Link to='login' className='lnk'>LOGIN</Link>
        </div>
    </div>
}

export default Nav