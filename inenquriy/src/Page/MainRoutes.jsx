import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Postenquiry from './Postenquiry'
import Enquriy from './Enquiry'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Postenquiry/>} />
            <Route path='/enquiry' element={<Enquriy/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes