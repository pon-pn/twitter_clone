import { Search } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId="1567694729953054724" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kasonanan"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="https://twitter.com/kasonanan"
          options={{ text: "React.js勉強中", via: "kasonanan" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
