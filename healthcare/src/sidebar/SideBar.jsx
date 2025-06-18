import React from 'react';
import Styles from "./sidebar.module.css";
import { Link } from 'react-router-dom';
import Image from "/src/sidebar/dashboard/humanbody.jpg"

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
        <h2 className={Styles.sidebarheading}>General</h2>
        <nav className={Styles.sidebarnav}>
          <Link to="dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="appointments">Appointments</Link>
          <Link to="/statics">Statics</Link>
          <Link to="/tests">Tests</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/support">Support</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>
  );
}

export default Sidebar;