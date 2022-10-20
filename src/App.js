import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Main/Layout";
import About from "./Pages/About/About";
import Errorpage from "./Pages/Erropage/Errorpage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import News from "./Pages/News/News";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/news", element: <News></News> },
        { path: "/category/:id",
        loader: ({params})=> fetch(`http://localhost:5000/cat/${params.id}`),
        element: <News></News> },
        { path: "/about", element: <About></About> },
      ],
    },
    {path: '/login', element: <Login></Login>},
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
