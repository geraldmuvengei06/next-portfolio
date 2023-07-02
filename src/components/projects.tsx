import { projects } from "@/lib/data";
import Link from 'next/link'
export default function Projects() {
    return (
        <div className="container lg:max-w-6xl overflow-hidden mx-auto py-14 text-dark-light dark:text-white">
            <div className="sm:px-16">
                <div className="p-4">
                    <h2 className=" text-4xl font-bold mb-4">Projects<span className="text-primary">_</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur voluptatem porro maxime earum, voluptatibus natus asperiores vitae quia fuga, unde molestias velit repudiandae quo. Fugit error repellat voluptate inventore.</p> */}
                </div>
                <div className="projects flex flex-wrap my-4">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index + 'proj'} className="w-3/3 sm:w-2/4 md:w-1/3 xl:w-1/4 p-2">
                                    <div key={index + 'projects'} className="card shadow rounded-2xl bg-white dark:bg-dark m-1 bg-opacity-70 backdrop-blur hover:ring-1 hover:ring-slate-700">
                                        <figure>
                                            <img className="p-2 rounded-2xl" src={`${project.layout}?w=256`} alt={project.title} />
                                        </figure>
                                        <div className="card-body p-4">
                                            <Link href={project.link} target="_blank">
                                                <h3 className="font-bold text-2xl  hover:underline">{project.title}</h3>
                                            </Link>
                                            <p className="text-base text-slate-400"> {project.description}</p>
                                            <h3 className="font-semibold text-base">Technologies</h3>
                                            <div className="card-actions gap-1">
                                            {
                                                project?.technologies?.map((technology, index) => {
                                                    return (
                                                        <div key={index + 'technology'} className="m-1">
                                                                <img alt={technology.title} src={technology.icon} className="opacity-50 hover:opacity-100 grayscale hover:grayscale-0 max-h-4 sm:max-h-6"/>
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