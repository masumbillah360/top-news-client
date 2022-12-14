import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Main/Layout";
import About from "./Pages/About/About";
import Errorpage from "./Pages/Erropage/Errorpage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import FaltuMap from "./Pages/Map/Map";
import News from "./Pages/News/News";
import Registration from "./Pages/Registration/Registration";
import ViewNews from "./Pages/ViewNews/ViewNews";
import PrivateRout from "./PrivateRout/PrivateRout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/news/:id",
          loader: ({ params }) =>
            fetch(`https://top-news-server.vercel.app/news/${params.id}`),
          element: (
            <PrivateRout>
              <ViewNews></ViewNews>
            </PrivateRout>
          ),
        },
        {
          path: "/category/:id",
          loader: ({ params }) =>
            fetch(`https://top-news-server.vercel.app/cat/${params.id}`),
          element: <News></News>,
        },
        { path: "/about", element: <About></About> },
        { path: "/registration", element: <Registration></Registration> },
        { path: "/login", element: <Login></Login> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
