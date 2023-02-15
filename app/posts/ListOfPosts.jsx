import { LikeButton } from "./LikeButton.jsx"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}

export async function ListOfPosts() {
    const posts = await fetchPosts()

    return posts.map(post => (
        <article key={post.id}>
            <h2 style={{ color: '#ca2d2d' }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
        </article>
    ))

}