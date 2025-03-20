import React from 'react'
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
  FormControl,
} from '@mui/material'
import { UseLogin } from './UseLogin'

export const Login: React.FC = () => {
  const { formData, loading, error, handleSubmit, handleChange } = UseLogin()

  return (
    <Box>
      <Box>
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography component="h1">Sign in</Typography>
        </Box>

        <FormControl component="form" onSubmit={handleSubmit}>
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
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}
