import React , {useEffect , useState } from 'react'
import { fetchMarkdownList } from '../utils/fetchMarkdownList';
import BlogCard from './BlogCard';

export default function BlogsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const blogList = await fetchMarkdownList(); // 👈 call the fetchMarkdownList
        setPosts(blogList);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return <div>Loading your amazing blog posts...</div>;
  }

  console.log(`Here are the posts ${JSON.stringify(posts[0])}`)

  // const blogs = [
  //   {
  //     title: "Fixing NGINX for APK Download",
  //     date: "2025-05-14",
  //     description:
  //       "How I solved an issue where NGINX blocked APK downloads on mobile.",
  //     tags: ["nginx", "deployment"],
  //     slug: "fixing-nginx",
  //   },
  //   {
  //     title: "Fixing NGINX for APK Download",
  //     date: "2025-05-14",
  //     description:
  //       "How I solved an issue where NGINX blocked APK downloads on mobile.",
  //     tags: ["nginx", "deployment"],
  //     slug: "fixing-nginx",
  //   },
  // ];

  // title, date, description, tags, slug

  return (
    <section className="px-1 py-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">📰 Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <BlogCard
            key={i}
            title={post.title}
            slug={post.slug}
            date={post.date}
            description={post.description}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
}
