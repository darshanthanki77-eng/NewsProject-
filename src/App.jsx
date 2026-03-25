import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Links, Route, Router, Routes } from 'react-router-dom'
import NewsItems from './components/NewsItems'
import News from './components/News'
import Loader from 'react-top-loading-bar'
const App = () => {
  const pageSize = 10
const [progress,setProgress] = useState(0)
  return (

    <div>
      <Navbar />
      <Loader color='#89292B' progress={progress} />

      
      <Routes>
        <Route path='/' element={<News pageSize={pageSize} country='in' category='general' setProgress={setProgress}/>} />
        <Route path='/health' element={<News pageSize={pageSize} country='in' category='health' setProgress={setProgress}/>} />
        <Route path='/entertainment' element={<News pageSize={pageSize} country='in' category='entertainment'setProgress={setProgress} />} />
        <Route path='/general' element={<News pageSize={pageSize} country='in' category='general' setProgress={setProgress}/>} />
        <Route path='/business' element={<News pageSize={pageSize} country='in' category='business' setProgress={setProgress}/>} />
        <Route path='/science' element={<News pageSize={pageSize} country='in' category='science' setProgress={setProgress}/>} />
        <Route path='/Sports' element={<News pageSize={pageSize} country='in' category='sports' setProgress={setProgress}/>} />
        <Route path='/technologia' element={<News pageSize={pageSize} country='in' category='technology' setProgress={setProgress}/>} />
      </Routes>




    </div>

  )
}

export default App