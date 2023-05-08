import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  console.log(props)

  if (props.userList.length === 0) return;
  return (
    <Card>
      <ul className={styles.users}>
        {props.userList.map((user, i) => {
          return (
            <li key={i}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
