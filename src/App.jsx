import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import SuspenseWrapper from "./layout/SuspenseWrapper";
import Loader from "./bits/Loader";
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
        element: (
          <SuspenseWrapper fallback={Loader}>
            <Landing />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/contact",
        element: (
          <SuspenseWrapper fallback={Loader}>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/register",
        element: (
          <SuspenseWrapper fallback={Loader}>
            <Register />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
function App() {
  return <></>;
}

export default App;
