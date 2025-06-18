import './App.css'

import React from 'react'
import HeaderBar from './header/HeaderBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './sidebar/Dashboard'
import History from './sidebar/History'
import Calender from './sidebar/Calender'
import Appointmnets from './sidebar/Appointmnets'
import Statics from './sidebar/Statics'
import Tests from './sidebar/Test'
import Chat from './sidebar/Chat'
import Support from './sidebar/Support'
import Setting from './sidebar/Setting'

const App = () => {
  return (
    <BrowserRouter>
    <HeaderBar/>
    <div className='appcontainer'>
      <Sidebar />
        <main className='maincontainer'>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard"/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/calendar' element={<Calender/>}/>
            <Route path='/appointments' element={<Appointmnets/>}/>
            <Route path='/statics' element={<Statics/>}/>
            <Route path='/tests' element={<Tests/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/settings' element={<Setting/>}/>
          </Routes>
        </main>
    </div>
    </BrowserRouter>
  )
}

export default App

