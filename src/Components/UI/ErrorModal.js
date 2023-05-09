import React, { Fragment } from "react";
import { ReactDOM } from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClickErrorHandler}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClickErrorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClickErrorHandler}/>, document.getElementById('backdrop-root'))}
  </Fragment>;
};

export default ErrorModal;
