import React, {createContext, useState, useContext} from 'react';

const CountContext = createContext();

function Counter(){
    let count = useContext(CountContext);
    return (<h2>{count}</h2>)
}

function Example4(){
    const [count, setCount] = useState(0)   //  数组解构

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example4;