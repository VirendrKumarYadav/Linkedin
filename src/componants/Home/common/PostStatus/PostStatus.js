import React, { useState, useMemo, useEffect } from "react";
import "./postStatus.css";
import ModalComponant from "../Modal/ModalComponant";
import {
  postStatus,
  getPosts,
  getCurrentUserData,
} from "../../../../API/FireStore";
import PostCard from "../../../Element/PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../Element/getTimeStamp/getTimeCurrent";
import { getUniqueId } from "../../../Element/getTimeStamp/UniqueId";



const PostStatus = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [username, setUsername] = useState("");
  getCurrentUserData()
    .then((values) => {
      setUsername(values.name);
    })
    .catch((error) => {
      console.error(error);
    });

  const createPost = async () => {
    let obj = {
      status: status,
      timestamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
      username: username,
      id: getUniqueId(),
    };
    await postStatus(obj);
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setAllStatus(posts);
    };

    fetchData();
  }, []);

  // console.log(allStatus);

  return (
    <div className=" post-status flex justify-center items-center flex-col">
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

      <div className="posts flex flex-col my-3 w-full justify-center items-center">
        {Array.isArray(allStatus) && allStatus.length > 0 ? (
          allStatus.map((posts) => <PostCard data={posts}></PostCard>)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostStatus;
