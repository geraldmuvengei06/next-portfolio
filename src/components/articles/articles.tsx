'use client';
import { useEffect, useState } from "react"
import { Article, ArticlesService } from "./articles.service"
import Link from "next/link";


export default function Articles() {

    let [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            let res = await (new ArticlesService).getArticles()
            setArticles(res)
        }
        fetchArticles()
    }, [])

    return (
        <div className="container lg:max-w-6xl overflow-hidden mx-auto py-14 text-dark-light dark:text-white">
            <div className="sm:px-16">
                <div className="p-4">
                    <h2 className=" text-4xl font-bold mb-4">Articles<span className="text-primary">_</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur voluptatem porro maxime earum, voluptatibus natus asperiores vitae quia fuga, unde molestias velit repudiandae quo. Fugit error repellat voluptate inventore.</p> */}
                </div>
                <div className="projects flex flex-wrap my-4">
                    {
                        articles.map((article, index) => {
                            return (
                                <div key={index + 'article'} className="w-3/3 sm:w-2/4 md:w-1/3 xl:w-1/4 p-2">
                                    <div className="card shadow rounded-2xl bg-white dark:bg-dark m-1 bg-opacity-70 backdrop-blur hover:ring-1 hover:ring-slate-700">

                                    <Link target="_blank" href={article?.url}><figure><img className="p-2 rounded-2xl" src={article?.cover_image} alt={article.title} /></figure></Link>
                                        <div className="card-body p-4">
                                            <div className="card-actions gap-1">
                                                {
                                                    article?.tag_list?.map((tag, index) => {
                                                        return (
                                                            <div key={index + 'tag'} className="mx-1 text-primary text-xs uppercase opacity-75">
                                                                #{tag}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            {/* <h3 className="font-bold text-xl hover:underline"><Link href={'articles/' + article?.slug}>{article?.title}</Link></h3> */}
                                            <h3 className="font-bold text-xl hover:underline"><Link target="_blank" href={article?.url}>{article?.title}</Link></h3>
                                            <p className="text-base"> {article?.description}</p>
                                            <div className="card-actions gap-2 my-3 flex flex-row items-center flex-wrap">
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img src={article?.user?.profile_image_90} />
                                                    </div>
                                                </div>
                                                <span className="text-sm">{article?.user?.name}</span> <span className="text-xs">{article?.readable_publish_date}</span> <span className="text-xs text-primary">{article?.reading_time_minutes} Minute{ article?.reading_time_minutes > 1 && 's'} read</span>
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