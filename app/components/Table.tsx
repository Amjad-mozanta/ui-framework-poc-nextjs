import { Table } from "antd";
export default function CustomTable({dataSource, columns}){
  return(
    <Table dataSource={dataSource} columns={columns} />
  )
}