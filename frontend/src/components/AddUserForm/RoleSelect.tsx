import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { useStyles } from './AddUserForm.styles'
import { roles } from './formData.constants'
import { RoleSelectProps } from './user.interface'

const RoleSelect: React.FC<RoleSelectProps> = ({
  value,
  onChange,
  required = false,
}) => {
  const styles = useStyles()
  return (
    <FormControl fullWidth sx={styles.textField}>
      <InputLabel>Role</InputLabel>
      <Select value={value} onChange={(e) => onChange(e)} required={required}>
        {roles.map((role) => (
          <MenuItem key={role.value} value={role.value}>
            {role.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default RoleSelect
