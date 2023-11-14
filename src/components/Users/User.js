import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import star from '../../images/star.png';
import like from '../../images/like.png';
import view from '../../images/eye.png';
import heart from '../../images/heart.png';
import unlike from '../../images/unliked.png';

export const User = ({ userData }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [liked, setLiked] = useState({ postId: null, isLiked: false });
  const [isFollowing, setIsFollowing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLikeClick = (postId) => {
    const updatedPosts = userData.posts.map((post) => {
      if (post.id === postId) {
        const updatedLikes = liked.postId === postId && liked.isLiked ? post.likes - 1 : post.likes + 1;
        return { ...post, likes: updatedLikes };
      }
      return post;
    });

    userData.posts = updatedPosts;

    setLiked({ postId, isLiked: !liked.isLiked });
  };

  const handleFollowClick = () => {
    setIsFollowing(true);
    setShowConfetti(true);
  };

  useEffect(() => {
    const sumLikes = userData.posts.reduce((sum, post) => sum + post.likes, 0);
    setTotalLikes(sumLikes);
  }, [userData.posts, liked]);

  return (
    <>
    {showConfetti && (
        <Confetti
          recycle={false}
          gravity={0.8}
          wind={0}   
        />
      )}
    <div className="bg-gray-200 min-h-screen">
    
      <div className="h-80">
        <img src={userData.bgImage} className="w-full h-full object-cover" alt="Background" />
      </div>

      <div className="inset-0 flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center ml-2 sm:ml-0">
          <div className="relative z-20 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden" style={{ marginTop: '-1rem' }}>
            <img src={userData.profileImage} className="w-full h-full object-cover" alt="User Profile" />
          </div>
          <p className="text-xl font-bold text-black ml-2">{userData.name}</p>
          <div className="relative group">
            <img
              src={userData.diamondImage}
              className="w-6 h-6 mr-4 ml-2 transition duration-300 transform group-hover:scale-150 cursor-pointer"
              alt="Diamond Icon"
            />
            <div className="hidden group-hover:block absolute top-0 left-0 p-2 bg-white text-black rounded shadow-md -mt-12">
              Premium
            </div>
          </div>
          <div className="relative group">
            <img
              src={userData.tickImage}
              className="w-6 h-6 mr-4 transition duration-300 transform group-hover:scale-150 cursor-pointer"
              alt="Tick Icon"
            />
            <div className="hidden group-hover:block absolute top-0 left-0 p-2 bg-white text-black rounded shadow-md -mt-12">
              Verified
            </div>
          </div>
          </div>
         
          {!isFollowing && (
            <div className="flex items-center align-center space-x-4 mt-8 sm:mt-0">
            <button className="bg-blue-600 p-2 rounded-md mt-4 sm:mt-0 w-52 hover:scale-110 transform transition-transform duration-300" onClick={handleFollowClick}>
              <p className="text-xs text-white">Follow</p>
            </button>
          </div>
          )}
        

        {isFollowing && (
          <div className="flex items-center align-center space-x-4 mt-8 sm:mt-0">
            <button className="bg-gray-300 p-2 rounded-md mt-4 sm:mt-0 w-52">
              <p className="text-sm font-semibold text-gray-800">{userData.followers}</p>
              <p className="text-xs text-gray-600">Followers</p>
            </button>
            <button className="bg-yellow-400 p-2 rounded-md mt-4 sm:mt-0">
              <p className="text-sm font-semibold text-gray-800">{userData.following}</p>
              <p className="text-xs text-gray-600">Following</p>
            </button>
          </div>
        )}


        <div className="text-center w-full ">
          <p className='text-3xl mt-12'>{userData.designation}</p>
          <a href={`https://www.instagram.com/${userData.instagramUsername}`} className="text-blue-500 hover:underline block mt-2" target="_blank" rel="noopener noreferrer">
            {`instagram.com/${userData.instagramUsername}`}
          </a>

          <div className='flex items-center justify-around mt-6 ml-3 mr-3 sm:ml-0 '>
            <div className="flex items-center ">
              <img src={star} alt="Star Icon" className=" w-8 h-8  sm:w-12 sm:h-12" />
              <span className="ml-2 mr-4 ">{userData.stars}</span>
            </div>
            <div className="flex items-center ">
              <img src={like} alt="Like Icon" className=" w-8 h-8  sm:w-12 sm:h-12 " />
              <span className="ml-2 mr-4">{totalLikes}</span>
            </div>
            <div className="flex items-center ">
              <img src={view} alt="View Icon" className=" w-8 h-8  sm:w-12 sm:h-12" />
              <span className="ml-2 mr-4">{userData.views}</span>
            </div>
            <div className="flex items-center ">
              <img src={heart} alt="Heart Icon" className=" w-8 h-8  sm:w-12 sm:h-12" />
              <span className="ml-2 mr-4">{userData.hearts}</span>
            </div>
          </div>


          <div className="mt-8 text-left w-full">
            <p className="text-2xl font-bold text-blue-500 mb-4 ml-4 sm:ml-32">{userData.posts.length} Posts</p>

            {userData.posts.map((post, index) => (
              <div key={index} className="flex mb-4">
                <div className="w-full">
                  <div className="bg-white rounded-lg p-6 mb-6 ml-6 mr-6  sm:ml-24 sm:mr-24  postdiv">
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-bold text-xl">{post.title}</p>
                      <img
                        src={liked.postId === post.id && liked.isLiked ? like : unlike}
                        alt="Like Icon"
                        className={`like-button w-10 h-10 ${liked.postId === post.id && liked.isLiked ? 'liked' : ''}`}
                        onClick={() => handleLikeClick(post.id)}
                      />

                    </div>
                    <p>{post.description}</p>
                    <p className="text-right text-gray-600">
                      <span className='text-blue-700'>Thoughts</span> By {post.author}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-gray-500">{post.date}</p>
                      <p className="text-gray-500">{post.readTime}</p>
                      <p className="text-gray-500">{post.likes} Likes</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
      </>
   
  );
};
