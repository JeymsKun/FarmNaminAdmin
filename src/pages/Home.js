import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select } from 'antd';
const { Option } = Select;

const data = [
    { name: 'Jan', income: 4000, users: 2400, activeUsers: 2400 },
    { name: 'Feb', income: 3000, users: 1398, activeUsers: 2210 },
    { name: 'Mar', income: 2000, users: 9800, activeUsers: 2290 },
    { name: 'Apr', income: 2780, users: 3908, activeUsers: 2000 },
    { name: 'May', income: 1890, users: 4800, activeUsers: 2181 },
    { name: 'Jun', income: 2390, users: 3800, activeUsers: 2500 },
    { name: 'Jul', income: 3490, users: 4300, activeUsers: 2100 },
];
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Home = () => (
    <>
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <h1 style={{ marginRight: '20px', flex: '1 1 100%' }}>Dashboard</h1>
                <div style={{ flex: '1 1 100%' }}>
                    <h2>Highlights</h2>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 30%' }}>
                    <p style={{ fontWeight: 'bold', color: '#8884d8' }}>Total Income: $24,000</p>
                    <Select defaultValue="this year" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="this year">This Year</Option>
                        <Option value="this month">This Month</Option>
                        <Option value="this week">This Week</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 30%' }}>
                    <p style={{ fontWeight: 'bold', color: '#82ca9d' }}>Total Users: 24,000</p>
                    <Select defaultValue="this year" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="this year">This Year</Option>
                        <Option value="this month">This Month</Option>
                        <Option value="this week">This Week</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 30%' }}>
                    <p style={{ fontWeight: 'bold', color: '#ffc658' }}>Active Users: 18,000</p>
                    <Select defaultValue="this year" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="this year">This Year</Option>
                        <Option value="this month">This Month</Option>
                        <Option value="this week">This Week</Option>
                    </Select>
                </div>
            </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#8884d8" />
                <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </>
);

export default Home;