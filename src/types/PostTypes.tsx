export interface Post {
  id: number;
  title: string;
  body: string;
}
export interface Photo {
  id: number;
  title: string;
  url: string;
}

export interface PostListProps {
  posts: Post[];
  photos: Photo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
