import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "umi";

const { Header } = Layout;

const HeaderNav: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/posts">
            <Link to="/posts">Posts</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderNav;
