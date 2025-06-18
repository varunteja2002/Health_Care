import React from 'react'
import Styles from "./dasboard.module.css"
import DashboardOverview from './dashboard/DashBoardOverview'
import Calendarview from './dashboard/Calendarview'
import UpcomingSchedule from './dashboard/UpcomingSchedule'
import ActivityFeed from './dashboard/ActivityFeed'
const Dashboard = () => {
  return (
    <div className={Styles.dashboardmain}>
      <div>
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className={Styles.dashboardmiddle}>
        <Calendarview />
        <UpcomingSchedule />
      </div>
      
    </div>
  )
}

export default Dashboard
