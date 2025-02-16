import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Login from './features/Login/Login'
import DynamicDashboardLayout from './layout/DashboardLayout/components/DynamicDasboardLayout/DynamicDashboardLayout'
import { adminSidebarItems } from './layout/DashboardLayout/components/DynamicDasboardLayout/constants/adminSidebarItems'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import UserManagement from './components/UserManagement'
import { AddUserForm } from './components/AddUserForm/AddUserForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <DynamicDashboardLayout menuItems={adminSidebarItems} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="users/add" element={<AddUserForm />} />
          <Route path="users/edit/:id" element={<AddUserForm />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
