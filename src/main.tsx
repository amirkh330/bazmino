import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import Providers from "@/providers/providers.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Providers />
    </ChakraProvider>
  </StrictMode>
);
