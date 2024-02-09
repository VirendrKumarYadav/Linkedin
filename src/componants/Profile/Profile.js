import React, { useState, useEffect, useMemo } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { getCollectionDetails } from "../../API/FireStore";
import PostCard from "../Element/PostCard/PostCard";
import { getPosts } from "../../API/FireStore";
import "../Profile/Profile.css";
import {uploadImage} from "../../API/UploadImage";
import UploadImage from "../Element/UploadImage/UploadImage";

const Profile = (prop) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [allStatus, setAllStatus] = useState([]);
   const [currentUserData, setCurrentUserData] = useState({});
   const [currentImage, setCurrentImage] = useState({});
   const [progress, setProgress] = useState(0);

   const onEdit = () => {
      prop.setEdit(true);
   };

   const getImage = (event) => {
     setCurrentImage(event.target.files[0]);
   };

   useEffect(() => {
     const fetchData = async () => {
       const posts = await getPosts();
       setAllStatus(posts);
     };
     fetchCollectionData();
     fetchData();
   }, [uploadImage]);

   const fetchCollectionData = async () => {
     try {
       const collectionName = "users";
       const collectionData = await getCollectionDetails(collectionName);
       setCurrentUserData(collectionData[0]);
     } catch (error) {
       console.error("Error fetching collection data:", error);
     }
   };

   const uploadImageCall = () => {
     uploadImage(
       currentImage,
       currentUserData?.id,
       setModalOpen,
       setProgress,
       setCurrentImage
     );
   };


  return (
    <div className="profile-card w-full flex justify-center items-center flex-col">
      {
        <UploadImage
          getImage={getImage}
          uploadImage={uploadImageCall}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          currentImage={currentImage}
          progress={progress}
        />
      }
      <div className="posts-card bg-white shadow-md p-6 rounded-lg mb-4 flex justify-center items-start flex-wrap w-4/5 max-lg:w-4/5">
        <div className="profile-info flex flex-col">
          <div className="edit-bt">
            <HiOutlinePencil
              className="edit-icons cursor-pointer"
              onClick={onEdit}
            />
          </div>
          <img
            className="profile-image"
            onClick={() => setModalOpen(true)}
            src={
               currentUserData?.imageLink
               }
            alt="profile-image"
          />

          <h3 className="userName">{currentUserData?.name}</h3>
          <p className="location">
            {Object.values(currentUserData).length === 0
              ? `${currentUserData.city}, ${currentUserData.country} `
              : `${currentUserData?.city}, ${currentUserData.country}`}
          </p>
          <a
            className="website"
            target="_blank"
            href={
              Object.values(currentUserData).length === 0
                ? `${currentUserData.website}`
                : currentUserData?.website
            }
          >
            {Object.values(currentUserData).length === 0
              ? `${currentUserData.website}`
              : currentUserData?.website}
          </a>
        </div>
        <div className="right-info">
          <p className="college">
            {Object.values(currentUserData).length === 0
              ? currentUserData.college
              : currentUserData?.college}
          </p>
          <p className="company">
            {Object.values(currentUserData).length === 0
              ? currentUserData.company
              : currentUserData?.company}
          </p>
        </div>
        <p className="about-me">{currentUserData?.about}</p>
        <p className="skills">
          <span className="skill-label">Skills</span>:&nbsp;
          {Object.values(currentUserData).length === 0
            ? currentUserData.skills
            : currentUserData?.skills}
        </p>
      </div>
      <div className="posts flex flex-col my-3 w-full justify-center items-center">
        {Array.isArray(allStatus) && allStatus.length > 0 ? (
          allStatus.map((posts) => <PostCard data={posts}></PostCard>)
        ) : (
          <p className=" font-bold text-xl text-center posts-card bg-white shadow-md p-6 rounded-lg mb-4 flex justify-center items-center flex-wrap w-4/5 max-lg:w-4/5">
            No posts available !
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
