// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = stuffprop => {
  // Add state for the comments

  console.log("commentsProps", stuffprop.comments);
  const [comments] = useState(stuffprop.comments);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
       {comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />;
      })}
      <CommentInput />
    </div>
  );
};
export default CommentSection;