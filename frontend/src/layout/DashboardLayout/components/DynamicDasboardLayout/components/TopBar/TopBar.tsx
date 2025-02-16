import { FC } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material'
import { LogoutOutlined } from '@mui/icons-material'
import { useStyles } from './TopBar.styles'

const TopBar: FC = () => {
  const styles = useStyles()
  const userName = 'User_from_context'

  const handleLogout = () => {
    console.log('Logout clicked')
  }

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar>
        <Box sx={styles.logo}>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Box>
        <Box sx={styles.userSection}>
          <Typography variant="body1" sx={styles.greeting}>
            Hello: {userName}
          </Typography>
          <Tooltip title="Logout">
            <IconButton
              color="inherit"
              onClick={handleLogout}
              size="large"
              edge="end"
            >
              <LogoutOutlined />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
