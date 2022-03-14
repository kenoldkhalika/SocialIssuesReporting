import React from 'react'
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, ComposedChart, Line,
  Area,YAxis, CartesianGrid, Tooltip, Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';



const Charts =()=>{

  const data = [
    {
      name: 'Gender based violence',
      value: 4000,
      uv:654,
 
    },
    {
      name: 'Child abuse',
      value: 6000,
      uv: 435,
    },
    {
      name: 'Child labor',
      value: 3000,
      uv: 774,
    },
    
  ];
  
  
    return (

      <div >
        <h2>{window.localStorage.getItem('name')}</h2>
      <div className='row'> 
        <div className='col-6'>
      <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer> </div>
    <div className='col-6'>
    <ResponsiveContainer width="100%" aspect={3}>
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="value" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer> </div>
      
     </div>
     <div className='row'> 
     <div className='col-6'>
     
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer> </div>
        <div className='col-6'>
        <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer></div></div>
        </div>
    );
    
};
export default Charts;