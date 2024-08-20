import { useState } from 'react'
import {Link,useSearchParams,useLoaderData,Await} from 'react-router-dom'
import React from 'react'

export default function Vans(){
    function onclick(){
        setclick((click)=>!(click))
    }
    const [click,setclick]=useState(false)
    const [loadingState,changeLoadingState]=useState(false)
    const [errState,changeErrState]=useState({})
    const [param,setParam]=useSearchParams("")
    let vanType=param.get("type")
    const data=useLoaderData()
    console.log(data)
     
    return <div className='vans_page_wrapper'>
        <div className='filter'>
            <button className={param==""? "clear_off":"clear"} onClick={()=> setParam("")}>Clear</button>
            <div className="sort">SORT
            <button className={click===true?'vans_button':'vans_button_off'} onClick={onclick}>
            ▾
            </button>
            </div>
        </div>
        <div className='custom_wrap'>
        <div className='vans_wrap'>
            
        <React.Suspense>
        <Await fallback={<h1>Just a minute</h1>} resolve={data.dataKey}>
        {(data)=>{
        let displayData= data.filter((elem)=>vanType?elem.type===vanType:true)
        let arrangedData=displayData.map((elem)=>{
            return <div className='vans_frame' key={elem.id} >
                <Link to={elem.id} state={{search:param.toString(),type:elem.type}} >
                <img src={elem.imageUrl}/>
                </Link>
                <span>
                    {elem.name}
                </span>
                <span> 
                    ${elem.price}/day
                </span>
                <span>
                    {elem.type}
                </span>
                </div>
                })
            return arrangedData
            }}
        </Await>
            </React.Suspense>
        </div>

        <div className={click===true?'drop-down':'drop-down-off'}>

            <button 
            onClick={()=>setParam("")} 
            className='all'>All
            </button>

            <button onClick={()=>setParam({type:'rugged'})}  
            className={vanType=="rugged"?"rugged selected":"rugged"} 
            >Rugged
            </button>

            <button 
            onClick={()=>setParam({type:'luxury'})}
            className={vanType=="luxury"?"luxury selected":"luxury"}>
                Luxury
            </button>

            <button 
            onClick={()=>setParam({type:'simple'})}
            className={vanType=="simple"?"simple selected":"simple"}
            >Simple
            </button>

        </div>
        </div>
    </div>
    
    
    
    }
    