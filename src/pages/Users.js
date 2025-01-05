import { CheckCircle, PowerSettingsNew } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CircularProgress, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AdminUsers = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulated fetch of users data
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'Alice', online: true, profileImage: '' },
                { id: 2, name: 'Bob', online: false, profileImage: '' },
                { id: 3, name: 'Charlie', online: true, profileImage: '' },
                { id: 4, name: 'Diana', online: false, profileImage: '' },
                { id: 5, name: 'Eve', online: true, profileImage: '' },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    // Separate online and offline users
    const onlineUsersList = users.filter(user => user.online);
    const offlineUsersList = users.filter(user => !user.online);

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom color="primary" align="center">
                Admin - User Statistics
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <CircularProgress color="primary" />
                </Box>
            ) : (
                <>
                    {/* User Statistics Overview */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <Card sx={{ width: '48%', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom color="primary">
                                    Total Users
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    {users.length}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ width: '48%', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom color="green">
                                    Online Users
                                </Typography>
                                <Typography variant="h4" color="green">
                                    {onlineUsersList.length}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* User List Section - Online and Offline Users */}
                    <Grid container spacing={3}>
                        {/* Online Users */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', color: 'green' }}>
                                    Online Users
                                </Typography>
                                <List>
                                    {onlineUsersList.map(user => (
                                        <ListItem
                                            key={user.id}
                                            sx={{
                                                backgroundColor: '#ffffff',
                                                marginBottom: '10px',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {/* Profile Picture with Green Ring for Online Users */}
                                            <Avatar
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    marginRight: '10px',
                                                    border: '3px solid green', // Green ring for online users
                                                }}
                                                alt={user.name}
                                                src={user.profileImage || 'https://via.placeholder.com/150'} // Default image
                                            />
                                            <ListItemText
                                                primary={user.name}
                                                secondary="Online"
                                            />
                                            <CheckCircle sx={{ color: 'green', marginLeft: 'auto' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Card>
                        </Grid>

                        {/* Offline Users */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ padding: '10px', backgroundColor: '#f9fbe7', borderRadius: '8px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', color: 'grey' }}>
                                    Offline Users
                                </Typography>
                                <List>
                                    {offlineUsersList.map(user => (
                                        <ListItem
                                            key={user.id}
                                            sx={{
                                                backgroundColor: '#ffffff',
                                                marginBottom: '10px',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {/* Profile Picture with Grey Ring for Offline Users */}
                                            <Avatar
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    marginRight: '10px',
                                                    border: '3px solid grey', // Grey ring for offline users
                                                }}
                                                alt={user.name}
                                                src={user.profileImage || 'https://via.placeholder.com/150'} // Default image
                                            />
                                            <ListItemText
                                                primary={user.name}
                                                secondary="Offline"
                                            />
                                            <PowerSettingsNew sx={{ color: 'grey', marginLeft: 'auto' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </>
            )}
        </Box>
    );
};

export default AdminUsers;