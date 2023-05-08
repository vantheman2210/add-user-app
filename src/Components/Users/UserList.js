import React, { useState } from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
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
