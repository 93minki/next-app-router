import { Suspense } from "react";

export default function PostListPage() {
  return (
    <div>
      <div>I'm Header!!!</div>
      <Suspense fallback={<div>Post Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <PostList />
      </Suspense>
    </div>
  );
}

const delayFetch = async (url: string, delay: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, delay);
  });
};

async function PostList() {
  const posts = await delayFetch("http://localhost:3000/api/posts", 3000);

  return (
    <ul>
      {posts.post.map(
        (post: { id: number; title: string; content: string }) => {
          return <li key={post.id}>{post.title}</li>;
        }
      )}
    </ul>
  );
}
