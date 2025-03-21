"use client";
import { useState } from "react";
import { addPost } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [brand, setTitle] = useState("");
  const [name, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ brand, name, published: false });
    router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="border p-2 w-full"
          value={brand} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" className="border p-2 w-full"
          value={name} onChange={(e) => setContent(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Tambah</button>
      </form>
    </div>
  );
}
