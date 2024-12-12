import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import Providers from "@/providers/providers.tsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Providers />
    </ChakraProvider>
  </StrictMode>
);
