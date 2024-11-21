import spinner from "../components/spinner";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState([]);

  return <div>Home</div>;
}

export default Home;
