import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { adminSidebarItems, DynamicDashboardLayout } from './layout'
import { ProtectedRoute } from './components'
import {
  UserManagementPage,
  CategoriesManagementPage,
  StoreManagementPage,
  UserForm,
  CategoriesForm,
  StoreForm,
  ProductForm,
} from './modules'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/product" replace />} />
        <Route path="/product" element={<ProductForm />} />

        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} /> */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <DynamicDashboardLayout menuItems={adminSidebarItems} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="users" />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="users/add" element={<UserForm />} />
          <Route path="users/edit/:id" element={<UserForm />} />
          <Route path="users/details/:id" element={<UserForm />} />

          <Route index element={<Navigate to="categories" />} />
          <Route path="categories" element={<CategoriesManagementPage />} />
          <Route path="categories/add" element={<CategoriesForm />} />
          <Route path="categories/edit/:id" element={<CategoriesForm />} />
          <Route path="categories/details/:id" element={<CategoriesForm />} />

          <Route index element={<Navigate to="store" />} />
          <Route path="store" element={<StoreManagementPage />} />
          <Route path="store/add" element={<StoreForm />} />
          <Route path="store/edit/:id" element={<StoreForm />} />
          <Route path="store/details/:id" element={<StoreForm />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
