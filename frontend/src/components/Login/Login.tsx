import React from 'react'
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
  FormControl,
  Container,
  Paper,
} from '@mui/material'
import { useLogin } from './UseLogin'
import { loginStyles } from './Login.styles'

export const Login: React.FC = () => {
  const { formData, loading, error, handleSubmit, handleChange } = useLogin()

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={loginStyles.container}>
        <Paper elevation={3} sx={loginStyles.paper}>
          <Box sx={loginStyles.titleContainer}>
            <Typography component="h1" variant="h4" sx={loginStyles.title}>
              Login
            </Typography>
          </Box>

          <FormControl
            component="form"
            onSubmit={handleSubmit}
            sx={loginStyles.form}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={loginStyles.textField}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              sx={loginStyles.textField}
            />

            {error && (
              <Alert severity="error" sx={loginStyles.errorAlert}>
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={loginStyles.submitButton}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'LogIn'}
            </Button>
          </FormControl>
        </Paper>
      </Box>
    </Container>
  )
}
