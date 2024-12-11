import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#f2f5f9",
          width: "100%",
          height: "60px",
        }}
      >
        <Link to="/login">
          <Button colorPalette="green">Login</Button>
        </Link>
      </header>
    </div>
  );
};
