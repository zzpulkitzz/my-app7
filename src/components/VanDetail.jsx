import React from 'react';
import { useParams ,useLocation} from "react-router-dom"
import {Link} from 'react-router-dom'
export default function VanDetail(){
    const location=useLocation()
    console.log(location)
    const para=useParams()
    console.log(para)
    let Search=location.state?location.state.search : ""
    console.log(location.state.type)
    return <div className="wrap">
        <Link className='back' 
        to={`..?${Search}`}
         relative='path'>
            {Search? `Back to ${location.state.type} vans`:"← Back to all vans"} 
        </Link>
        <Link to="/Vans/:x/Payment">
    <div>hey this is the page for {para.x}</div></Link>
    </div>
} 