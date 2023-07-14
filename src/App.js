import React from 'react';

import './App.css';
import Employees from './Componenets/Employees';
import StudentElement from './Componenets/Student';
import Emp from './Componenets/emp';
import { Newcreate,H,J } from './Componenets/Login';
import User from './Componenets/User';



const emcreate =
 React.createElement('h1',{className:'abc'},'Hello ... i am without JSX content 1');


function App() {
  return (
    <div className="App">

      <h1 className='k'>Hello... i am JSX.....</h1>

      {emcreate}
     <Employees/>
     <StudentElement/>
     <Emp/>
    <Newcreate/>
     <h1 id='o'>{H} <br/>{J}</h1>
    <User/>
    
    </div>
  );
}

export default App;
