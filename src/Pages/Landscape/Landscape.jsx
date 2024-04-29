// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

// import { useEffect, useState } from "react";
// import useArtAndCraft from "../../Hooks/useArtAndCraft";


const Landscape = () => {
     
    const loadedData = useLoaderData()
    console.log(loadedData)
   

    return (
        <div>
            <h1>landsCape </h1>
        </div>
    );
};

export default Landscape;