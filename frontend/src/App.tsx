import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { adminSidebarItems } from './layout/DashboardLayout/components/DynamicDasboardLayout/constants/adminSidebarItems'
import { DynamicDashboardLayout } from './layout/DashboardLayout/components/DynamicDasboardLayout/DynamicDashboardLayout'
import { UserManagementPage } from './modules/adminMangement/pages/UserManagement/UserManagementPage'
import { Login, ProtectedRoute, UserForm } from './components'

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
          <Route path="users" element={<UserManagementPage />} />
          <Route path="users/add" element={<UserForm />} />
          <Route path="users/edit/:Id" element={<UserForm />} />

          <Route index element={<Navigate to="categories" replace />} />
          {/* <Route path="categories" element={<CategoriesTable />} /> */}
          {/* <Route path="categories/add" element={<AddCategoriesForm />} /> */}
          {/* <Route path="categories/edit/:id" element={<CategoryForm />} /> */}

          <Route index element={<Navigate to="store" replace />} />
          {/* <Route path="store" element={<StoreTable />} /> */}
          {/* <Route path="categories/add" element={<AddStoreForm />} />
          <Route path="categories/edit/:id" element={<AddStoreForm />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
