import { useEffect, useState } from "react";
import useArtAndCraft from "../../Hooks/useArtAndCraft";

const Landscape = () => {

    const {items} = useArtAndCraft()
    // console.log(items)
    const [categoryItems , setCategoryItems ] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/landsCaps/${items?.subcategory}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategoryItems(data)
            })
    },[items])
    // console.log(categoryItems)
    return (
        <div>
            <h1>landsCape </h1>
        </div>
    );
};

export default Landscape;