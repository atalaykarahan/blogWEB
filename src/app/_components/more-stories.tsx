import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: any[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.blog_id}
            title={post.blog_title}
            coverImage={post.blog_cover_image ?? '/assets/blog/hello-world/cover.jpg'}
            date={post.updatedAt}
            slug={post.blog_slug}
          />
        ))}
      </div>
    </section>
  );
}
