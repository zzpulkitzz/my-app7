import React from "react"
import {useRouteError} from "react-router-dom"
export default function Error(){
    const error=useRouteError()
    console.log(error)
    return <h1>damn that was an error we faced {error.message}  </h1>
}