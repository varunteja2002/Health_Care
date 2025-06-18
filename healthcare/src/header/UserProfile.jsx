import React from 'react'
import Styles from "./headerBar.module.css"
import { FaUserTie } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div id={Styles.user}>
            <span><FaUserTie /></span>
            <span>User</span>

    </div>
  )
}

export default UserProfile
