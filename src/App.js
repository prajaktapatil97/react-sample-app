import React from 'react'
import { decNumber, incNumber } from './Action/index';
import "./App.css";
// consumer 
// use selector

import { useSelector,useDispatch } from 'react-redux';

const App = ()=>{
  const myState = useSelector ((state) => state.changeTheNumber);
 const dispatch = useDispatch();
  return(
<div className = "main-container">

  <div className = "item-1">Increment And Decreament Counter</div>
  <div className = "item-2">React redux</div>
  <div className = "item-3">
  <button onClick = {() => dispatch(decNumber())}>-</button>
  <div className = "count-box">
   {myState}
  </div>
  <button onClick = {() => dispatch(incNumber())}>+</button>
  </div>
</div>
  );
}

export default App;