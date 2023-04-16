import Link from "next/link";

export default function Post({ post }) {
  return (
    <div>
      <Link href={"/"}>
        <h2>Revenir à l'acceuil</h2>
      </Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((response) => response.json());

  return {
    props: {
      post,
    },
  };
}
