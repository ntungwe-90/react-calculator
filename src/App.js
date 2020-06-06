import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input-component.js';
import Row1 from './row-one component.js';
import Row2 from './row-two component.js';
import Row3 from './row-3 component.js';
import Row4 from './row-4 component.js'



let Row4_DATA = ['0','.','=']
function App() {
  return (
   
    <div className="App" >
    <div class="container">

      
    <Input/>
		
    <Row1/>


    <Row2/>
		

    <Row3/>

   <Row4 data={Row4_DATA}/>
   
      </div>

    </div>
  );
}

export default App;
