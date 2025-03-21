"use client";
export default function PostCard({ post, onDelete }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {" "}
            {post.brand}{" "}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {" "}
            {post.name}{" "}
          </p>
          <div className="flex items-center">
            <button
              onClick={() => onDelete(post.id)}
              className="bg-red-500 text-white px-2 py-1 mt-2"
            >
              Hapus
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
