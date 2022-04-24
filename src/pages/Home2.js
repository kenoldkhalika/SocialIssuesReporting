import React, { useEffect } from 'react'
import fireDb from "firebase";
import Issues from './Issues'; 
import Visualization from './Visualization';
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, ComposedChart, Line,  LineChart,
  Area,YAxis, CartesianGrid, Tooltip, Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';
import Header from "../components/Header";




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
ref.orderByChild("assign").equalTo("Admini").on("child_added", (snap) => {
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
ref.orderByChild("state1").equalTo("resolved").on("child_added", (snap) => {
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

// for analytics
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var january = 0;
ref.orderByChild("source").endAt("app").on("child_added", (snap) => {
  var myString = snap.child("openDate").val();
  var array = new Array();
  array = myString.split('/');
  // console.log(array[0]);
  if (array[0] == "01" || array[0] == "1"){
    january = january+1;
  }
  
});
// console.log(january);
 window.localStorage.setItem('JANUARY', january);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var april = 0;
ref.orderByChild("source").endAt("app").on("child_added", (snap) => {
  var myString = snap.child("openDate").val();
  var array = new Array();
  array = myString.split('/');
  // console.log(array[0]);
  if (array[0] == "04" || array[0] == "4"){
    april = april+1;
  }
  
});
 window.localStorage.setItem('APRIL', april);
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var februar = 0;
ref.orderByChild("source").endAt("app").on("child_added", (snap) => {
  var myString = snap.child("openDate").val();
  var array = new Array();
  array = myString.split('/');
  // console.log(array[0]);
  if (array[0] == "02" || array[0] == "2"){
    februar = februar+1;
  }

});
 window.localStorage.setItem('FEBRUARY', februar);
 console.log(februar);
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var mar = 0;
ref.orderByChild("source").endAt("app").on("child_added", (snap) => {
  var myString = snap.child("openDate").val();
  var array = new Array();
  array = myString.split('/');
  // console.log(array[0]);
  if (array[0] == "03" || array[0] == "3"){
    mar = mar+1;
  }

});
 window.localStorage.setItem('MARCH', mar);
 console.log(mar);
},[])


useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var opj = 0;

  ref.orderByChild("state1").equalTo("open").on("child_added", (snap) => {
    if (snap.child('assign').val() === 'J.Msosa'){
      opj = opj+1;
      console.log(snap.child('assign').val());
    }
    
  });window.localStorage.setItem('OPJ', opj);

 
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var rej = 0;

  ref.orderByChild("state1").equalTo("resolved").on("child_added", (snap) => {
    if (snap.child('assign').val() === 'J.Msosa'){
      rej = rej+1;
    }
    
  });window.localStorage.setItem('REJ', rej);

 
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var pej = 0;

  ref.orderByChild("state1").equalTo("pending").on("child_added", (snap) => {
    if (snap.child('assign').val() === 'J.Msosa'){
      pej = pej+1;
    }
    
  });window.localStorage.setItem('PEJ', pej);

 
},[])

// for khalika
useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var opk = 0;

  ref.orderByChild("state1").equalTo("open").on("child_added", (snap) => {
    if (snap.child('assign').val() === 'K.Khalika'){
      opk = opk+1;
      console.log(snap.child('assign').val());
    }
    
  });window.localStorage.setItem('OPK', opk);

 
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var rek = 0;

  ref.orderByChild("state1").equalTo("resolved").on("child_added", (snap) => {
    if (snap.child('assign').val() === 'K.Khalika'){
      rek = rek+1;
    }
    
  });window.localStorage.setItem('REK', rek);

 
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("issues");
  var pek = 0;

  ref.orderByChild("state1").equalTo("pending").on("child_added", (snap) => {
    if (snap.child('assign').val() === 'K.Khalika'){
      pek = pek+1;
    }
    
  });window.localStorage.setItem('PEK', pek);

 
},[])
  
//for priority
useEffect(()=>{
  let ref = fireDb.database().ref("Issues");
  var lo = 0;
ref.orderByChild("priority").equalTo("Low").on("child_added", (snap) => {
  lo = lo+1;
});
 window.localStorage.setItem('LO', lo);
 console.log(lo);
},[])

