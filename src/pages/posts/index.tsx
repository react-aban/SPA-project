import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./List";
import { Post, Photo } from "@/types/PostTypes";

const PostApi: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsResponse, photosResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/posts"),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
        ]);

        setPosts(postsResponse.data);
        setPhotos(photosResponse.data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };
  const handleEdit = async (id: number) => {
    const editUrl = `${location.pathname}/${id}`;
    window.open(editUrl, "_blank");
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h2>Posts</h2>
      <PostList
        posts={posts}
        photos={photos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default PostApi;
