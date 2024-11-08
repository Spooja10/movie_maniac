import React from 'react'

import Fire from './assets/fire.png'
import Star from './assets/star.png'
import Love from './assets/love.png'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Movielist from './components/Movielist/Movielist';

const App = () => {
  return (
    <div className='app'>
      <Navbar />  
     
      <Movielist type="popular" title="Popular" emoji={Fire}/>
      <Movielist type="top_rated" title="Top Rated" emoji={Star}/>
      <Movielist type="upcoming" title="Upcoming" emoji={Love}/>
    </div>
  )
}

export default App;