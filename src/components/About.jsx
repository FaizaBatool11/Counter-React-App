import React, { useState } from "react";

function Aboutpage(){
    const [count, setCount] = useState(0);
    return(
        <>
        <div className="main">
        <h2>Counter</h2>
        <p>{count}</p>
        <div>
        <button onClick={() => setCount(count + 1)} className="button">Increment</button>
        <button onClick={() => setCount(count - 1)} className="button">Decrement</button>
        </div>
        </div>
        </>
    );
}

export default Aboutpage;