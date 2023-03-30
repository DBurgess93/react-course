import React from 'react';
import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile for {username}
      <ChangeProfile />
    </div>
  );
};
