import React, { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
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

    console.log(user);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Name:
        <input name="name" onChange={onChangeHandler}></input>
      </label>
      <label>
        Age:
        <input name="age" onChange={onChangeHandler}></input>
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default AddUser;
