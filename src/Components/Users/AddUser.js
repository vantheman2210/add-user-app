import React, { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  return (
    <form>
      <label>
        Name:
        <input></input>
      </label>
      <label>
        Age:
        <input></input>
      </label>
    </form>
  );
};

export default AddUser;
