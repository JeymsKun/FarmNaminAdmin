import { ExitToApp, Notifications, Person, PrivacyTip, Settings } from '@mui/icons-material';
import { Box, Button, Divider, FormControlLabel, List, ListItem, ListItemText, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Notification Page
const NotificationPage = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'New Order Received',
            message: 'You have received a new order from John Doe.',
            timestamp: '2025-01-05 10:00 AM',
        },
        {
            id: 2,
            title: 'Payment Processed',
            message: 'The payment for order #1234 has been successfully processed.',
            timestamp: '2025-01-05 09:45 AM',
        },
        {
            id: 3,
            title: 'System Update',
            message: 'The system will undergo maintenance on 2025-01-06 at 12:00 AM.',
            timestamp: '2025-01-05 09:00 AM',
        },
    ]);

    const themeColors = {
        background: '#f4f4f9',
        text: '#000000',
        divider: '#cccccc',
    };

    return (
        <Box
            sx={{
                padding: '20px',
                backgroundColor: themeColors.background,
                color: themeColors.text,
                minHeight: '100vh',
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: themeColors.text }}>
                Notifications
            </Typography>
            <Divider sx={{ marginBottom: '20px', backgroundColor: themeColors.divider }} />
            <List>
                {notifications.map((notification) => (
                    <Box key={notification.id} sx={{ marginBottom: '10px' }}>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemText
                                primary={
                                    <Typography variant="h6" sx={{ color: themeColors.text }}>
                                        {notification.title}
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography
                                            variant="body1"
                                            sx={{ color: themeColors.text, marginBottom: '5px' }}
                                        >
                                            {notification.message}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: themeColors.text }}>
                                            {notification.timestamp}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider sx={{ backgroundColor: themeColors.divider }} />
                    </Box>
                ))}
            </List>
        </Box>
    );
};

// Profile Settings
const ProfileSettings = () => {
    const [username, setUsername] = useState('Admin User');
    const [email, setEmail] = useState('admin@example.com');
    const [bio, setBio] = useState('This is a short bio.');

    const themeColors = {
        background: '#f4f4f9',
        text: '#000000',
        divider: '#cccccc',
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ color: themeColors.text }}>
                Profile Settings
            </Typography>
            <Divider sx={{ marginBottom: '20px', backgroundColor: themeColors.divider }} />

            {/* Username */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" gutterBottom sx={{ color: themeColors.text }}>
                    Username
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                        input: { color: themeColors.text },
                        label: { color: themeColors.text },
                        borderColor: themeColors.divider,
                    }}
                />
            </Box>

            {/* Email */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" gutterBottom sx={{ color: themeColors.text }}>
                    Email
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        input: { color: themeColors.text },
                        label: { color: themeColors.text },
                        borderColor: themeColors.divider,
                    }}
                />
            </Box>

            {/* Bio */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" gutterBottom sx={{ color: themeColors.text }}>
                    Bio
                </Typography>
                <TextField
                    label="Bio"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    sx={{
                        input: { color: themeColors.text },
                        label: { color: themeColors.text },
                        borderColor: themeColors.divider,
                    }}
                />
            </Box>

            {/* Save Changes Button */}
            <Box sx={{ marginBottom: '20px' }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#ffffff',
                        '&:hover': { backgroundColor: '#1565c0' },
                    }}
                >
                    Save Changes
                </Button>
            </Box>
        </Box>
    );
};

// Privacy Settings
const PrivacySettings = () => {
    const themeColors = {
        background: '#f4f4f9',
        text: '#000000',
        divider: '#cccccc',
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ color: themeColors.text }}>
                Privacy Settings
            </Typography>
            <Divider sx={{ marginBottom: '20px', backgroundColor: themeColors.divider }} />
            
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ color: themeColors.text }}>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" sx={{ color: themeColors.text }}>
                    This is your privacy policy. Here, you can manage who can view your information and what you share with others.
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <FormControlLabel
                    control={<Switch />}
                    label="Share My Data"
                    sx={{ color: themeColors.text }}
                />
            </Box>
        </Box>
    );
};

