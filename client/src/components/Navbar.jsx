import React from "react";

export const Navbar = () => {
  return (
    <header>
      <p >        <img
          src="/logo.png"
          style={{ width: "60px", height: "40px"}}
        />RADHE FITNESS CARE </p>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="../../public/logo.png"
          style={{ width: "100px", height: "100px" }}
        />
        <p style={{ fontWeight: "bold"}}>RADHE FITNESS CARE </p>
      </div> */}
    </header>
  );
};
