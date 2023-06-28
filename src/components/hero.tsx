'use client';
import Image from "next/image";
import Navbar from "./navbar";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (

        <div className="container lg:max-w-6xl overflow-hidden mx-auto pt-28 sm:py-4">
            <div className="sm:px-16 flex flex-col lg:flex-row min-h-screen items-center sm:justify-center gap-12 lg:gap-0">
                <div className="text-center md:basis-1/3 xl:basis-2/3 flex flex-col gap-2 items-center lg:text-left lg:items-start">
                    <h1 className="">
                        <span className="text-4xl font-bold dark:text-white text-dark-light">Hi,</span> <br />
                        <span className="text-5xl font-extrabold dark:text-white text-dark-light">I'm Gerald</span> <br />
                        <span className="text-5xl font-extrabold text-primary">Muvengei</span>
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
                            width={38}
                            height={38}
                            priority
                        />
                    </button>
                </div>

                <div className="basis-1/3 flex justify-center">
                    <Image
                        src="/hero-1.svg"
                        alt="download"
                        className="max-w-sm hidden sm:inline justify-center"
                        width={382}
                        height={411.203}
                        priority
                    />
                    <Image
                        src="/hero-1.svg"
                        alt="download"
                        className="max-w-sm inline sm:hidden justify-center"
                        width={332.464}
                        height={341.81}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}