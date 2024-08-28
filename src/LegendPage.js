import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LegendPage = () => {

const data = [
  {
    name: '2000',
    pakistan: 30,
    india: 45,
    amt: 100,
  },
  
  {
    name: '2005',
    pakistan: 45,
    india: 40,
    amt: 100,
  },
  {
    name: '2010',
    pakistan: 67,
    india: 54,
    amt: 100,
  },
  
  {
    name: '2015',
    pakistan: 67,
    india: 54,
    amt: 100,
  },
  
  {
    name: '2020',
    pakistan: 50,
    india: 66,
    amt: 100,
  },  
];

  return (
    <>
     <div className="w-[100%] h-[80vh] items-center justify-center">
     <h2 className="font-bold text-center pb-10 text-3xl">Line Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Line type="monotone" dataKey="india"  stroke="#8884d8" activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="pakistan" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default LegendPage;