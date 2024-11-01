import React from "react";
import { Link } from "umi";
import { Card, List, Spin } from "antd"; 
import { UserListProps } from "@/types/UserTypes";

const UserList: React.FC<UserListProps> = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : (
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
            <List.Item key={user.id}> 
              <Card
                title={user.name}
                extra={<Link to={`/users/${user.id}`}>Details</Link>}
              >
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default UserList;
