import React, { Component } from 'react'
import './App.css';
//import ChildComponent from "./Components/ChildComponent";
import Count from './Components/Count';
//  import BulbOnOff from './Components/BulbOnOff';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <BulbOnOff/> */}
        <Count/>
       {/* <ChildComponent /> */}
      </div>
    );
  }
}

export default App;

/* 
React Components re-render whenever there is change in either props and state
Props - Data sent from parent component down to child component (One-Way Data-Binding)
 State-Data wwhich is private to a component

 Note: Earlier,states could only be created in class based components
*/
