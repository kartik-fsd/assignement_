import React from "react";
import { Gift } from "lucide-react";

const TopBanner = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#ff4444",
        padding: "8px 0",
        fontSize: "12px",
        fontWeight: "400",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Left Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          paddingLeft: "20px",
        }}
      >
        <Gift size={14} color="#ff4444" />
        <span>Lorem Ipsum dolor</span>
      </div>

      {/* Center Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Gift size={14} color="#ff4444" />
        <span>Lorem Ipsum dolor</span>
      </div>

      {/* Right Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          paddingRight: "20px",
        }}
      >
        <Gift size={14} color="#ff4444" />
        <span>Lorem Ipsum dolor</span>
      </div>
    </div>
  );
};

export default TopBanner;
