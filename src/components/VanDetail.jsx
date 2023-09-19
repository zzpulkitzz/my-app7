import React from 'react';
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
export default function VanDetail(){
    const para=useParams()
    console.log(para)
    return <Link to="/Vanlife/:x/Payment">
    <div>hey this is the page for {para.x}</div></Link>
} 