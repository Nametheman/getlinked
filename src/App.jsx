import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Landing from "./pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);
function App() {
  return <></>;
}

export default App;
