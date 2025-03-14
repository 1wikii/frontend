"use client";
import { useEffect, useState } from "react";
import { fetchPosts, deletePost } from "@/lib/api";
import Link from "next/link";
import PostCard from "@/components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Posting Management</h1>
      <Link href="/add-post" className="bg-green-500 text-white px-4 py-2 mb-4 inline-block">Tambah Post</Link>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
}
