import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home/home";
import SignUp from "./pages/sign-up/sign-up";
import SignIn from "./pages/sign-in/sign-in";
import Feed from "./pages/feed/feed";
import Post from "./pages/post/post";
import Error from "./pages/error/error";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/feed" element={<Feed />}/>
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}