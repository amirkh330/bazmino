import ReactQueryProvider from "@/providers/reactQueryProvider/reactQueryProvider";
import RouterProvider from "./routerProvider/routerProvider";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider />
    </ReactQueryProvider>
  );
};

export default Providers;
