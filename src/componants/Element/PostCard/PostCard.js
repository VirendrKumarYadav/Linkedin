import React from 'react'
import '../PostCard/Post.css'

export default function PostCard(props) {
console.log(props.data.status);
  return (
    <div
      className="posts-card bg-white shadow-md p-6 rounded-lg mb-4 flex justify-center items-center "
      id={props.data.id}
    >
      <p className='status'>{props.data.status}</p>
      <span>{ props.data.timestamp}</span>
    </div>
  );
}


