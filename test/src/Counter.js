import React, { useState } from 'react';

function Counter() {
    let [num, setNum] = useState(0)

    const increase = () => {
        setNum(prev => prev + 1)
        console.log('+1')
    }

    const decrease = () => {
        setNum(prev => prev - 1)
        console.log('-1')
    }

    const bound = {
        display: 'flex',
        justifyContent: 'center'
    }

    const btn = {
        width: '100px',
        height: '60px',
        margin: '0 50px',
        alignSelf: 'center'
    }

    return (
        <div style={bound}>
            <button onClick={decrease} style={btn}>-1</button>
            <h1>{num}</h1>
            <button onClick={increase} style={btn}>+1</button>
        </div>
    )
}

export default Counter;