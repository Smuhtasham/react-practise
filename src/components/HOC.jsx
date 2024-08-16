import React from "react";

const HOC = (props) => {
  return (
    <>
      <div>
        <h4
          style={{ backgroundColor: "yellow", width: "200px", display: "flex" }}
        >
          <props.comp />
        </h4>
      </div>
    </>
  );
};

export default HOC;
