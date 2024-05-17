import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
//INTERNAL IMPRT
import { MainShareLink, MainSocialShare } from "./index";
import { shortenAddress } from "../../../utils/utils";

const MainTextPost = ({
  post,
  LIKE_POST,
  userAddress,
  DELETE_POST,
  setOpenComment,
  setCommentPostID,
  setAllPostComments,
}) => {
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0 new_margin">
      <div class="card-body p-0 d-flex">
        <figure class="avatar me-3 m-0">
          <img
            src={`images/${
              post.author.toLowerCase() == userAddress ? "you" : "user"
            }.png`}
            alt="image"
            class="shadow-sm rounded-circle w45"
          />
        </figure>
        <h4 class="fw-700 text-grey-900 font-xssss mt-1">
          {shortenAddress(post.author)}
          <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            {new Date(post.timeCreated * 1000).toDateString()}
          </span>
        </h4>
        <a
          href="#"
          class="ms-auto"
          id="dropdownMenu6"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class=" text-grey-900 btn-round-md bg-greylight font-xss">
            <BsThreeDots />
          </i>
        </a>
        <MainShareLink
          userAddress={userAddress}
          author={post.author}
          DELETE_POST={DELETE_POST}
          postID={post.postID}
        />
      </div>
      <div class="card-body p-0 me-lg-5">
        <p class="fw-500 text-grey-500 lh-26 font-xssss w-100">
          {post.postDescription}
        </p>
      </div>
      <div class="card-body d-flex p-0">
        <a
          onClick={() => LIKE_POST(post.postID)}
          class="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
        >
          <i class=" text-white bg-primary-gradiant me-1 btn-round-xs font-xss">
            <BiLike />
          </i>
          <i class=" text-white bg-red-gradiant me-2 btn-round-xs font-xss">
            <AiOutlineHeart />
          </i>
          {post.likes} Like
        </a>
        {/* <div class="emoji-wrap">
          <ul class="emojis list-inline mb-0">
            <li class="emoji list-inline-item">
              <i class="em em---1"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-angry"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-anguished"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-astonished"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-blush"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-clap"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-cry"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-full_moon_with_face"></i>
            </li>
          </ul>
        </div> */}
        <a
          onClick={() => (
            setOpenComment(true),
            setCommentPostID(post.postID),
            setAllPostComments(post.comments)
          )}
          class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <i class=" text-dark text-grey-900 btn-round-sm font-lg">
            <FaRegComment />
          </i>
          <span class="d-none-xss">{post.comments.length} Comment</span>
        </a>
        <a
          href="#"
          id="dropdownMenu31"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <i class=" text-grey-900 text-dark btn-round-sm font-lg">
            <AiOutlineShareAlt />
          </i>
          <span class="d-none-xs">Share</span>
        </a>

        <MainSocialShare postID={post.postID} />
      </div>
    </div>
  );
};

export default MainTextPost;
