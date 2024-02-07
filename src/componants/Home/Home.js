import React from 'react'
import Header from './common/Header'
import PostStatus from './common/PostStatus/PostStatus'
const Home = () => {

  return (
    <div className='home-container h-screen w-screen'>
      <Header />
       <PostStatus/> 
    </div>
  )
}

export default Home
