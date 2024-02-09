import React, { useState } from 'react'
import Header from './common/Header/Header'
import PostStatus from './common/PostStatus/PostStatus'
const Home = () => {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div className="home-container h-screen w-screen ">
      <Header />
      <PostStatus setCurrentUser={setCurrentUser} currentUser={currentUser} />
    </div>
  );
}

export default Home
