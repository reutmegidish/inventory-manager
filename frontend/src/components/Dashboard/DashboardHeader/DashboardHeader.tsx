import React from 'react'
import { Box, Typography, IconButton, Button } from '@mui/material'
import { Refresh as RefreshIcon, Add as AddIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { dashboardHeaderStyles } from './styles'

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
    <Box sx={dashboardHeaderStyles.container}>
      <Box sx={dashboardHeaderStyles.titleContainer}>
        <Box sx={dashboardHeaderStyles.icon}>{dashboardHeaderIcon}</Box>
        <Typography sx={dashboardHeaderStyles.title}>
          {dashboardHeaderTitle}
        </Typography>
      </Box>

      {addButtonText && setIsOnRefresh && (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={() => {
              navigate('add')
            }}
            startIcon={<AddIcon />}
            sx={dashboardHeaderStyles.addButton}
          >
            {addButtonText}
          </Button>

          <IconButton
            onClick={() => {
              setIsOnRefresh(true)
            }}
            sx={dashboardHeaderStyles.actionButton}
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
