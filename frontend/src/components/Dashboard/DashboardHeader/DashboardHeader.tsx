import React from 'react'
import { Box, Typography, IconButton, Button } from '@mui/material'
import { Refresh as RefreshIcon, Add as AddIcon } from '@mui/icons-material'
import { headerStyles } from './headerStyles'
import { useNavigate } from 'react-router-dom'

export interface DashboardHeaderProps {
  dashboardHeaderTitle: string
  dashboardHeaderIcon: React.ReactNode
  setIsOnRefresh?: (value: boolean) => void
  addButtonText?: string
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  dashboardHeaderTitle,
  dashboardHeaderIcon,
  setIsOnRefresh,
  addButtonText,
}) => {
  const navigate = useNavigate()

  return (
    <Box sx={headerStyles.container}>
      <Box sx={headerStyles.titleWrapper}>
        <Box sx={headerStyles.icon}>{dashboardHeaderIcon}</Box>
        <Typography sx={headerStyles.title}>{dashboardHeaderTitle}</Typography>
      </Box>

      {addButtonText && setIsOnRefresh && (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={() => {
              navigate('add')
            }}
            startIcon={<AddIcon />}
          >
            {addButtonText}
          </Button>

          <IconButton
            onClick={() => {
              setIsOnRefresh(true)
            }}
            sx={headerStyles.refreshButton}
          >
            <RefreshIcon sx={headerStyles.refreshIcon} />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
