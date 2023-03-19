import React from 'react'
import Home from './Components/Home/Home'
import Nav from './Components/Navigator/Nav'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Reset from './Components/Reset/Reset'
import Courses from './Components/Courses/Courses'
import NoPage from './Components/NoPage/NoPage'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <div className='app'>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='reset' element={<Reset />} />
                    <Route path='courses' element={<Courses />} /> 
                    <Route path='*' element={<NoPage />} /> 
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App