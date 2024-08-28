import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


const BarChartPage = () => {

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    
  const data = [
    {
      name: "Australia",
      win: 45,
    },
    {
      name: "India",
      win: 36,
    },
    {
      name: "Pakistan",
      win: 56,
    },
    {
      name: "Sirilanka",
      win: 24,
    
    },
   
  ];

  return (
    <>
    <div className="w-[100%] h-[80vh] items-center justify-center">
      <h2 className="font-bold text-center pb-10 text-3xl">Bar Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={900}
          height={200}
          data={data}
          barSize={50}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="win" fill="#8884d8" label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
                 </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default BarChartPage