import { useState } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
export default function Home(){
    return <div className="home">
        <header className="head">
            <div className="name">
                #VANLIFE
            </div>
            <div className='nav-tab'>
            <div className="about">
                <Link className='link' to="/About">About</Link>
            </div>
                
            <div className="vans">
                <Link className='link' to="">Vans</Link>
            </div>
            </div>
        </header>
        <main className='main'>
            <div className='text'>
                <h1 className='main_heading'>
                You got the travel plans, we got the travel vans.
                </h1>
                <p className='main_para'>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
            </div>
                <button className='button'>
                    Find your van
                </button>
        </main>
        <footer className='foot'>
            <div className='credits'>
            © 2023 #VANLIFE
            </div>
        </footer>
    </div>
}