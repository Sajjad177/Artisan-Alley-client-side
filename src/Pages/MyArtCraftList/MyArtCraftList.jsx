import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyArtCraftListCard from "../../Components/MyArtCraftListCard/MyArtCraftListCard";



const MyArtCraftList = () => {
    
    const {user} = useAuth();
    console.log(user)
    const [craftItems, setCraftItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myCraftItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCraftItems(data)
                console.log(data)
            })


    }, [user])

    return (
        <div className="">
            {
                craftItems?.map(craftItem => 
                <MyArtCraftListCard 
                key={craftItem._id}
                craftItem = {craftItem}
                craftItems = {craftItems}
                setCraftItems= {setCraftItems}
                >
                </MyArtCraftListCard>)
            }
        </div>
    );
};

export default MyArtCraftList;