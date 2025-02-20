import React from 'react'
import {
  PersonOutline as PersonIcon,
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
  Add as AddIcon,
} from '@mui/icons-material'
import { Box, Chip } from '@mui/material'
import { Dashboard } from '../Dashboard'
import { useUserManagement } from '../../hooks/useUserManagement'
import { tableStyles } from '../Dashboard/components/DashboardTable/DashboardTable.styles'
import { useNavigate } from 'react-router-dom'
import { GET_ROLE_ICON } from './constants/constants'
import { fetchUsers } from '../../serviecs/userService'
import { IUser } from './UserManagement.interface'

const UserManagement = () => {
  const {
    users,
    loading,
    error,
    order,
    orderBy,
    searchQuery,
    roleFilter,
    statusFilter,
    setSearchQuery,
    handleRequestSort,
    setRoleFilter,
    setStatusFilter,
  } = useUserManagement()

  const navigate = useNavigate()

  const columns = [
    {
      id: 'name',
      label: 'Name',
      sortable: true,
      render: (user: IUser) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ color: 'rgba(255, 255, 255, 0.9)', display: 'flex' }}>
            {GET_ROLE_ICON(user.role)}
          </Box>
          {user.name}
        </Box>
      ),
    },
    {
      id: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      id: 'role',
      label: 'Role',
      sortable: true,
      render: (user: IUser) => (
        <Chip
          icon={GET_ROLE_ICON(user.role)}
          label={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          sx={{
            ...tableStyles.chipBase,
            background:
              'linear-gradient(135deg, rgba(39, 41, 82, 0.4) 0%, rgba(45, 48, 95, 0.4) 100%)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(39, 41, 82, 0.6) 0%, rgba(45, 48, 95, 0.6) 100%)',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          }}
        />
      ),
    },
    {
      id: 'active',
      label: 'Status',
      sortable: true,
      render: (user: IUser) => (
        <Chip
          icon={<PowerIcon />}
          label={user.active ? 'Active' : 'Inactive'}
          sx={{
            ...tableStyles.chipBase,
            background: user.active
              ? 'linear-gradient(135deg, rgba(39, 41, 82, 0.4) 0%, rgba(45, 48, 95, 0.4) 100%)'
              : 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: user.active
                ? 'linear-gradient(135deg, rgba(39, 41, 82, 0.6) 0%, rgba(45, 48, 95, 0.6) 100%)'
                : 'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.4) 100%)',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          }}
        />
      ),
    },
    {
      id: 'actions',
      label: 'Actions',
      sortable: false,
    },
  ]

  const getRowActions = (user: IUser) => [
    {
      icon: <EditIcon fontSize="small" />,
      tooltip: 'Edit User',
      onClick: () => {
        navigate(`edit/${user._id}`, { state: { user } })
        console.log('Edit user:', user._id)
      },

      sx: {
        color: 'white',
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    {
      icon: <PowerIcon fontSize="small" />,
      tooltip: user.active ? 'Deactivate User' : 'Activate User',
      onClick: () => console.log('Toggle user status:', user._id),
      sx: {
        color: 'white',
        background: user.active
          ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          background: user.active
            ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  ]

  return (
    <>
      <Dashboard
        title="User Management"
        titleIcon={<PersonIcon />}
        actionButton={{
          text: 'Add User',
          icon: <AddIcon />,
          onClick: () => navigate('add'),
        }}
        onRefresh={fetchUsers}
        data={users}
        loading={loading}
        error={error}
        searchPlaceholder="Search users..."
        filterOptions={{
          role: {
            label: 'Role',
            options: [
              { value: 'all', label: 'All Roles' },
              { value: 'admin', label: 'Admins' },
              { value: 'employee', label: 'Employees' },
              { value: 'buyer', label: 'Buyers' },
            ],
          },
          status: {
            label: 'Status',
            options: [
              { value: 'all', label: 'All Status' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ],
          },
        }}
        columns={columns}
        getRowActions={getRowActions}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        orderBy={orderBy}
        order={order}
        onSort={() => {}} //handleRequestSort
        totalItems={users.length}
      />
    </>
  )
}

export default UserManagement
