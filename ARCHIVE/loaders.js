import { Spin } from "antd";
import React from "react";

export const ApexFullScreenLoader = () => {
  return (
    <Spin
      size="large"
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
      }}
    />
  );
};

export const ApexInsideModelLoader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
        height: "100%",
      }}
    >
      <Spin />
    </div>
  );
};
