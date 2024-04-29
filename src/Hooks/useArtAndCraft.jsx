import { useEffect, useState } from "react";

const useArtAndCraft = () => {
    const [isLoading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [sliceItem, setSliceItem] = useState([])
    const [toggle, setToggle] = useState(false)

    const refetch = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/artAndCraft')
            .then(res => res.json())
            .then(data => {
                // console.log('data data', data)
                setItems(data)
                setSliceItem(data.slice(0,6))
                setLoading(false)
            })
    },[toggle])
    
    return {isLoading, items, refetch, sliceItem}
};

export default useArtAndCraft;