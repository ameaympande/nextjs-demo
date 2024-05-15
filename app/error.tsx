"use client";
import React from "react";

type Props = {
  error: Error;
  reset: () => void;
};
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error ", error);
  return (
    <>
      <div>An unexpected error occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
