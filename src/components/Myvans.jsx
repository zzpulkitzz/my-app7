import * as React from "react"  
import { Link, useLoaderData } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export async function loader(){
    console.log("yes")
    return await Auth()
}
export default function HostVans() {
    const [param,setParam]=useSearchParams();
    console.log(param.get('type'))
    let vans=useLoaderData()
    const hostVansEls = vans.map(van => (
        <Link
            to={`/Host/myvans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
            >
            <div className="frame" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section className="frame_container">
                            {hostVansEls}
                        </section>

                    ) : (loadingState? <h2>Loading...</h2>:null)
                }
            </div>
        </section>
    )
}