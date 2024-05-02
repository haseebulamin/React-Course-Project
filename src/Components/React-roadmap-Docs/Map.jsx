import React from 'react';

export default function Map() {
    // Assuming students is an array of objects
    let students = [
        { name: 'John', email: 'john@example.com', contact: '1234567890' },
        { name: 'Jane', email: 'jane@example.com', contact: '0987654321' },
        // Add more students as needed
    ];

    return (
        <div>
            {students.map((data, i) => (
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                </tr>
            ))}
        </div>
    );
}
