import Styles from "./headerBar.module.css"
import { IoNotifications } from "react-icons/io5";
import React from 'react'

const NotifyIcon = () => {
  return (
    <div id={Styles.notif}>
      <IoNotifications id={Styles.notifIcon}/>
    </div>
  )
}

export default NotifyIcon
