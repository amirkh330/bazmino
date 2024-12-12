import { Button } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#f2f5f9",
          width: "100%",
          height: "60px",
          gap: "16px",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          padding: "2",
        }}
      >
        <Link to="/login">
          <Button colorScheme="green">Login</Button>
        </Link>
        <Link to="/hossein">
          <Button colorScheme="blue">Hossein</Button>
        </Link>
        <Link to="/">
          <Button colorScheme="gray">dashboard</Button>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
