import { RouterProvider } from "react-router";
import route from "./configs/routes";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