useEffect(()=>{
  let ref = fireDb.database().ref("Issues");
  var me = 0;
ref.orderByChild("priority").equalTo("Medium").on("child_added", (snap) => {
  me = me+1;
});
 window.localStorage.setItem('ME', me);
},[])
useEffect(()=>{
  let ref = fireDb.database().ref("Issues");
  var hi = 0;
ref.orderByChild("priority").equalTo("High").on("child_added", (snap) => {
  hi = hi+1;
});
 window.localStorage.setItem('HI', hi);
},[])

  const getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("issues", snapshot => {
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
      name: 'Child Marriages',
      issues: window.localStorage.getItem("ChildMarieges"),
      uv:654,
 
    },
    {
      name: 'Gender based violence',
      issues:window.localStorage.getItem("gender"),
      uv:654,
 
    },
    {
      name: 'Child abuse',
      issues: window.localStorage.getItem("ChildAbuse"),
      uv: 435,
    },
    {
      name: 'Child labor',
      issues: window.localStorage.getItem("ChildLabor"),
      uv: 774,
    },
    
  ];

  const dataPrio = [
    { name: 'Low', issues: parseInt(window.localStorage.getItem("LO")) },
    { name: 'Medium', issues: parseInt(window.localStorage.getItem("ME"))},
    { name: 'High', issues: parseInt(window.localStorage.getItem("HI")) },
    
  ];

  const data1 = [
    {name: 'Pending issues', issues: window.localStorage.getItem("PE"), },
    { name: 'Open issues', issues: window.localStorage.getItem("OP"),},
    {name: 'Resolved', issues: window.localStorage.getItem("RE"),},  
  ];

  const dataJ = [
    {name: 'Pending issues', issues: window.localStorage.getItem("PEJ"), },
    { name: 'Open issues', issues: window.localStorage.getItem("OPJ"),},
    {name: 'Resolved', issues: window.localStorage.getItem("REJ"),},  
  ];

  const dataAnalytics = [
    { name: 'January', Issues: window.localStorage.getItem("JANUARY"),},
    { name: 'February', Issues: window.localStorage.getItem("FEBRUARY"),},
    { name: 'March', Issues: window.localStorage.getItem("MARCH"), },
    { name: 'April',Issues: window.localStorage.getItem("APRIL"),},
  ];

  const dataK = [
    {name: 'Pending issues', issues: window.localStorage.getItem("PEK"), },
    { name: 'Open issues', issues: window.localStorage.getItem("OPK"),},
    {name: 'Resolved', issues: window.localStorage.getItem("REK"),},  
  ];

  const assignData = [
    {name: 'J.Msosa', issues: window.localStorage.getItem("JM"),},
    { name: 'K.Khalika', issues: window.localStorage.getItem("KH"),},
    {name: 'Admin', issues:window.localStorage.getItem("RP"), },  
  ];

  const priorityData = [
    {name: 'Low', Issues: 7},
    { name: 'Medium', Issues: parseInt(window.localStorage.getItem("ME"))},
    {name: 'High', Issues: parseInt(window.localStorage.getItem("HI"))},  
  ];
  if (window.localStorage.getItem('name') === 'Admin'){
    return (
      <><Header/>
      <div >
         
      <div className='row'>
        <div className='col-6'>  <h5>Issue Category </h5>
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
        <YAxis 
         allowDecimals={false}
        />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="issues" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer> </div>
    <div className='col-6'>
      <h5>Issue Status</h5>
      <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data1}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis allowDecimals={false}/>
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="issues" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
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
            <YAxis allowDecimals={false}/>
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="issues" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer> </div>
        <div className='col-6'>  <h5>Reported Issues per month </h5>
        {/* <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="issues"
            startAngle={180}
            endAngle={0}
            data={dataPrio}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer> */}

<ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={dataAnalytics}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="Issues" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      </div>
        </div></>
    );}
    else if (window.localStorage.getItem('name') === 'J.Msosa') {
      return(
        <><Header/>
          <div className='col-10'> 
           <><h4 style={{paddingTop:"5px"}}>ISSUE STATUS</h4></> 
             <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={dataJ}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis allowDecimals={false}/>
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="issues" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer> </div></>
      );
    }
    else 
    return(
      <>
      <Header/>
      <div className='col-10'>   <><h4 style={{paddingTop:"5px"}}>ISSUE STATUS</h4></>
      <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={dataK}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="issues" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer> </div>
   </> 
    );
    
};
export default Charts;