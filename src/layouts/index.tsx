import React from 'react';
import { Outlet } from 'umi';
import HeaderNav from '@/components/NavBar';

const Layout: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <div style={{ padding: '24px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
