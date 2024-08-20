import React from 'react';
import { Outlet, useParams ,useLoaderData} from "react-router-dom"
import {Link,NavLink} from 'react-router-dom'
import {getDataDetail} from './GetData'
import getData from './GetData';
export function loader({params}){
    console.log(params)
    return getDataDetail(params.id)
}
export default function Myvan(){
    const data=useLoaderData()
    const para=useParams()
    let style={textDecoration:'dashed' , color:'black'}
    let id=para.id
        return <div className="myvan">
        <Link className='back' to='..' relative='path'>
            ← Back to all vans 
        </Link>
        <div className="myvan_card">
            <img src={data.imageUrl}/>
            <div className="myvan_card_info">
                <div className='van_type'>
                    {data.type}
                </div>
                <div>
                    {data.name}
                </div>
                <div>
                    ${data.price}.day
                </div>
            </div>
        </div>
        <div className='van_details_options'>
            <NavLink className="van_details_options_link"
                to={`/Host/myvans/${id}`}
                end 
                style={({isActive})=>isActive?style:null}
            >
                Details
            </NavLink>

            <NavLink 
                className="van_details_options_link"
                to={`/Host/myvans/${id}/pricing`}
                style={({isActive})=>isActive?style:null}
            >
                Pricing
            </NavLink>
            
            <NavLink 
                className="van_details_options_link" 
                to={`/Host/myvans/${id}/photos`}
                style={({isActive})=>isActive?style:null}
            >
                Photos
            
            </NavLink>
        </div>
        <Outlet context={{data}}/>
    </div>
    }
    

