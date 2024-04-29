import blogImage1 from "../../assets/image/blog-image-1.jpg"
import blogImage2 from "../../assets/image/blog-image-2.jpg"
import blogImage3 from "../../assets/image/blog-image-3.jpg"
import blogImage4 from "../../assets/image/blog-image-4.jpg"

const Blogs = () => {
    return (
        <div>
            <div className="border">
                <section className="py-6 sm:py-12 bg-gray-200">
                    <div className="container p-6 mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Art And Craft Blogs</h2>
                            <p className="font-serif text-sm text-gray-400">Read the Blog learn more about art</p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <article className="cursor-pointer flex flex-col bg-white">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage1} />
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">How to use oil painting</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 1, 2020</span>
                                        <span>2.1K views</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col bg-white cursor-pointer">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage2} />
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Mysterious Picture</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 2, 2020</span>
                                        <span>2.2K views</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col bg-white cursor-pointer">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage3} />
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Creative ideas to made a picture</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 3, 2020</span>
                                        <span>2.3K views</span>
                                    </div>
                                </div>
                            </article>
                            <article className="cursor-pointer flex flex-col bg-white">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage4} />
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A beautiful House </h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 4, 2020</span>
                                        <span>2.4K views</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                </div>
        </div>
    );
};

export default Blogs;