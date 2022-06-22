import React from 'react'
import anime from 'animejs/lib/anime.es.js'
import backdrop from '../../mages/backdrop.svg'
import pic from '../../mages/pic.svg'
import './Home.css'

const Home = () => {
    anime({
        targets: '.content',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#00f',
        duration: 800
    })

    return <div className='land'>
        <div className='content'>
            <h3>Welcome to</h3>
            <h1>SPENCER'S ACADEMY</h1>
        </div>
        <div className='other'>
            <p>login to</p>
            <a href='#' className='lnk'>GET STARTED</a>
        </div>
        {/* <img className='back' src={backdrop} /> */}
        {/* <img className='pic' src={pic} /> */}
    </div>

}

export default Home