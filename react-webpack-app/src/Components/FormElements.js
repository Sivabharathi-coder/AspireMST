import React from 'react';

const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', status: 'Active' },
];

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const thStyle = {
    background: '#f4f6fb',
    color: '#333',
    padding: '12px',
    borderBottom: '2px solid #eaeaea',
    textAlign: 'left',
};

const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #eaeaea',
    background: '#fff',
};

const statusStyle = status => ({
    padding: '4px 12px',
    borderRadius: '12px',
    background: status === 'Active' ? '#e6f7ee' : '#fbeaea',
    color: status === 'Active' ? '#27ae60' : '#c0392b',
    fontWeight: 'bold',
    fontSize: '0.9em',
});

function GridTable() {
    return (
        <div style={{ maxWidth: 700, margin: '40px auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>User Grid Table</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id}>
                            <td style={tdStyle}>{row.id}</td>
                            <td style={tdStyle}>{row.name}</td>
                            <td style={tdStyle}>{row.email}</td>
                            <td style={{ ...tdStyle, ...statusStyle(row.status) }}>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GridTable;