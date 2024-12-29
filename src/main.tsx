import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "@/providers/providers";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Providers />
    </ChakraProvider>
  </StrictMode>
);
