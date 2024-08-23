import React from "react";
import { Table } from "antd";
import { useGetAllPostQuery } from "./Services/Post";

const App = () => {
  const apiData = useGetAllPostQuery();
  console.log(apiData);

  if (apiData.isLoading) return <div>Loading....</div>;
  if (apiData.isError) return <div>Error Occured......</div>;

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Cell',
      dataIndex: 'cell',
      key: 'cell',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];
  return (
    <>
      <div className="w-[90%] m-auto">
      <Table dataSource={apiData.data.results} columns={columns} />;
      </div>
    </>
  );
};

export default App;
