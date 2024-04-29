import { useCallback, useEffect, useState } from "react";
import image1 from "../../assets/image/banner-1.jpg"
import image2 from "../../assets/image/banner-2.jpg"
import image3 from "../../assets/image/banner-3.jpg"
import image4 from "../../assets/image/banner-4.jpg"
import { Link } from "react-router-dom";


const Banner = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
            {img: image1, title: "Artisan Alley", des: "If you want beautiful and mind-blowing art you can explore us.  We have uncommon, good quality complete pictures."},
            {img: image2, title: "Artisan Alley", des: "If you want beautiful and mind-blowing art you can explore us.  We have uncommon, good quality complete pictures."}, 
            {img: image3, title: "Artisan Alley", des: "If you want beautiful and mind-blowing art you can explore us.  We have uncommon, good quality complete pictures."},
            {img: image4, title: "Artisan Alley", des: "If you want beautiful and mind-blowing art you can explore us.  We have uncommon, good quality complete pictures."}, 
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
            <div className="container m-auto lg:mb-32 mb-10">
            <div className="w-full lg:h-[90vh] h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
                style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
                {/* arrow */}
                
                {/* text container here */}
                <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                    <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                    <Link to='/register'>
                        <button className="text-xl mt-10 w-32 h-14 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">Register Now</button>
                    </Link>
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