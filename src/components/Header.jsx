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
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <CiYoutube className="text-4xl text-brand" />
        <h1 className="text-3xl ml-2 font-bold">Yultube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input //
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="검색어를 입력해보세요!"
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4">
          <FcSearch />
        </button>
      </form>
    </header>
  );
}
