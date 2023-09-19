import { Outlet, useParams } from "react-router-dom"
import React from 'react';
import { useOutletContext } from "react-router-dom";
export default function Details() {
    const [data,changeData]=useOutletContext()
    if(data){
        return <div className='details'>
            <div>
            Name:{data.name}
        </div>
        <div>
            Category:{data.type}
        </div>
        <div>Description:{data.description}</div>
        <div>
            Visibility:Public
        </div>
        </div>
        
        
    }
    
}
