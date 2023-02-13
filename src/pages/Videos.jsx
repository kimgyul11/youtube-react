import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return <div>Videos {keyword ? `✨${keyword}` : `지금뜨는 핫트렌드!`}</div>;
}
