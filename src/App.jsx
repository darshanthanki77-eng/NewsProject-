import React from 'react'
import Navbar from './components/Navbar'
import { Links, Route, Router, Routes } from 'react-router-dom'
import NewsItems from './components/NewsItems'
import News from './components/News'
const App = () => {
  const pageSize = 10

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<News pageSize={pageSize} country='in' category='general' />} />
        <Route path='/health' element={<News pageSize={pageSize} country='in' category='health' />} />
        <Route path='/entertainment' element={<News pageSize={pageSize} country='in' category='entertainment' />} />
        <Route path='/general' element={<News pageSize={pageSize} country='in' category='general' />} />
        <Route path='/business' element={<News pageSize={pageSize} country='in' category='business' />} />
        <Route path='/science' element={<News pageSize={pageSize} country='in' category='science' />} />
        <Route path='/Sports' element={<News pageSize={pageSize} country='in' category='sports' />} />
        <Route path='/technologia' element={<News pageSize={pageSize} country='in' category='technology' />} />
      </Routes>




    </div>

  )
}

export default App