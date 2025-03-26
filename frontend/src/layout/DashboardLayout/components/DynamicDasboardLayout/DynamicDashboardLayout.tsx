import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuItem from './components/Sidebar/Sidebar.interface'
import { TopBar } from './components/TopBar/TopBar'
import { useStyles } from './DynamicDashboardLayout.styles'
import { Box } from '@mui/material'
import { Sidebar } from './components/Sidebar/Sidebar'

interface DynamicDashboardLayoutProps {
  menuItems: MenuItem[]
}

export const DynamicDashboardLayout: React.FC<DynamicDashboardLayoutProps> = ({
  menuItems,
}) => {
  const styles = useStyles()

  return (
    <Box sx={styles.root}>
      <TopBar />
      <Box sx={styles.main}>
        <Sidebar menuItems={menuItems} />
        <Box component="main" sx={styles.content}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
