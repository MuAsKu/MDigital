import React from "react";

export default function CustomBtn() {
  return (
    <div
      style={{
        display: "flex",
        height: "38px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "24px" }}>Overview</p>
      <button
        style={{
          backgroundColor: "#724BF2",
          borderRadius: "12px",
          border: "none",
          color: "white",
          width: "13%",
          height: "38px",
        }}
      >
        Customize
      </button>
    </div>
  );
}
