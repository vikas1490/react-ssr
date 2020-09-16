import React from "react";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          console.log("hi");
        }}
      >
        Click me
      </button>
    </>
  );
};

export default HomePage;
