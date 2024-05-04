import React from 'react';

export default function Post() {
    let data = { name: 'John Doe', mobno: '1234567890', email: 'john@example.com' };

    const post = async () => {
       
            const response = await fetch("https://dummy.restapiexample.com/api/v1/employees", {
                method: "POST",
                headers: {
                    Accept: "application/json", // Fixed casing
                    "Content-Type": "application/json", // Fixed casing
                },
                body: JSON.stringify(data)
            });

          
    };
    post();

    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}
