import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Switch,
  FormControlLabel,
  Paper,
  Alert,
  Snackbar,
  Select,
  InputLabel,
  MenuItem,
  CircularProgress,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useProductFormComponent } from './useProductFormComponent'

export const ProductFormComponent: React.FC = () => {
  const {
    formData,
    imageUrl,
    setImageUrl,
    imageName,
    setImageName,
    snackbar,
    stores,
    categories,
    loading,
    handleChange,
    handleNumberChange,
    handleSwitchChange,
    handleAddImage,
    handleSubmit,
    handleChangeStore,
    handleCloseSnackbar,
    handleRemoveImage,
    handleChangeCategory,
  } = useProductFormComponent()
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Paper elevation={3} sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Add New Product
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Product Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    label="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleNumberChange}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Product Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    label="Stock Quantity"
                    name="numberInStock"
                    value={formData.numberInStock}
                    onChange={handleNumberChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <InputLabel id="store-label">Store</InputLabel>
                  <Select
                    labelId="store-label"
                    id="storeId"
                    value={formData.storeId}
                    onChange={handleChangeStore}
                    label="Store"
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select Store
                    </MenuItem>

                    {stores.map((store) => (
                      <MenuItem key={store._id} value={store._id}>
                        {store.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="categoryId"
                    value={formData.categoryId}
                    onChange={handleChangeCategory}
                    label="Category"
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select Category
                    </MenuItem>

                    {categories.map((category) => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="h6" gutterBottom>
                    Add Images
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <TextField
                        fullWidth
                        label="Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <TextField
                        fullWidth
                        label="Image Name"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 2 }}>
                      <Button
                        variant="contained"
                        onClick={handleAddImage}
                        fullWidth
                        sx={{ height: '100%' }}
                      >
                        Add Image
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                {formData.images.length > 0 && (
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle1">Added Images:</Typography>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                      {formData.images.map((image, index) => (
                        <Grid key={index}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              p: 1,
                              border: '1px solid #ddd',
                              borderRadius: 1,
                            }}
                          >
                            <Typography variant="body2">
                              {image.name}
                            </Typography>
                            <Button
                              size="small"
                              color="error"
                              onClick={() => handleRemoveImage(index)}
                            >
                              Remove
                            </Button>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                )}
                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.active}
                        onChange={handleSwitchChange}
                        name="active"
                      />
                    }
                    label="Active Product"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    Add Product
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              sx={{ width: '100%' }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </>
      )}{' '}
    </>
  )
}
