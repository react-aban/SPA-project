import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./List";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Photo {
  id: number;
  title: string;
  url: string;
}

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

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <h2>Posts</h2>
      <PostList posts={posts} photos={photos} /> 
    </div>
  );
};

export default PostApi;