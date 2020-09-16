import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          console.log("hi");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default AboutPage;
