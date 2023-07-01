import { skills } from "@/lib/data";
import Image from "next/image";
export default function Skills() {
    // TODO:: Add infinit scroll on skills section, hover effects, animations
    return (
        <div className="container lg:max-w-6xl overflow-hidden mx-auto py-4 text-dark-light dark:text-white">
            <div className="sm:px-16 ">
                <div className="p-4">
                    <h2 className=" text-4xl font-bold mb-4">Skills<span className="text-primary">_</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur voluptatem porro maxime earum, voluptatibus natus asperiores vitae quia fuga, unde molestias velit repudiandae quo. Fugit error repellat voluptate inventore.</p>
                    <div className="skills flex flex-wrap my-4">
                        {
                            skills.map((skill, index) => {
                                return (
                                    <div key={index + 'skills'} className="card bg-opacity-70 backdrop-blur shadow-sm bg-white dark:bg-dark m-2 border-1 border-transparent hover:ring-1 hover:ring-slate-700">
                                        <div className="card-body">
                                            <img alt={skill.title} src={skill.icon} className="max-h-10 max-w-10"/>
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