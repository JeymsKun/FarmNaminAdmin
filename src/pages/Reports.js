import { Box, Button, Card, CardContent, CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Sample report data
const mockReportData = [
    { date: '2025-01-01', newUsers: 50, totalSales: 1000 },
    { date: '2025-01-02', newUsers: 60, totalSales: 1100 },
    { date: '2025-01-03', newUsers: 80, totalSales: 1200 },
    { date: '2025-01-04', newUsers: 45, totalSales: 900 },
    { date: '2025-01-05', newUsers: 75, totalSales: 1300 },
];

// The Admin Report Page Component
const AdminReportPage = () => {
    const [loading, setLoading] = useState(false);
    const [reportData, setReportData] = useState([]);
    
    useEffect(() => {
        // Simulate fetching report data from an API or database
        setLoading(true);
        setTimeout(() => {
            setReportData(mockReportData);
            setLoading(false);
        }, 1000);
    }, []);
    
    // Export to CSV Function (mock)
    const exportToCSV = () => {
        // Here, you can implement logic to export the data to CSV
        alert('Exporting report data to CSV...');
    };
    
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
            <Typography variant="h4" color="primary" gutterBottom align="center">
                Admin Report Page
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <CircularProgress color="primary" />
                </Box>
            ) : (
                <>
                    <Grid container spacing={3}>
                        {/* Report Overview */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ backgroundColor: '#e3f2fd' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="primary">
                                        Total New Users
                                    </Typography>
                                    <Typography variant="h4" color="primary">
                                        {reportData.reduce((total, data) => total + data.newUsers, 0)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Card sx={{ backgroundColor: '#e8f5e9' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="green">
                                        Total Sales
                                    </Typography>
                                    <Typography variant="h4" color="green">
                                        {reportData.reduce((total, data) => total + data.totalSales, 0)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    
                    {/* Report Table */}
                    <Card sx={{ marginTop: '20px', backgroundColor: '#ffffff' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Daily Report Data
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>New Users</TableCell>
                                            <TableCell>Total Sales</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reportData.map((data, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{data.date}</TableCell>
                                                <TableCell>{data.newUsers}</TableCell>
                                                <TableCell>{data.totalSales}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>

                    {/* Chart Section (Sales and New Users) */}
                    <Card sx={{ marginTop: '20px', backgroundColor: '#ffffff' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Sales and New Users Over Time
                            </Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={reportData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="newUsers" fill="#82ca9d" name="New Users" />
                                    <Bar dataKey="totalSales" fill="#8884d8" name="Total Sales" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Export Button */}
                    <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
                        <Button variant="contained" color="primary" onClick={exportToCSV}>
                            Export Report to CSV
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default AdminReportPage;
