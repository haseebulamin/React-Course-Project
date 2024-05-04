import React from 'react';

export default function Post() {
    
    const updateData = async () => {
        let data = { name: 'John Doe', mobno: '1234567890', email: 'john@example.com' };
    
    
        const response = await fetch(`http://localhost:4000/users/${mobno}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      };    
    updateData();

    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}
