import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <TwitterIcon className="sidebar--twitterIcon" />
      {/* サイドバーオプション */}
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      {/* サイドバーオプション */}
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      {/* サイドバーオプション */}
      <SidebarOption text="通知" Icon={MailOutlineIcon} />
      {/* サイドバーオプション */}
      <SidebarOption text="メッセージ" Icon={NotificationsNoneIcon} />
      {/* サイドバーオプション */}
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      {/* サイドバーオプション */}
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      {/* サイドバーオプション */}
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      {/* サイドバーオプション */}
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />

      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar--tweet">
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
