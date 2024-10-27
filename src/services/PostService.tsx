import axios from "axios";
import { Post, Photo } from "@/types/PostTypes";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
  return response.data;
};

export const fetchPhotos = async () => {
  const response = await axios.get<Photo[]>(`${API_BASE_URL}/photos`);
  return response.data;
};

export const fetchPostById = async (postId: string) => {
  const response = await axios.get<Post>(`${API_BASE_URL}/posts/${postId}`);
  return response.data;
};

export const fetchPhotoById = async (photoId: string) => {
  const response = await axios.get<Photo>(`${API_BASE_URL}/photos/${photoId}`);
  return response.data;
};

export const deletePostAndPhoto = async (id: number) => {
  await axios.delete(`${API_BASE_URL}/posts/${id}`);
  await axios.delete(`${API_BASE_URL}/photos/${id}`);
};

export const updatePost = async (postId: string, postData: Post) => {
  await axios.put(`${API_BASE_URL}/posts/${postId}`, postData);
};
