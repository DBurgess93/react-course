import React from 'react';
import { useContext } from "react";
import { AppContext } from "../App";
export const Home = (props) => {
  const { username } = useContext(AppContext);
  return <h1>Homepage for: {username}</h1>;
};
