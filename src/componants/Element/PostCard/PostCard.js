import React from 'react'
import '../PostCard/Post.css'
import { BsStar,BsStarFill,BsChatDots, BsShare } from 'react-icons/bs';
// import {BsFillBalloonHeart } from 'react-icons/bi'

export default function PostCard(props) {
// console.log(props.data.status);
  return (
    <div
      className="posts-card bg-white shadow-md p-6 rounded-lg mb-4 flex flex-wrap justify-center items-start  w-3/5 max-lg:w-4/5"
      id={props.data.id}
    >
      <div className="py-2  flex flex-wrap flex-col">
        <p className="name">{props.data.username}</p>
        <span className="timestamp">{props.data.timestamp}</span>
      </div>

      <p className="status  p-4 flex flex-wrap">{props.data.status}</p>
      <div className="flex w-full justify-between items-center ">
        <BsStar className="cursor-pointer" />
        <BsChatDots className="cursor-pointer" />
        <BsShare className="cursor-pointer" />
      </div>
    </div>
  );
}


