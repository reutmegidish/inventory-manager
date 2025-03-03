import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Refresh as RefreshIcon } from '@mui/icons-material'
import { headerStyles } from './headerStyles'

export interface DashboardHeaderProps {
  dashboardHeaderTitle: string
  dashboardHeaderIcon: React.ReactNode
  setIsOnRefresh: (value: boolean) => void
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  dashboardHeaderTitle,
  dashboardHeaderIcon,
  setIsOnRefresh,
}) => {
  return (
    <Box sx={headerStyles.container}>
      <Box sx={headerStyles.titleWrapper}>
        <Box sx={headerStyles.icon}>{dashboardHeaderIcon}</Box>
        <Typography sx={headerStyles.title}>{dashboardHeaderTitle}</Typography>
      </Box>

      <IconButton
        onClick={() => {
          setIsOnRefresh(true)
        }}
        sx={headerStyles.refreshButton}
      >
        <RefreshIcon sx={headerStyles.refreshIcon} />
      </IconButton>
    </Box>
  )
}
