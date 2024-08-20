import {useLoaderData, useSearchParams,Form,redirect,useNavigation} from 'react-router-dom'
import {loginUser} from './api'
import React from 'react'
export function Loader({request}){
    let message=new URL(request.url).searchParams.get('message')
    return message
}
export async function Action({request}){
    const form_data= await request.formData()
    const email=form_data.get('email')
    const password=form_data.get('password')
    let message=await loginUser({email,password})
    console.log(message)
    let pathname=new URL(request.url).searchParams.get('redirectTo')==null? "/":new URL(request.url).searchParams.get('redirectTo')
    console.log(message)
    if(!message.ok){
        console.log("jey")
        localStorage.setItem('login','true')
        const response = redirect(`${pathname}`)
        response.body = true  // It's silly, but it works
        return response
    }else{
        return null}
}
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [button_state,set_button_state]=React.useState("idle")
    let navigation=useNavigation() 
    const [error,set_error]=React.useState(null)
    const message = useLoaderData()
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <div className='error'>{error}</div>
            {message && <h3 className="red">{message}</h3>}
            <Form method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={ navigation.state==="submitting"}>Log in</button>
            </Form>

        </div>
    )
}
