import EmailIcon from '@mui/icons-material/Email';
import { Box, Button, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Emails = () => {
    const [loading, setLoading] = useState(true);
    const [emails, setEmails] = useState([]);

    // Simulate fetching emails from the database
    useEffect(() => {
        // Replace with your fetch logic
        setTimeout(() => {
            setEmails([
                { id: 1, subject: 'Product Inquiry', sender: 'user1@example.com', body: 'I have a question about your product.' },
                { id: 2, subject: 'Account Support', sender: 'user2@example.com', body: 'I need help with my account.' },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleOpenEmailClient = () => {
        // Open the official email client (e.g., Gmail)
        window.open('https://mail.google.com', '_blank');
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f1f8e9', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom color="green">
                Admin Emails
            </Typography>

            <Button
                variant="contained"
                startIcon={<EmailIcon />}
                sx={{ backgroundColor: '#4caf50', color: '#fff', marginBottom: '20px' }}
                onClick={handleOpenEmailClient}
            >
                Open Official Email
            </Button>

            {loading ? (
                <CircularProgress color="success" />
            ) : (
                <List>
                    {emails.map((email) => (
                        <ListItem key={email.id} sx={{ backgroundColor: '#e8f5e9', marginBottom: '10px', borderRadius: '8px' }}>
                            <ListItemText
                                primary={`Subject: ${email.subject}`}
                                secondary={`From: ${email.sender}`}
                            />
                            <Button
                                variant="text"
                                sx={{ color: '#4caf50' }}
                                onClick={() => alert(`Email body:\n\n${email.body}`)} // Fixed string interpolation
                            >
                                View Details
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default Emails;