import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const [itemsDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetch(`https://assigenment-server-ten.vercel.app/singleData/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItemDetails(data);
      });
  }, [id]);

  const {
    itemName,
    subcategory,
    customization,
    stockStatus,
    photo,
    time,
    price,
    rating,
    description,
  } = itemsDetails;

  return (
    <div>
      <Helmet>
        <title>Artisan Alley/ Details : {id}</title>
      </Helmet>
      <div className="container m-auto">
        <div className="border border-orange-50 my-36 lg:p-10 p-5 flex lg:flex-row  flex-col lg:gap-20 gap-10 rounded-lg shadow-lg">
          <div className="">
            <img
              src={photo}
              alt=""
              className="lg:w-96 md:w-96 lg:h-full rounded-lg"
            />
          </div>
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-2xl font-semibold">{itemName}</h1>
            <p className="text-lg text-gray-500">{description}</p>
            <p className="text-lg">
              <span className="font-semibold">Subcategory : </span>
              {subcategory}
            </p>
            <div className="flex lg:items-center text-xl lg:gap-10 gap-5 lg:flex-row md:flex-row flex-col">
              <h1 className="flex items-center gap-2">
                <span className="font-semibold">Customization :</span>{" "}
                {customization}
              </h1>
              <h2 className="flex items-center gap-2">
                <span className="font-semibold">Stock Status :</span>{" "}
                {stockStatus}
              </h2>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="1200"
              className="flex lg:flex-row md:flex-row flex-col lg:gap-20 md:gap-16 lg:items-center"
            >
              <h2>
                {" "}
                <span className="font-semibold text-lg">Time :</span> {time}
              </h2>

              <h2>
                {" "}
                <span className="font-semibold text-lg">Rating :</span> {rating}
              </h2>
            </div>
            <div>
              <h1 className="text-2xl flex items-center gap-4">
                <span className="font-bold text-3xl">Price :</span>
                <p className="text-red-600 font-semibold">{price}</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
