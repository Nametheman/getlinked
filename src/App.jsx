import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return <></>;
}

export default App;
