import { useCallback, useEffect, useState } from "react";
import image1 from "../../assets/image/banner-1.jpg"
import image2 from "../../assets/image/banner-2.jpg"
import image3 from "../../assets/image/banner-3.jpg"
import image4 from "../../assets/image/banner-4.jpg"

const Banner = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
            {img: image1, title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."},
            {img: image2, title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, 
            {img: image3, title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."},
            {img: image4, title: "Escape 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, 
        ];
        const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), [sliders.length]) ;
        const isSmallScreen = window.innerWidth <= 768;

        //! there every 3000s image has changing :
        useEffect(() => {
            const intervalId = setInterval(() => {
              nextSlider();
            }, 3000);
            return () => clearInterval(intervalId);
          }, [nextSlider]);

    return (
        <div>
            <div className="container m-auto mb-32">
            <div className="w-full lg:h-[90vh] sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
                style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
                {/* arrow */}
                
                {/* text container here */}
                <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                    <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
                {/* slider container */}
                <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                    <div className="ease-linear duration-300 flex gap-4 items-center"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <img key={inx} src={slide.img}
                                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                                currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                            } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title}/>))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;