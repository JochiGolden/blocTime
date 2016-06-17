import React from "react";
import * as ReactRouter from "react-router";
var Link = ReactRouter.Link;
import MainContentWrapper from "./MainContentWrapper";
import Button from "./Button";
import Timer from "./Timer";

function newSession() {
  console.log(25);
}

function Home() {
  return (
    <MainContentWrapper>
      <Timer className="timer" totalTime={25} />
      <Button label="Pomodoro" action={newSession} />
    </MainContentWrapper>
  );
}

module.exports = Home;