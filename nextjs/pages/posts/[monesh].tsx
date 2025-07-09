import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";

type Post = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  console.log(posts);
  

  const paths = posts.slice(0, 10).map((post) => ({
    params: { monesh: post.id.toString() },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false, // show 404 if path not returned
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { monesh } = context.params as { monesh: string };
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${monesh}`);
  const post: Post = await res.json();

  return {
    props: { post },
  };
};
