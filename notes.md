- JSX is used in React to describe what the User Interface should look like
- Props allows to you to pass dynamic data throufh react components

- State in react is plain js object used to by react to represent a piece of information about the component's current situation it is completely managed by the component itself.

- callback function are the ones that doesnt have a name

**_ Never Modify State manullay
never mutate the state _**

// CODE TO UNDERSTAND HOW EVERYTHING IS WORKING

import { useState, useEffect} from 'react';
import './App.css';

// This an arrow function component
const App = () => {

// This is Hook
const [ counter, setCounter ] = useState(0);

useEffect(() => {
alert('you changed the counter to' + counter)
}, [counter]);

return (

<div className="App">
<button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
<h1>{counter}</h1>
<button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
</div>
);
}

export default App;
