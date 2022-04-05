import React, { useEffect } from 'react'
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

  useEffect(()=>{
      let ref = fireDb.database().ref("issues");
      var c = 0
      ref.orderByChild("subject").equalTo("Child abuse").on("child_added", (snap) => {
        c = c+1;
    });
     window.localStorage.setItem('ChildAbuse', c);
     return c;
  },[])

  useEffect(()=>{
    let ref = fireDb.database().ref("issues");
    var gb = 0
    ref.orderByChild("subject").equalTo("Gender based violence").on("child_added", (snap) => {
      gb = gb+1;
  });
   console.log(gb);
   window.localStorage.setItem('gender', gb);
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var cl = 0
  ref.orderByChild("subject").equalTo("Child labor").on("child_added", (snap) => {
    cl = cl+1;
});
 window.localStorage.setItem('ChildLabor', cl);

},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var gm = 0;
ref.orderByChild("subject").equalTo("Child marriages").on("child_added", (snap) => {
  gm = gm+1;
});
 window.localStorage.setItem('ChildMarieges', gm);
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var jm = 0;
ref.orderByChild("assign").equalTo("J.Msosa").on("child_added", (snap) => {
  jm = jm+1;
});
 window.localStorage.setItem('JM', jm);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var kh = 0;
ref.orderByChild("assign").equalTo("K.Khalika").on("child_added", (snap) => {
  kh = kh+1;
});
 window.localStorage.setItem('KH', kh);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var rp = 0;
ref.orderByChild("assign").equalTo("Repoter").on("child_added", (snap) => {
  rp = rp+1;
});
 window.localStorage.setItem('RP', rp);
},[])

//for state
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var pe = 0;
ref.orderByChild("state1").equalTo("pending").on("child_added", (snap) => {
  pe = pe+1;
});
 window.localStorage.setItem('PE', pe);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var re = 0;
ref.orderByChild("state1").equalTo("Resolved").on("child_added", (snap) => {
  re = re+1;
});
 window.localStorage.setItem('RE', re);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var op = 0;
ref.orderByChild("state1").equalTo("open").on("child_added", (snap) => {
  op = op+1;
});
 window.localStorage.setItem('OP', op);
},[])
  
//for priority
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var lo = 0;
ref.orderByChild("priority").equalTo("low").on("child_added", (snap) => {
  lo = lo+1;
});
 window.localStorage.setItem('LO', lo);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var me = 0;
ref.orderByChild("priority").equalTo("Medium").on("child_added", (snap) => {
  me = me+1;
});
 window.localStorage.setItem('ME', me);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var hi = 0;
ref.orderByChild("priority").equalTo("High").on("child_added", (snap) => {
  hi = hi+1;
});
 window.localStorage.setItem('HI', hi);
},[])
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
      name: 'Child Marieges',
      value: window.localStorage.getItem("ChildMarieges"),
      uv:654,
 
    },
    {
      name: 'Gender based violence',
      value:window.localStorage.getItem("gender"),
      uv:654,
 
    },
    {
      name: 'Child abuse',
      value: window.localStorage.getItem("ChildAbuse"),
      uv: 435,
    },
    {
      name: 'Child labor',
      value: window.localStorage.getItem("ChildLabor"),
      uv: 774,
    },
    
  ];

  const data1 = [
    {name: 'Pending issues', value: window.localStorage.getItem("PE"), },
    { name: 'Open issues', value: window.localStorage.getItem("OP"),},
    {name: 'Resolved', value: window.localStorage.getItem("RE"),},  
  ];

  const assignData = [
    {name: 'J.Msosa', value: window.localStorage.getItem("JM"),},
    { name: 'K.Khalika', value: window.localStorage.getItem("KH"),},
    {name: 'Repoter', value:window.localStorage.getItem("RP"), },  
  ];

  const priorityData = [
    {name: 'Low', value: window.localStorage.getItem("LO"),},
    { name: 'Medium', value: window.localStorage.getItem("ME"),},
    {name: 'High', value: window.localStorage.getItem("HI"), },  
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