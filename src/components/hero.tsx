'use client';
import Image from "next/image";
import Navbar from "./navbar";
import { TypeAnimation } from "react-type-animation";
import { raleway } from "@/styles/fonts";
import { social_links } from "@/lib/data";


export default function Hero() {
    // TODO:: Add rotate animation on link sorrounding hero image
    return (
        
        <div className="container z-0 lg:max-w-6xl overflow-hidden mx-auto pt-28 sm:py-4 relative ">
            <div className="sm:px-16 flex flex-col lg:flex-row min-h-screen items-center sm:justify-center gap-12 lg:gap-0 backdrop-blur-3xl dark:backdrop-blur-3xl backdrop-filter dark:backdrop-filter bg-opacity-5 dark:bg-opacity-30">
                <div className="text-center md:basis-1/3 xl:basis-2/3 flex flex-col gap-2 items-center lg:text-left lg:items-start">
                    <h1 className={raleway.className}>
                        <span className="text-4xl font-bold dark:text-white text-dark-light">Hi,</span> <br />
                        <span className="text-5xl sm:text-6xl font-extrabold dark:text-white text-dark-light">I'm Gerald</span> <br />
                        <span className="text-5xl sm:text-6xl font-extrabold text-primary">Muvengei</span>
                    </h1>

                    <p className="my-4 font-bold text-slate-800 caret-primary dark:text-white">
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'I\'m a web developer',
                                1000,
                                'Frontend developer',
                                1000,
                                'Computer science developer',
                                1000,
                                'Passionate software engineer',
                                1000,
                            ]}
                            speed={50}
                            className="caret-primary"
                            style={{ fontSize: '22px' }}
                            repeat={Infinity}
                        />
                    </p>

                    <button className="btn btn-primary text-dark">
                        Resume
                        <Image
                            src="/download.svg"
                            alt="download"
                            className="text-dark"
                            width={24}
                            height={24}
                            priority
                        />
                    </button>
                </div>

                <div className="basis-1/3 flex flex-col  justify-center">
                    <Image
                        src="/hero.svg"
                        alt="download"
                        className="z-10 max-w-sm hidden sm:inline justify-center rounded-full overflow-hidden"
                        width={298}
                        height={320.78}
                        priority
                    />
                    <Image
                        src="/hero.svg"
                        alt="download"
                        className="z-10 max-w-sm inline sm:hidden justify-center rounded-full overflow-hidden"
                        width={268}
                        height={288.49}
                        priority
                    />
                    <div className="absolute -z-0 animated-rotate w-[300px] md:w-[340px] p-4 -mt-16 sm:mt-0 -ml-4" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 927 926.1"><path d="M898.7 157.1c56.3 102 16.6 249.3-26.1 379.8-42.8 130.5-88.3 244-184.8 314.3-96.5 70.4-243.5 97.6-380.4 51.7C170.5 856.7 43.9 737.5 10.2 595.3c-34-142.2 25-307.4 128.1-420C241.6 62.6 389.5 2.5 539.6.5 690-1.2 842.4 55.3 898.7 157.1z" fill="none" stroke="#00DC82" stroke-width="3" stroke-miterlimit="10" stroke-opacity="1"></path></svg></div>
                    <div className="flex flex-row gap-6 align-middle justify-center mt-8 sm:hidden">
                        {
                            social_links.map((link, index) => {
                                return <a key={index} href={link.link} target='blank'><Image
                                    src={link.iconPath}
                                    alt={link.title}
                                    className="py-4 fill-primary dark:fill-dark-light"
                                    width={38}
                                    height={38}
                                    priority
                                /></a>
                            })
                        }
                    </div>
                </div>

            </div>
            {/* <div className="absolute top-40 h-96 rounded-full max-w-md w-96 right-32 -z-10 bg-gradient-to-tr from-dark via-primary to-dark opacity-90">
            </div> */}
            <div className="absolute top-0 left-0 bottom-0 right-0 h-screen -z-10 bg-gradient-to-l from-dark-light via-primary to-dark-light opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ">
            </div>

        </div>
    )
}