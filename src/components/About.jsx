import { useState } from 'react'
import './about.css'
import {Link } from 'react-router-dom'
export default function About(){
    return <div className="about">
        ABOUT
        <Link to='/'>Home</Link>
    </div>
}