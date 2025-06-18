import React, { Fragment } from 'react'
import Styles from "./headerBar.module.css"
import Logo from './Logo'
import SearchBar from './SearchBar'
import NotifyIcon from './NotifyIcon'
import UserProfile from './UserProfile'
import AddButton from './AddButton'
const HeaderBar = () => {
  return (
    <div id={Styles.header}>
      <Logo />
      <SearchBar/>
      <NotifyIcon/>
      <UserProfile/>
      <AddButton/>
    </div>
  )
}

export default HeaderBar
