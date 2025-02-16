import React, { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
  Paper,
  Alert,
} from '@mui/material'
import axios from 'axios'
import { navigateUserRole } from '../../utility/navigateUserRole'
import { useNavigate } from 'react-router-dom'
import { LoginFormData } from './Login.interface'

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setError(null)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/login',
        formData
      )

      if (response.status === 200) {
        const role = response.data.user.role
        localStorage.setItem('userRole', role)

        navigateUserRole(role, navigate)
      }
    } catch (err: any) {
      if (err.response) {
        const errorMessage =
          err.response.data.message || 'An unknown error occurred'
        setError(errorMessage)
      } else if (err.request) {
        setError(
          'No response from the server. Please check your network connection.'
        )
      } else {
        setError('An unknown error occurred: ' + err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <img
              src="/assets/img/eut_logo.jpg"
              alt="Logo"
              style={{ width: '200px', marginBottom: '20px' }}
            />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
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
              margin="normal"
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
          </form>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login
