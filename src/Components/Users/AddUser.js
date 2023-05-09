import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();

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
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+user.age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
    }
    props.onAddUser(user);
    setUser({
      username: "",
      age: "",
    });
    console.log(user);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClickErrorHandler={errorHandler}
        />
      )}
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
              type="number"
              id="age"
              name="age"
              value={user.age}
              onChange={onChangeHandler}
            ></input>
          </label>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
