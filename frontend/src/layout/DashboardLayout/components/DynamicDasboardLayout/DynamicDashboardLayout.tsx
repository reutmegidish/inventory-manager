import React from 'react'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import MenuItem from './components/Sidebar/Sidebar.interface'
import TopBar from './components/TopBar/TopBar'
import Sidebar from './components/Sidebar/Sidebar'
import { useStyles } from './DynamicDashboardLayout.styles'
import { Box } from '@mui/material'

interface DynamicDashboardLayoutProps {
  menuItems: MenuItem[]
}

const DynamicDashboardLayout: FC<DynamicDashboardLayoutProps> = ({
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

export default DynamicDashboardLayout
