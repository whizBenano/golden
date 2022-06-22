import React from 'react'
import logo from '../../mages/logo.png'
import './Nav.css'

const Nav = () => {
    const buttons = document.querySelector('.lnk')
    // buttons.addEventListener('click', e => {
    //     let x = e.clientX - e.target.offsetLeft
    //     let y = e.clientY - e.target.offsetTop

    //     let ripples = document.createElement('span')
    //     ripples.style.left = x + 'px'
    //     ripples.style.top = y + 'px'
    //     this.appendChild(ripples)

    //     setTimeout(() => {
    //         ripples.remove()
    //     }, 1000)
    // })

    return <div className='first'>
        <div className='control'>
            <a href='/'><img src={logo} width='50px'/></a>
            <a href='#' className='lnk'>LOGIN</a>
        </div>
    </div>
}

export default Nav