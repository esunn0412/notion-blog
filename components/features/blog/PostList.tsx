import Link from 'next/link';
import { PostCard } from '@/components/features/blog/PostCard';
import type { Post } from '@/types/blog';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-4">
      {posts.map((post, i) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard post={post} isFirst={i === 0} />
        </Link>
      ))}
    </div>
  );
}
