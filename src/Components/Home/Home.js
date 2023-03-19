import React from 'react'
// import anime from 'animejs/lib/anime.es.js'
import './Home.css'
import backdrop from '../../mages/pexels-negative-space-92904.jpg'
import tw from '../../mages/tw.png'
import fb from '../../mages/fb.png'
import ig from '../../mages/ig.png'
import share from '../../mages/share.png'
import info from '../../mages/info.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return <div className='land'>
        <div className='content'>
            <div className='land-first'>
                <h3>Welcome to</h3>
                <h1>SPENCER'S ACADEMY</h1>
                <p>login to</p>
                <Link to='courses'>GET STARTED</Link>
            </div>

            <div className='land-second'>
                <img className='back' src={backdrop} alt='' />
            </div>

            <h2>...learning is fun</h2>
        </div>
        
        <div className='foot'>
            <a href='/'><img src={tw} alt='' title='follow us on Twitter' /></a>
            <a href='/'><img src={fb} alt='' title='check our Facebook page' /></a>
            <a href='/'><img src={ig} title='follow us on Instagram' alt='' /></a>
            <a href='/'><img src={share} alt='' title='share this page' /></a>
            <a href='/'><img src={info} alt='' title='Info' /></a>
        </div>
    </div>

}

export default Home