import React, { useMemo, useState } from 'react';

export default function UseMemo() {
    const [count, setCount] = useState(1);

    const multiCo = useMemo(
        function multiCount() {
            console.log("Called");
            return count * 2;
        },
        [count]
    );

    return (
        <div>
            <h1>Hello</h1>
            <p>Count: {count}</p>
            <p>Multiplied count: {multiCo}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
        </div>
    );
}
