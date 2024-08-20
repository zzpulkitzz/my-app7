import {NavLink,Navigate,useNavigate} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import React from 'react'
import Footer from './Footer'
import imageUrl from '/Users/pulkit/my-app7/src/image/avatar.png'
export default function Navbar(){
    const [check,change]=React.useState()
    
    const navigate = useNavigate();
    function onclick(){
        let pathname=window.location.pathname
        localStorage.clear()
        console.log(pathname)
        navigate(`/Login?message=login status cleared&redirectTo=${pathname}`)
    }
    let style={fontWeight: 'bold', textDecoration: 'underline', color: 'red'}
    return  <>
    <div className="ourroot">
    <header className='head'>
    <NavLink to="/" className="name">
    #VANLIFE
    </NavLink>
    <div className='nav-tab'>
    <div className="host">
        <NavLink className="link" style={({isActive})=>isActive ? style : null } to="/Host">Host</NavLink>
    </div>
    <div className="about">
        <NavLink className={({isActive})=>isActive ? "activeLink":"link" } style={({isActive})=>isActive ? style : null } to="/About">About</NavLink>
    </div>
    
    <div className="vans">
        <NavLink className={({isActive})=>isActive ? "activeLink":"link" } style={({isActive})=>isActive ? style : null } to="/Vans">Vans</NavLink>
    </div>
    <div className="login">
        <NavLink className="link avatar" style={({isActive})=>isActive ? style : null } to="/Login">
            <img className="avatar_image" src={imageUrl}/>
        </NavLink>
    </div>
    </div>
    </header>
    <div className="clear" onClick={onclick}>CLEAR</div>
    <Outlet/>
    <Footer/>
    </div>
    
    </>
}
