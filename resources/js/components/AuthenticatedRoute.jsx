import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroupIndex from './Home/GroupIndex';


const AuthenticatedRoute = () => {
  return (
    <Routes>
        <Route path="/Top" element={<GroupIndex />} />
    </Routes>
  )
}

export default AuthenticatedRoute