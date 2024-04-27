import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ArtAndCraft from "../Pages/ArtAndCraft/ArtAndCraft";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList/MyArtCraftList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Details from "../Components/Details/Details";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import Landscape from "../Pages/Landscape/Landscape";
import PortraitDrawing from "../Pages/PortraitDrawing/PortraitDrawing";
import Oilpainting from "../Pages/OilPainting/OilPainting";
import CharcoalSketching from "../Pages/CharcoalSketching/CharcoalSketching";
import CartoonDrawing from "../Pages/CartoonDrawing/CartoonDrawing";
import WaterColor from "../Pages/WaterColor/WaterColor";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
        },
        {
          path:"/details",
          element:<Details></Details>
        },
        {
          path:"/update/:id",
          element:<UpdateItem></UpdateItem>,
          loader :({params}) => fetch(`http://localhost:5000/artAndCraft/${params.id}`)
        },
        {
          path:'/landscape',
          element:<Landscape></Landscape>
        },
        {
          path:'/portraitDrawing',
          element:<PortraitDrawing></PortraitDrawing>
        },
        {
          path:'/waterColor',
          element:<WaterColor></WaterColor>
        },
        {
          path:'/oilPainting',
          element:<Oilpainting></Oilpainting>
        },
        {
          path:'/charcoalSketching',
          element:<CharcoalSketching></CharcoalSketching>
        },
        {
          path:'/cartoonDrawing',
          element:<CartoonDrawing></CartoonDrawing>
        },
      ],
    },
  ]);

  export default router;