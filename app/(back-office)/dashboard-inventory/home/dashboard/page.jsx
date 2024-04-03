import ActivitySummary from '@/components/dashboard/SummaryActivity'
import Banners from '@/components/others/Banners'
import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <Banners />
            <ActivitySummary />
        </div>
    )
}
