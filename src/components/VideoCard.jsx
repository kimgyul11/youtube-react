import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";
import Videos from "../pages/Videos";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  return (
    <li
      onClick={() => {
        navigate(`videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className="w-full rounded-xl"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
