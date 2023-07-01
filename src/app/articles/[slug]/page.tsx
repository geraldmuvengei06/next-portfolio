import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Article() {
    return (
        <main className="min-h-screen bg-green-500 bg-opacity-5  dark:bg-dark-light dark:bg-opacity-100">
            <div className="container z-0 lg:max-w-6xl overflow-hidden mx-auto pt-28 sm:py-4 relative ">
                <div className="container lg:max-w-6xl overflow-hidden mx-auto py-14 text-dark-light dark:text-white">
                    <div className="sm:px-16">
                        <div className="p-4">
                            <h2 className=" text-4xl font-bold mb-4">Articles<span className="text-primary">_</span></h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur voluptatem porro maxime earum, voluptatibus natus asperiores vitae quia fuga, unde molestias velit repudiandae quo. Fugit error repellat voluptate inventore.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}