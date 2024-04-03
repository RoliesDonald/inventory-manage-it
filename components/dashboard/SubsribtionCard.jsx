import Link from 'next/link'
import React from 'react'

export default function SubsribtionCard() {
    return (
        <div className='p-3 mt-6 mb-6 bg-slate-950 rounded-l-lg ml-5 '>
            <div className="border-b border-slate-500 ">
                <p className='text-xs pb-2 border-r-4 border-orange-500 text-center'>Your trial Plan's will expired in <br></br>
                    <span className='text-orange-300 text-xs '> 13 days</span>
                </p>
            </div>
            <div className="flex space-x-3 text-xs justify-center">
                <button className='p-2 pr-3 rounded-md border-slate-500 bg-rose-500 mt-3'>Change Plan</button>
                <Link href="#" className='p-2 bg-indigo-500 rounded-md mt-3'>Upgrade</Link>
            </div>
        </div>
    )
}
