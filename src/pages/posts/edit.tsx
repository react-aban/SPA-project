import React, { useState, useEffect } from "react";
import { Card, Input, Button } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "umi";

const { TextArea } = Input;

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

const EditPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postResponse, photoResponse] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
          axios.get(`https://jsonplaceholder.typicode.com/photos/${postId}`),
        ]);
        setPost(postResponse.data);
        setPhoto(photoResponse.data);
      } catch (err: any) {
        setError("Failed to load post data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  const handleSave = async () => {
    if (!post) return;

    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        post
      );
      alert("Post updated successfully");
      navigate("/posts");
    } catch (err: any) {
      setError("Failed to save changes");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card
      title="Edit Post"
      bordered={false}
      cover={photo ? <img alt={photo.title} src={photo.url} /> : null}
      style={{ width: "100%", maxWidth: 600, margin: "auto", marginTop: 20 }}
      actions={[
        <Button type="primary" onClick={handleSave} key="save">
          Save Changes
        </Button>,
      ]}
    >
      {post && (
        <>
          <label>Title:</label>
          <Input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Enter post title"
            style={{ marginBottom: 16 }}
          />

          <label>Body:</label>
          <TextArea
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            placeholder="Enter post content"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </>
      )}
    </Card>
  );
};

export default EditPost;
