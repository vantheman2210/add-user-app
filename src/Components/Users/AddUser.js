import React, { useState } from "react";
import Card from "../UI/Card";
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
    e.target.reset();
    console.log(user);
  };

  return (
    <Card>
    <form onSubmit={onSubmitHandler} className="form-control">
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          name="username"
          onChange={onChangeHandler}
        ></input>
      </label>
      <label htmlFor="age">
        Age:
        <input
          type="text"
          id="age"
          name="age"
          onChange={onChangeHandler}
        ></input>
      </label>
      <button type="submit">Add user</button>
    </form>
    </Card>
  );
};

export default AddUser;
