export default function Article({params} : { params: {slug: string} }) {
    return <div>Article {params.slug}</div>
}