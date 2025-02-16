import {
  People as PeopleIcon,
  Category as CategoryIcon,
  Store as StoreIcon,
} from '@mui/icons-material'
import MenuItem from '../components/Sidebar/Sidebar.interface'

export const adminSidebarItems: MenuItem[] = [
  { text: 'Users', icon: <PeopleIcon />, path: '/admin-dashboard/users' },
  {
    text: 'Categories',
    icon: <CategoryIcon />,
    path: '/admin-dashboard/categories',
  },
  { text: 'Stores', icon: <StoreIcon />, path: '/admin-dashboard/stores' },
]
