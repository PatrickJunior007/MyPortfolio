import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import './App.css';

//Components 
import Header from './components/Header';
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";

const Layout = () =>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
