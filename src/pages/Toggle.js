// import {useState} from "react";
// // import { ToggleButton } from "react-bootstrap";
// import ToggleButton from 'react-toggle-button';
// // import ToggleSwitch from './ToggleSwitch/ToggleSwitch'

// function Toggle() {
//     const [unit, setUnit] = useState("Resolved");
//     const toggleDisplay = () => {
//         if (unit === "Resolved") {
//             setUnit("Not Resolved");
//             console.log(unit);
//             window.localStorage.setItem('Reso', 'Open');
//         } else {
//             setUnit("Resolved");
//             console.log(unit);
//             window.localStorage.setItem('Reso', 'Resolved');

//         }
//     };
//     return (
// //         <ToggleButton
// //   onToggle={() => {
// //     self.setState({

// //     })
// //   }} />  
// <div>
//         <ToggleButton className="temp" onToggle={toggleDisplay}>
//             {unit}
//         </ToggleButton>

//         </div>
//     );
// }
// export default Toggle;

// import React, { Component } from 'react';

// class Toggle extends Component {
//   render() {
//     return (
//       <div className="toggle-switch">
//         <input
//         checked = {toggleDisplay}
//           type="checkbox"
//           className="toggle-switch-checkbox"
//           name={this.props.Name}
//           id={this.props.Name}
//         />
//         <label className="toggle-switch-label" htmlFor={this.props.Name}>
//           <span className="toggle-switch-inner" />
//           <span className="toggle-switch-switch" />
//         </label>
//       </div>
//     );
//   }
// }

// export default Toggle;

// import React from "react";
// import "./Toggle.css";
  
const Toggle = ({ label }) => {
  return (
    <div className="container"  onClick={window.localStorage.setItem('toggle', {label})}>
      
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>

          <span className="inner" />
          <span className="switch" />
        </label>
        
      </div>{window.localStorage.getItem('toggle')}
    </div>
  );
};
  
export default Toggle;