import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import {
  adminSidebarItems,
  DynamicDashboardLayout,
  storeSidebarItems,
} from './layout'
import { Login, ProtectedRoute } from './components'
import {
  UserManagementPage,
  CategoriesManagementPage,
  StoreManagementPage,
  UserForm,
  CategoriesForm,
  StoreForm,
  ProductsManagementPage,
  OrdersManagementPage,
} from './modules'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/product" replace />} />
        <Route path="/product" element={<ProductForm />} /> */}

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

        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute requiredRoles={['employee']}>
              <DynamicDashboardLayout menuItems={storeSidebarItems} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="products" />} />
          <Route path="products" element={<ProductsManagementPage />} />
          {/* <Route path="products/add" element={<ProductForm />} />
          <Route path="products/edit/:id" element={<ProductForm />} />
          <Route path="products/details/:id" element={<ProductForm />} /> */}

          <Route index element={<Navigate to="orders" />} />
          <Route path="orders" element={<OrdersManagementPage />} />
          {/* <Route path="orders/add" element={<OrdersForm />} />
          <Route path="orders/edit/:id" element={<OrdersForm />} />
          <Route path="orders/details/:id" element={<OrdersForm />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
