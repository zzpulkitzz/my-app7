import { useState } from 'react'
export default function Home(){
    console.log("hey")
    return <div className="binder">
        <main className='main'>
            <div className='text'>
                <h1 className='main_heading'>
                You got the travel plans, we got the travel vans.
                </h1>
                <p className='main_para'>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
            </div>
                <button className='button'>
                    Find your van
                </button>
        </main>
    </div>
}