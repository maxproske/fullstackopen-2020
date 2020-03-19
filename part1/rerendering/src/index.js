import React from 'react';
import ReactDOM from 'react-dom';

const App = ({count}) =>  {
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

let count = 1;

ReactDOM.render(<App count={count} />, document.getElementById('root'));

count++;
ReactDOM.render(<App count={count} />, document.getElementById('root'));

count++;
ReactDOM.render(<App count={count} />, document.getElementById('root'));
