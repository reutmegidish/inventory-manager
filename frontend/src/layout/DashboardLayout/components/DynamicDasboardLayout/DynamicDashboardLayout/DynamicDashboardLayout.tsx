import React, { useState } from 'react'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material'
import { Menu as MenuIcon, Logout as LogoutIcon } from '@mui/icons-material'
import { Outlet, useNavigate } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { DynamicDashboardLayoutProps } from './DynamicDashboardLayout.interface'
import { dashboardStyles } from './DynamicDashboardLayout.styles'

const DynamicDashboardLayout: React.FC<DynamicDashboardLayoutProps> = ({
  menuItems,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <Box sx={dashboardStyles.root}>
      <AppBar position="fixed" sx={dashboardStyles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            edge="start"
            sx={dashboardStyles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={dashboardStyles.title}>
            Admin Dashboard
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={isSidebarOpen}
        sx={dashboardStyles.drawer}
      >
        <Toolbar />
        <Sidebar menuItems={menuItems} />
      </Drawer>

      <Box component="main" sx={dashboardStyles.content}>
        <Toolbar />
        <Box sx={dashboardStyles.outletContainer}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default DynamicDashboardLayout
