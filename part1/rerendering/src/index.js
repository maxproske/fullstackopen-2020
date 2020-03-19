import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () =>  {
    const [ counter, setCounter ] = useState(0)

    console.log(`re-rendering ${counter}`)
    
    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))