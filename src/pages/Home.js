import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { supabase } from '../backend/supabaseClient';

const { Option } = Select;

const data = [
    { name: 'Jan', income: 4000, activeUsers: 2400 },
    { name: 'Feb', income: 3000, activeUsers: 2210 },
    { name: 'Mar', income: 2000, activeUsers: 2290 },
    { name: 'Apr', income: 2780, activeUsers: 2000 },
    { name: 'May', income: 1890, activeUsers: 2181 },
    { name: 'Jun', income: 2390, activeUsers: 2500 },
    { name: 'Jul', income: 3490, activeUsers: 2100 },
];

const Home = () => {
    const [totalUsers, setTotalUsers] = useState(0); // State for total users

    const handleChange = async (value) => {
        console.log(`selected ${value}`);

        let startDate;
        const currentDate = new Date();

        // Determine the date range based on selected value
        if (value === 'this year') {
            startDate = new Date(currentDate.getFullYear(), 0, 1); // First day of this year
        } else if (value === 'this month') {
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); // First day of this month
        } else if (value === 'this week') {
            const dayOfWeek = currentDate.getDay();
            startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - dayOfWeek); // First day of this week
        } else if (value === 'last year') {
            startDate = new Date(currentDate.getFullYear() - 1, 0, 1); // First day of last year
        }

        // Fetch total users based on the selected filter (you may need to adjust for date filtering in your schema)
        const { count, error } = await supabase
            .from('users') // Replace 'users' with your actual table name
            .select('*', { count: 'exact' })
            .gte('created_at', startDate.toISOString()); // Filter users based on the start date

        if (error) {
            console.error('Error fetching total users:', error);
        } else {
            setTotalUsers(count); // Update total users based on the condition
        }
    };

    useEffect(() => {
        const fetchTotalUsers = async () => {
            const { data, count, error } = await supabase
                .from('users')  // Replace 'users' with your actual table name
                .select('*', { count: 'exact' });

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('Fetched data:', data);  // Log the data returned
                setTotalUsers(count);  // Set total user count
            }
        };

        fetchTotalUsers();
    }, []); // Only run once when the component mounts

    return (
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
                            <Option value="last year">Last Year</Option> {/* Added "Last Year" option */}
                        </Select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 30%' }}>
                        <p style={{ fontWeight: 'bold', color: '#82ca9d' }}>Total Users: {totalUsers}</p>
                        <Select defaultValue="this year" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="this year">This Year</Option>
                            <Option value="this month">This Month</Option>
                            <Option value="this week">This Week</Option>
                            <Option value="last year">Last Year</Option> {/* Added "Last Year" option */}
                        </Select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 30%' }}>
                        <p style={{ fontWeight: 'bold', color: '#ffc658' }}>Active Users: 18,000</p>
                        <Select defaultValue="this year" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="this year">This Year</Option>
                            <Option value="this month">This Month</Option>
                            <Option value="this week">This Week</Option>
                            <Option value="last year">Last Year</Option> {/* Added "Last Year" option */}
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
                    <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default Home;
