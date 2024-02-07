import React, { useState, useMemo, useEffect } from "react";
import "./postStatus.css";
import ModalComponant from "../Modal/ModalComponant";
import { postStatus, getPosts } from "../../../../API/FireStore";
import { all } from "axios";
import PostCard from "../../../Element/PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../Element/getTimeStamp/getTimeCurrent";

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  const createPost = async () => {
    let obj = {
      status: status,
      timestamp:getCurrentTimeStamp("LLL")
    }
    await postStatus(obj);
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setAllStatus(posts);
    };

    fetchData();
  }, []);

  console.log(allStatus);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="post-status-class mt-8 flex justify-center items-center">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a post
        </button>
      </div>
      {
        <ModalComponant
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          setStatus={setStatus}
          createPost={createPost}
        />
      }

      <div className="posts flex flex-col my-3">
        {Array.isArray(allStatus) && allStatus.length > 0 ? (
          allStatus.map((posts) => (
            <PostCard data={posts}></PostCard>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostStatus;
