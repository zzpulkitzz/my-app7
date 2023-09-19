import { useState } from 'react'
import {Link} from 'react-router-dom'
import React from 'react'
export default function Vans(){
    const [data,changeData]=useState("")
    React.useEffect(()=>{
        fetch("/api/vans")
        .then((result)=>{
            return result.json()
        
        })
        .then((result)=>{
            console.log(result.vans)
            changeData(result.vans)
        })
    },[])
    if(data){
    let arrangedData=data.map((elem)=>{
        return <div key={elem.id} >
            <Link to={`/Vanlife/${elem.id}`}>
            <img src={elem.imageUrl}/>
            </Link>
            <div>
                {elem.name}
            </div>
            <div>
                ${elem.price}/day
            </div>
            <div>
                {elem.type}
            </div>
        </div>
    })
    return <div>
        {arrangedData}
    </div>}
}