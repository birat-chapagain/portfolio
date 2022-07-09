import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: "3px",
        border: "1px solid black",
        color: "black",
        padding: "0.5em 1em",
        cursor: "pointer",
        fontSize: "1.1em",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
