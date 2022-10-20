import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Main/Layout';
import Home from './Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Layout></Layout>, children: [
      {path:'/', element: <Home></Home>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
