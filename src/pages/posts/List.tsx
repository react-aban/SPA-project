import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, List } from "antd";

const { Meta } = Card;

import { posts } from "./posts";
import { pictures } from "./pictures";

const combinedData = posts.map((post, index) => ({
  ...post,
  pictureUrl: pictures[index]?.url || "default-image-url.jpg",
}));

const PostList: React.FC = () => {
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
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" />,
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
