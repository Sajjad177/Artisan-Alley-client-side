import { useLoaderData } from "react-router-dom";


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