import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });

  const onChangeHandler = function (e) {
    console.log(e.target.name);
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.username.trim() === 0 || user.age.trim().length === 0) {
      return;
    }
    if (user.age < 0) return;

    setUser({
      username: "",
      age: "",
    });
    console.log(user);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler} className="form-control">
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={onChangeHandler}
          ></input>
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="text"
            id="age"
            name="age"
            value={user.age}
            onChange={onChangeHandler}
          ></input>
        </label>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
