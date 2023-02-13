import React, { useEffect, useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { FcSearch } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header>
      <Link to="/">
        <CiYoutube />
        <h1>YULTUBE</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input //
          type="text"
          placeholder="검색어를 입력해보세요!"
          value={text}
          onChange={handleChange}
        />
        <button>
          <FcSearch />
        </button>
      </form>
    </header>
  );
}
