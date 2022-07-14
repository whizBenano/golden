import React from 'react'
import anime from 'animejs/lib/anime.es.js'
import './Home.css'
import backdrop from '../../mages/backdrop.svg'
import pic from '../../mages/pic.svg'
import tw from '../../mages/tw.png'
import fb from '../../mages/fb.png'
import ig from '../../mages/ig.png'
import share from '../../mages/share.png'
import info from '../../mages/info.png'
import { Link } from 'react-router-dom'

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
            <div className='land-first'>
                <h3>Welcome to</h3>
                <h1>SPENCER'S ACADEMY</h1>
            </div>
            <div className='second'>
                <img className='back' src={backdrop} />
            </div>
        </div>

        <div className='other'>
            <div className='one'>
                <p>login to</p>
                <Link to='courses' className='lnk'>GET STARTED</Link>
            </div>
            <div className='two'>
                <img className='pic' src={pic} />
            </div>
        </div>
        
        <div className='foot'>
            <a href='#'><img src={tw} title='follow us on Twitter' /></a>
            <a href='#'><img src={fb} title='check our Facebook page' /></a>
            <a href='#'><img src={ig} title='follow us on Instagram' /></a>
            <a href='#'><img src={share} title='share this page' /></a>
            <a href='#'><img src={info} title='Info' /></a>
        </div>
    </div>

}

export default Home