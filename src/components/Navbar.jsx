import {NavLink} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
export default function Navbar(){
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
    
    </div>
    </header>
    <Outlet/>
    <Footer/>
    </div>
    </>
}