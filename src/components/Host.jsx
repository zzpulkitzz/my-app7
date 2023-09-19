import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet,NavLink} from 'react-router-dom'
export default function Host(){
    let style={fontweight: 'bold',textDecoration: 'underline' ,color:'#161616'} 
    return <><div className="host_wrapper"><div className="host_navbar">
            <NavLink className="dashboard_link" style={({isActive})=>isActive ? style: null} to="/host" end >Dashboard</NavLink>
            <NavLink className="income_link" style={({isActive})=>isActive ? style: null} to="/Host/income" >Income</NavLink>
            <NavLink className="reviews_link" style={({isActive})=>isActive ? style: null} to="/Host/reviews" >Reviews</NavLink>
            <NavLink className="myvans_link" style={({isActive})=>isActive ? style: null} to="/Host/myvans" >Vans</NavLink>
    </div>
    </div>
    <div className='host_outlet'><Outlet/></div>
    </>
}
