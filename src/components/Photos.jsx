import { Outlet, useParams } from "react-router-dom"
import React from 'react';
export default function Photos() {
    let Id=useParams().id
    const [data,changeData]=React.useState()
    React.useEffect(()=>{
        fetch(`/api/vans/${Id}`)
        .then((data)=>data.json())
        .then((data)=>changeData(data.vans))
    },[0])
    if(data){
        return <div className="photos">
        <img src={data.imageUrl}/>
        </div>
    }
    return <div className="photos">
        LOADING
    </div>
}
