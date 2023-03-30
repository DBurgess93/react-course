import React from 'react';
import { ChangeProfile } from "../components/ChangeProfile";
export const Profile = (props) => {
  return (
    <div>
      Profile for {props.username}
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};
