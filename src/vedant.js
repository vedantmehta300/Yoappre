import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const Bb = function vedant(props){
return(
<>
<h1>This is My Name={props.name}</h1>
<h1>This is My age={props.age}</h1>
</>)
};

const Fg =(<><Bb name = "Vedant" age= "23"/>,
<Bb name = "Dishant" age= "31"/></>
  
);

ReactDOM.render(Fg, document.getElementById('root') )
