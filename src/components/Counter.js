import React, { useState } from 'react'


const Counter = () => {
  const state = useState();
  const [Count , setCount] = useState(0);
 
    const IncCount =() =>
    {
        setCount(Count + 1)
    }
    return(
        <div>
            <h1>
                {Count}
            </h1>
            <button onClick = {IncCount} className = "blue button">
                Click Me
                </button>
        </div>
    )

}

export default Counter

// State  : hooks - change state in react  array destructring - divide array in small parts  ..... val function which return n with two item 