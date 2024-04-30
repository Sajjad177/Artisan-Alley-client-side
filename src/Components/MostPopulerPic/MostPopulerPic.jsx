import { Slide } from "react-awesome-reveal";
import img1 from "../../assets/image/img-1.jpg"
import img2 from "../../assets/image/img-2.jpg"
import img3 from "../../assets/image/img-3.jpg"
import img4 from "../../assets/image/img-4.jpg"

const MostPopulerPic = () => {
    return (
        <div>
            <div className="my-10">
                    <h1 className="text-5xl text-center font-bold my-10"><Slide triggerOnce>
  <p>I will animate only the first time you see me</p>
</Slide></h1>
                <section className="py-6 bg-gray-300">
                    <div className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img1} />
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img2} />
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img3} />
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img4} />
                        </div>
                    </div>
                </section>
                </div>
        </div>
    );
};

export default MostPopulerPic;