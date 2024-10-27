import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card, List } from "antd";

const { Meta } = Card;

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

interface PostListProps {
  posts: Post[];
  photos: Photo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, photos, onDelete,onEdit }) => {
  const combinedData = posts.map((post, index) => ({
    ...post,
    pictureUrl: photos[index]?.url ,
  }));

  const displayedUsers = combinedData.slice(0, 5);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4,
      }}
      dataSource={displayedUsers}
      renderItem={(item) => (
        <List.Item>
          <Card
          
            style={{ width: "100%" }}
            cover={<img alt="example" src={item.pictureUrl} />}
            actions={[
              <DeleteOutlined key="delete" onClick={() => onDelete(item.id)} />,
              <EditOutlined key="edit" onClick={() => onEdit(item.id)} />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={item.title}
              description={item.body}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PostList;
