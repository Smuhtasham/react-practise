import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiData(1);
  }, []);

  const apiData = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=100&seed=abc`
      );
      const data = await res.json();
      setDataSource(data);
      setCurrentPage(data.info.page);
      setTotalPages(data.info.results);
      
    } finally {
      setLoading(false);
    }
  };
  console.log(dataSource);


  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource.results}
          pagination={{
            pageSize: 10,
            current:currentPage,
            total: totalPages,
            onChange: (page) => {
              apiData(page);
            },
          }}
        ></Table>
      </div>
    </>
  );
};

export default App;
