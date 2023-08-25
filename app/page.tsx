"use client"
import React, {useState, useEffect} from "react";
import { Button, Row } from 'antd';
import { useRouter } from 'next/navigation';
import CustomTable from './components/Table';

export default function Home() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    }
  ];
  const router = useRouter();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users") || "") || [];
    setUsers(data);
  }, [])
  return (
    <>
    <Row justify="end">
    <Button type="primary" onClick={() => router.push('/users')}>Add user</Button>
    </Row>
    <CustomTable dataSource={users} columns={columns} />
    </>
  )
}
