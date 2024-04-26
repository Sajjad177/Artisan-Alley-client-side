import { useEffect, useState } from "react";

const useArtAndCraft = () => {

    const [items, setItems] = useState()
    const [toggle, setToggle] = useState()

    const refetch = () => {
        setToggle(toggle)
    }

    useEffect(() => {
        fetch('http://localhost:5000/artAndCraft')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    },[toggle])
    
    return { items, refetch}
};

export default useArtAndCraft;