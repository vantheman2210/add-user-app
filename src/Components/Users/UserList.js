import React from "react";
import styles from "./AddUser.module.css";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return <li id={user.username}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
