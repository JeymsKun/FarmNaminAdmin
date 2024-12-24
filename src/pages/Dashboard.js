import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import UpdateIcon from '@mui/icons-material/Update';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Home from './Home';
import Settings from './Settings';
import Graphs from './Graphs';
import Users from './Users';
import Reports from './Reports';
import officialLogo from '../img/official_logo.png';
import Forms from './Forms';
import Emails from './Emails';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import Profile from './Profile';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    backgroundColor: '#4caf50',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Dashboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [updatesOpen, setUpdatesOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (section) => {
        if (section === 'Updates') {
            setUpdatesOpen(!updatesOpen);
        } else {
            setActiveSection(section);
        }
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={officialLogo} alt="Official Logo" style={{ marginRight: '10px', height: '40px' }} />
                    {!isMobile && (
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            FarmNamin Admin
                        </Typography>
                    )}
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="body1" noWrap component="div" sx={{ marginRight: '20px' }}>
                        Default User
                    </Typography>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                {[
                    { text: 'Home', icon: <HomeIcon /> },
                    { text: 'Profile', icon: <AccountCircle /> },
                    { text: 'Users', icon: <PeopleIcon /> },
                    { text: 'Graphs', icon: <BarChartIcon /> },
                    { text: 'Reports', icon: <ReportIcon /> },
                    { text: 'Updates', icon: <UpdateIcon />, expandable: true },
                    { text: 'Settings', icon: <SettingsIcon /> },
                ].map((item) => (
                    <React.Fragment key={item.text}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleMenuClick(item.text)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                                {item.expandable ? (updatesOpen ? <ExpandLess /> : <ExpandMore />) : null}
                            </ListItemButton>
                        </ListItem>
                        {item.text === 'Updates' && (
                            <Collapse in={updatesOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }} onClick={() => setActiveSection('Forms')}>
                                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                                        <ListItemText primary="Forms" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }} onClick={() => setActiveSection('Emails')}>
                                        <ListItemIcon><EmailIcon /></ListItemIcon>
                                        <ListItemText primary="Emails" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {activeSection === 'Home' && <Home />}
                {activeSection === 'Profile' && <Profile />}
                {activeSection === 'Settings' && <Settings />}
                {activeSection === 'Graphs' && <Graphs />}
                {activeSection === 'Users' && <Users />}
                {activeSection === 'Reports' && <Reports />}
                {activeSection === 'Forms' && <Forms />}
                {activeSection === 'Emails' && <Emails />}
            </Main>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Popover>
        </Box>
    );
};

export default Dashboard;
