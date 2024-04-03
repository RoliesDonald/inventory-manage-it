"use client"
import { Bolt, CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Banners() {
    const [hidden, setHidden] = useState(false)
    return (
        <div className={`${hidden ? "hidden" : "relative grid grid-cols-12 items-center py-6 px-12 bg-white gap-3 mb-5"}`}>
            {/* Big Icons */}
            <div className="col-span-2">
                <CreditCard className='w-16 h-16 text-blue-800' />
            </div>
            {/* Title Text */}
            <div className="col-span-6">
                <div className="mr-6 w-2/3">
                    <h2 className='font-bold text-2xl text-slate-600'>Start Accepting Online Payments</h2>
                    {/* Description Text */}
                    <p>Because bussiness start moving toward to online payments as they're easy, secure, and fast, Let's get in touch now</p>
                </div>
            </div>
            {/* Big Button */}
            <div className="col-span-2">
                <button className='bg-blue-500 h-full w-auto py-2 px-8 rounded-full text-slate-100 uppercase'>Enable</button>
            </div>
            {/* Close Icon */}
            <div className="absolute top-8 right-8">
                <button onClick={() => setHidden(true)}>  <X size={24} className='text-slate-500' /></button>
            </div>
        </div>
    )
}
