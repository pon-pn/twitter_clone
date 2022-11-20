import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import LikeButton from "./LikeButton";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post--avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post--body">
          <div className="post--header">
            <div className="post--headerText">
              <h3>{displayName}</h3>
              <span className="post--headerSpecial">
                <VerifiedUser className="post--badge" />@{username}
              </span>
            </div>
            <div className="post--headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} className="post--image" alt="" />
          <div className="post--footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            {/* <FavoriteBorder fontSize="small" /> */}
            <LikeButton />
            <PublishOutlined />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
