"use client";
export default function PostCard({ post, onDelete }) {
  return (
    <div className="border p-3 mb-2">
      <h2 className="font-bold text-black">{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)} className="bg-red-500 text-white px-2 py-1 mt-2">Hapus</button>
    </div>
  );
}