// Admin Settings
const AdminSettings = () => {
    const [currentSection, setCurrentSection] = useState('General');
    const [siteName, setSiteName] = useState('FarmNamin Admin');
    const [adminEmail, setAdminEmail] = useState('farmnamin.official@gmail.com');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeColors = {
        background: isDarkMode ? '#121212' : '#f4f4f9',
        text: isDarkMode ? '#e0e0e0' : '#000000',
        sidebar: isDarkMode ? '#1e1e1e' : '#ffffff',
        button: isDarkMode ? '#bb86fc' : '#1976d2',
        border: isDarkMode ? '#333333' : '#cccccc',
        divider: isDarkMode ? '#444444' : '#e0e0e0',
    };

    const GeneralSettings = () => {
        const [isEditing, setIsEditing] = useState(false);

        const handleEditToggle = () => {
            setIsEditing(!isEditing);
        };

        return (
            <Box>
                <Typography variant="h5" gutterBottom sx={{ color: themeColors.text }}>
                    General Settings
                </Typography>
                <Divider sx={{ marginBottom: '20px', backgroundColor: themeColors.divider }} />

                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: themeColors.text }}>
                        Website Name
                    </Typography>
                    {isEditing ? (
                        <TextField
                            label="Website Name"
                            variant="outlined"
                            fullWidth
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                            sx={{
                                input: { color: themeColors.text },
                                label: { color: themeColors.text },
                                borderColor: themeColors.border,
                            }}
                        />
                    ) : (
                        <Typography sx={{ color: themeColors.text }}>{siteName}</Typography>
                    )}
                </Box>

                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: themeColors.text }}>
                        Admin Email
                    </Typography>
                    {isEditing ? (
                        <TextField
                            label="Admin Email"
                            variant="outlined"
                            fullWidth
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            sx={{
                                input: { color: themeColors.text },
                                label: { color: themeColors.text },
                                borderColor: themeColors.border,
                            }}
                        />
                    ) : (
                        <Typography sx={{ color: themeColors.text }}>{adminEmail}</Typography>
                    )}
                </Box>

                <Box sx={{ marginBottom: '20px' }}>
                    <Button
                        variant="contained"
                        onClick={handleEditToggle}
                        sx={{
                            backgroundColor: themeColors.button,
                            color: '#ffffff',
                            '&:hover': { backgroundColor: themeColors.button },
                        }}
                    >
                        {isEditing ? 'Save' : 'Edit'}
                    </Button>
                </Box>

                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: themeColors.text }}>
                        Dark Mode
                    </Typography>
                    <FormControlLabel
                        control={<Switch checked={isDarkMode} onChange={handleDarkModeToggle} />}
                        label={isDarkMode ? 'Enabled' : 'Disabled'}
                        sx={{ color: themeColors.text }}
                    />
                </Box>
            </Box>
        );
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: themeColors.background, color: themeColors.text }}>
            <Box
                sx={{
                    width: 250,
                    backgroundColor: themeColors.sidebar,
                    padding: '20px',
                    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                    color: themeColors.text,
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '20px', color: themeColors.text }}>
                    Admin Settings
                </Typography>
                <List>
                    <ListItem button onClick={() => setCurrentSection('General')}>
                        <Settings sx={{ color: themeColors.text }} />
                        <ListItemText primary="General" sx={{ color: themeColors.text }} />
                    </ListItem>
                    <ListItem button onClick={() => setCurrentSection('Notifications')}>
                        <Notifications sx={{ color: themeColors.text }} />
                        <ListItemText primary="Notifications" sx={{ color: themeColors.text }} />
                    </ListItem>
                    <ListItem button onClick={() => setCurrentSection('Profile')}>
                        <Person sx={{ color: themeColors.text }} />
                        <ListItemText primary="Profile" sx={{ color: themeColors.text }} />
                    </ListItem>
                    <ListItem button onClick={() => setCurrentSection('Privacy')}>
                        <PrivacyTip sx={{ color: themeColors.text }} />
                        <ListItemText primary="Privacy" sx={{ color: themeColors.text }} />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <ExitToApp sx={{ color: themeColors.text }} />
                        <ListItemText primary="Logout" sx={{ color: themeColors.text }} />
                    </ListItem>
                </List>
            </Box>

            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                {currentSection === 'General' && <GeneralSettings />}
                {currentSection === 'Notifications' && <NotificationPage />}
                {currentSection === 'Profile' && <ProfileSettings />}
                {currentSection === 'Privacy' && <PrivacySettings />}
            </Box>
        </Box>
    );
};

export default AdminSettings;