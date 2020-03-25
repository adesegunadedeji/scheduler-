import React, {useState, useEffect} from 'react' 
/* We import the useState Hook from React. 
It lets us keep local state in a function component */
import './index.css'
 

function Home (){

    const [count, setCount] = useState(0);
    /* we declare a new state variable by calling the useState Hook

    */

    useEffect(()=>{
          // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    })
  
    return (
        <div>
            <p> We have Clicked the counter {count} times</p>

            <button 
            onClick= {()=>  setCount(count + 1)
            }> Counter +
            </button>
            {/* When the user clicks, we call setCount with a new value. 
            React will then re-render the Example component, 
            passing the new count value to it. */}
        </div>
    )

}

export default Home