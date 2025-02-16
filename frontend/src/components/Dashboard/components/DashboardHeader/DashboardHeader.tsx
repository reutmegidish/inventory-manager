import React from 'react'
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { DashboardHeaderProps } from './DashboardHeader.interface'
import { headerStyles } from './DashboardHeader.styles'

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  titleIcon,
  actionButton,
  onRefresh,
}) => {
  return (
    <Box sx={headerStyles.wrapper}>
      <Typography variant="h4" sx={headerStyles.title}>
        <Box component="span" sx={headerStyles.titleIcon}>
          {titleIcon}
        </Box>
        {title}
      </Typography>
      <Box sx={headerStyles.actions}>
        {actionButton && (
          <Button
            variant="contained"
            startIcon={actionButton.icon}
            onClick={actionButton.onClick}
            sx={headerStyles.actionButton}
          >
            {actionButton.text}
          </Button>
        )}
        <Tooltip title="Refresh" arrow>
          <IconButton onClick={onRefresh} sx={headerStyles.refreshButton}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}
