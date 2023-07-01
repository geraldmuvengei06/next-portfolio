import { social_links } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div className="container overflow-hidden min-w-full pt-10 pb-16  text-dark-light dark:text-white bg-green-500 bg-opacity-5  dark:bg-dark-light dark:bg-opacity-100">
                <div className="sm:px-16">
                    <div className="p-4">
                    <div className="menu-large sm:flex flex-row justify-between items-center pb-5 border-b-2 border-b-slate-200 dark:border-b-slate-600">
                            <Image
                                src="/logo.svg"
                                alt="Gerald Muvengei"
                                // className="dark:invert"
                                width={252}
                                height={56}
                                priority
                            />
                            <div className="flex flex-row gap-3 mt-4 sm:mt-0">
                                {
                                    social_links.map((link, index) => {
                                        return (
                                            <a href={link.link} key={index + 'link'} className="contact-item border-b-2 border-b-transparent hover:text-primary hover:border-b-2 hover:border-b-primary">{ link.title }</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        &copy; 2023 <b className="text-primary px-1">Gerald Muvengei </b> All rights reserved.
                    </div>
                </div>
            </div>

        </div>
    )
}