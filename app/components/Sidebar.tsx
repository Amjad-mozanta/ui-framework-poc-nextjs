"use client"
import React, {useState} from 'react';
import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

const { Sider } = Layout;

const App: React.FC = ({collapsed}) => {

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'nav 1',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
        },
      ]}
    />
  </Sider>
  );
};

export default App;