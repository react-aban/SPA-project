import React, { useEffect, useState } from "react";
import PostList from "../../components/Post";
import { fetchPosts, fetchPhotos, deletePostAndPhoto } from "@/services/PostService"; 
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
          fetchPosts(),
          fetchPhotos(),
        ]);

        setPosts(postsResponse);
        setPhotos(photosResponse);
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
      await deletePostAndPhoto(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (id: number) => {
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
