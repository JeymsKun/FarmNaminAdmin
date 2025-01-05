import { Box, Typography } from '@mui/material';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeGraph = () => {
    // Example income data (replace with real data)
    const incomeData = [
        { month: 'January', income: 500 },
        { month: 'February', income: 750 },
        { month: 'March', income: 1000 },
        { month: 'April', income: 1200 },
        { month: 'May', income: 900 },
        { month: 'June', income: 1300 },
    ];

    // Prepare data for the chart
    const chartData = {
        labels: incomeData.map((data) => data.month), // Months
        datasets: [
            {
                label: 'Monthly Income ($)',
                data: incomeData.map((data) => data.income), // Income values
                backgroundColor: '#4caf50', // Bar color
                borderColor: '#388e3c', // Border color
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Admin Monthly Income',
            },
        },
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f1f8e9', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom color="green">
                Admin Income Graph
            </Typography>
            <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                <Bar data={chartData} options={options} />
            </Box>
        </Box>
    );
};

export default IncomeGraph;
