'use client'
import { skills } from "@/lib/data";
import Image from "next/image";
export default function Skills() {
    // TODO:: Add infinit scroll on skills section, hover effects, animations
    return (
        <div className="container lg:max-w-6xl overflow-hidden mx-auto py-4 text-dark-light dark:text-white">
            <div className="sm:px-16 ">
                <div className="p-4">
                    <h2 className=" text-4xl font-bold mb-4">Skills<span className="text-primary">_</span></h2>
                    <p>Here are some of the skills that I have obtained and worked with over my three year software development experience.</p>
                    <div className="skills flex flex-wrap my-4">
                        {
                            skills.map((skill, index) => {
                                return (
                                    // <div key={index + 'skills'} className="card w-28 h-28 bg-opacity-70 backdrop-blur shadow-sm bg-white dark:bg-dark m-2 border-1 border-transparent hover:ring-1 hover:ring-slate-700">
                                    //     <div className="max-w-18 max-h-18  p-0">
                                    //         <img alt={skill?.title} src={skill?.icon} className="object-contain"/>
                                    //     </div>
                                    //     <div className="actions gap-1 text-center">
                                    //         <small className="text-xs">{skill?.title}</small>
                                    //     </div>
                                    // </div>

                                    <div key={index + 'skills'}  className="card p-2 w-32 h-32 bg-opacity-70 backdrop-blur shadow-sm bg-white dark:bg-dark m-2  border-transparent hover:ring-1 hover:ring-slate-700">
                                        <div className="flex flex-col items-center justify-around ">
                                            <img className="w-20 h-20 mb-2 object-contain" src={skill?.icon} alt={skill?.title} />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill?.title}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
