export default function Post({ params }) {

    const { id } = params;

   

    return (
        <h1>Este es el Post {id} </h1>
    )
}