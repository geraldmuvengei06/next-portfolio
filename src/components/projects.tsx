import { projects } from "@/lib/data";
import Image from "next/image";
export default function Projects() {
    return (
        <div className="container lg:max-w-6xl overflow-hidden mx-auto py-4 text-dark-light dark:text-white">
            <div className="sm:px-16">
                <div className="p-4">
                    <h2 className=" text-4xl font-bold mb-4">Projects_</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur voluptatem porro maxime earum, voluptatibus natus asperiores vitae quia fuga, unde molestias velit repudiandae quo. Fugit error repellat voluptate inventore.</p>
                </div>
                <div className="projects flex flex-wrap my-4">
                    {
                        projects.map((project, index) => {
                            return (
                                <div className="w-3/3 sm:w-2/4 md:w-1/3 xl:w-1/4 p-2">
                                    <div key={index + 'projects'} className="card shadow rounded-2xl bg-white dark:bg-dark m-1 bg-opacity-70 backdrop-blur">
                                        <figure ><img className="p-2 rounded-2xl" src={project.layout} alt={project.title} /></figure>
                                        <div className="card-body p-4">
                                            <h3 className="font-bold text-2xl">{project.title}</h3>
                                            <p className="text-base"> {project.description}</p>
                                            <h3 className="font-semibold text-xl">Technologies</h3>
                                            <div className="card-actions gap-1">
                                            {
                                                project?.technologies?.map((technology, index) => {
                                                    return (
                                                        <div key={index + 'technology'} className="m-1">
                                                                <img alt={technology.title} src={technology.icon} className="opacity-50 hover:opacity-100 grayscale hover:grayscale-0 max-h-6 sm:max-h-8"/>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}