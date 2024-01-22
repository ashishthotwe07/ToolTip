import React, { useState } from "react";
import "./Main.css";

export default function Main({ direction }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <>
      <div className="custom-tooltip-container">
        <button
          className="HoverButton"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover over me
        </button>

        {isTooltipVisible && (
          <div className={`custom-tooltip ${direction}`}>
            Thanks for Hoverring! I'm a Tooltip
          </div>
        )}
      </div>
    </>
  );
}
