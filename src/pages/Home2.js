import React from 'react'
import fireDb from "firebase";
import Issues from './Issues'; 
import Visualization from './Visualization';
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, ComposedChart, Line,
  Area,YAxis, CartesianGrid, Tooltip, Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';



const Charts =()=>{
  <Visualization />
  const subject = window.localStorage.getItem("subjectCo")
  const issue = 300;
  
  const writeUserData = () => {
    fireDb.database()
      .ref("/")
    console.log("DATA SAVED");
  };
  
  const getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      return state;
    });
    const b = 90;
    return b;
  };
  const k = 900;
  const b = () => {
     var k = 700;
    return k;
  }

  const data = [
    {
      name: 'Gender Marieges',
      value: 20,
      uv:654,
 
    },
    {
      name: 'Gender based violence',
      value: 6000,
      uv:654,
 
    },
    {
      name: 'Child abuse',
      value: subject,
      uv: 435,
    },
    {
      name: 'Child labor',
      value: 3000,
      uv: 774,
    },
    
  ];

  const data1 = [
    {name: 'Pending issues', value: 3000, uv:654,},
    { name: 'Open issues', value: 6000, uv:654,},
    {name: 'Resolved', value: 6000,  uv: 435, },  
  ];

  const assignData = [
    {name: 'J.Msosa', value: 5,},
    { name: 'K.Khalika', value: 9,},
    {name: 'Police', value: 8, },  
  ];

  const priorityData = [
    {name: 'Low', value: 4,},
    { name: 'Medium', value: 6,},
    {name: 'High', value: 3, },  
  ];
  
  
    return (
      <div > 
      <div className='row'>
        <div className='col-6'>  <h5>Issue Subjects</h5>
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
      <h5>Issue States</h5>
    <ResponsiveContainer width="100%" aspect={3}>
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data1}
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
      </ResponsiveContainer>
       </div>
      
     </div>
     <div className='row'> 
     <div className='col-6'><h5>Issue Assign</h5>
     
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={assignData}
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
        <div className='col-6'> <h5>Issue priority</h5>
        <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={priorityData}
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