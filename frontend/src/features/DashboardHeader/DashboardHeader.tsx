import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Refresh as RefreshIcon } from '@mui/icons-material'
import { headerStyles } from './headerStyles'

interface DashboardHeaderProps {
  title: string
  icon: React.ReactNode
  onRefresh?: () => void
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  icon,
  onRefresh,
}) => {
  return (
    <Box sx={headerStyles.container}>
      <Box sx={headerStyles.titleWrapper}>
        <Box sx={headerStyles.icon}>{icon}</Box>
        <Typography sx={headerStyles.title}>{title}</Typography>
      </Box>

      {onRefresh && (
        <IconButton onClick={onRefresh} sx={headerStyles.refreshButton}>
          <RefreshIcon sx={headerStyles.refreshIcon} />
        </IconButton>
      )}
    </Box>
  )
}

export default DashboardHeader
