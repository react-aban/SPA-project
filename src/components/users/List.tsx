
import React from "react";

import { Card, List } from "antd";



const UserList: React.FC = ({users,loading:boolean}) => (
    
  <>
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
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <Card loading={loading} title={user.name}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </Card>
        </List.Item>
      )}
    />
  </>
);

export default UserList;
