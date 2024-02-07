import React, { useState, useEffect } from "react";
import Header from "../Home/common/Header/Header";
import { HiOutlinePencil } from "react-icons/hi";
// import FileUploadModal from "./FileUploadModal";
// import PostsCard from "./PostsCard";
import PostCard from "../Element/PostCard/PostCard";
import { getPosts } from "../../API/FireStore";

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [allStatus, setAllStatus] = useState([]);
  const onEdit = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setAllStatus(posts);
    };

    fetchData();
  }, []);

  return (
    <div className="profile-card w-full flex justify-center items-center flex-col">
      {
        //       <FileUploadModal
        // modalOpen={modalOpen}
        // setModalOpen={setModalOpen}
        //   />
      }
      <div className=" posts-card bg-white shadow-md p-6 rounded-lg mb-4 flex justify-center items-start flex-wrap w-4/5 max-lg:w-4/5">
        {
          <div className="edit-btn">
            <HiOutlinePencil className="edit-icon" onClick={onEdit} />
          </div>
        }
        <div className="profile-info">
          <img
            className="profile-image"
            onClick={() => setModalOpen(true)}
            src={""}
            alt="profile-image"
          />

          <h3 className="userName">{}</h3>
        </div>
        <p className="about-me">{}</p>
      </div>
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

export default Profile;
