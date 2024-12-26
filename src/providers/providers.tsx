import ReactQueryProvider from "@/Providers/ReactQueryProvider/reactQueryProvider";
import RouterProvider from "./RouterProvider/routerProvider";

const Providers = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider />
    </ReactQueryProvider>
  );
};

export default Providers;
