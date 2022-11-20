import { FavoriteBorder } from "@mui/icons-material";
import React from "react";

function LikeButton() {
  return (
    <span className="likeButton">
      <FavoriteBorder fontSize="small" />
    </span>
  );
}

export default LikeButton;
