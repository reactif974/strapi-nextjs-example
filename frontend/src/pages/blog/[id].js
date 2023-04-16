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

export async function getStaticProps({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((response) => response.json());

  return {
    props: {
      post,
    },
  };
}

// get all pages ids
export async function getStaticPaths() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=4"
  ).then((response) => response.json());

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // call fallback if id no exist - false call 404 page
  return { paths, fallback: false };
}
