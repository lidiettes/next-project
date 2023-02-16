
const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}


export default async function Post({ params }) {

    const { id } = params;
    const comments = await fetchComments(id)


    return (
<ul style={{background:'#b2acac', fontSize:'10px'}}>
    {
        comments.map(comment => (
            <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            </li>
        ))}
</ul>
    )
}