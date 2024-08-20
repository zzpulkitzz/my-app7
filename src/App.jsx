import {RouterProvider,createRoutesFromElements,createBrowserRouter,BrowserRouter , Routes,Route, Link,redirect,defer} from 'react-router-dom'
import Navbar from './components/Navbar'
import './components/frontpage.css'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
import Payment from './components/Payment'
import Host from './components/Host'
import Dashboard from './components/Dashboard'
import Reviews from './components/Reviews'
import Income from './components/Income'
import Details from './components/Details'
import Photos from './components/Photos'
import Pricing from './components/Pricing'
import Myvans ,{loader as Myvansloader} from './components/Myvans'
import Myvan,{loader as Myvanloader} from './components/Myvan'
import Starwars from './components/Starwars'
import Error from './components/Error'
import Login ,{Loader as loader_login ,Action as loginAction} from './components/Login'
import getData from './components/GetData'





let count=0
async function Auth(pathname){ 
  let login=localStorage.getItem('login')==null?'false':localStorage.getItem('login')
  console.log(login)
  
  if(login=='false'){
    const response = redirect(`/Login?message=please login to continue&redirectTo=${pathname}`)
    response.body = true  // It's silly, but it works
    return response  
  }else{
    return null
  }
}
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
  <Route index element={<Home />}/>
  <Route path='/Starwars' element={<Starwars/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Login' loader={loader_login} action={loginAction} element={<Login/>}/>
  <Route path='/Vans'>

      <Route index element={<Vans/>} loader=
      {async ({request})=>{
        let url=new URL(request.url)
        let pathname=url.pathname
        let login=localStorage.getItem('login')==null?'false':localStorage.getItem('login')
        console.log(login)
        if(login=='false'){
          return await Auth(pathname)
        }else{
          let data=getData()
          return defer({dataKey:data}) 
        }
      }} errorElement={<Error/>}/>
      <Route path=':x' element={<VanDetail/>} />
      <Route path=':x/Payment' element={<Payment/>}/>                    
  </Route>

  <Route path='/Host' element={<Host/>}>
      <Route index loader={async({request})=>{
        let pathname=new URL(request.url).pathname
        return await Auth(pathname)
        }} 
        element={<Dashboard/>}/>

      <Route path='income' loader={async({request})=>{
        let pathname=new URL(request.url).pathname
        return await Auth(pathname)
        }} 
        element={<Income/>}/>

      <Route path='reviews' loader={async({request})=>{
        let pathname=new URL(request.url).pathname
        return await Auth(pathname)
        }} 
        element={<Reviews/>}/>

      <Route path='myvans' loader={Myvansloader} element={<Myvans/>}/>
      <Route path='myvans/:id' loader={Myvanloader} element={<Myvan/>}>
        
        <Route index loader={async({request})=>{
          let pathname=new URL(request.url).pathname
          return await Auth(pathname)
        }} 
        element={<Details/>}/>
       <Route path='pricing' loader={async({request})=>{
          let pathname=new URL(request.url).pathname
          return await Auth(pathname)
        }} 
        element={<Pricing/>}/>

        <Route path='photos' loader={async({request})=>{
          let pathname=new URL(request.url).pathname
          return await Auth(pathname)
        }} 
        element={<Photos/>}/>

      </Route>
  </Route>
  <Route path="*" element={<div>
    <h1>Sorry but the required path doesnt exist on the website </h1>
    <Link to='/'><h2>Return To Home</h2></Link>
  </div>}/>
</Route>
))
function App() {
  return <RouterProvider router={router } />
}

export default App
