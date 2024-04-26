import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ArtAndCraft from "../Pages/ArtAndCraft/ArtAndCraft";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList/MyArtCraftList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/artAndCraft",
          element:<ArtAndCraft></ArtAndCraft>
        },
        {
          path:"/addCraftItem",
          element:<AddCraftItem></AddCraftItem>
        },
        {
          path:"/myArtCraftList",
          element:<MyArtCraftList></MyArtCraftList>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ],
    },
  ]);

  export default router;