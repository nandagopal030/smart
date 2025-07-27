// AddRouteForm.tsx
import { useState } from 'react';
import {
  Box, Button, TextField, Typography, Stack, Paper
} from '@mui/material';

const AddRouteForm = () => {
  const [path, setPath] = useState('');
  const [componentName, setComponentName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoute = {
      path,
      componentName,
    };

    const existing = JSON.parse(localStorage.getItem('customRoutes') || '[]');
    localStorage.setItem('customRoutes', JSON.stringify([...existing, newRoute]));
    setPath('');
    setComponentName('');
    alert('Route added! Check sidebar.');
  };
  return (
    <Paper elevation={3} sx={{ p: 4, m: 3, maxWidth: 600 }}>
      <Typography variant="h5">Add Dynamic Route</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField label="Route Path (e.g. /about)" value={path} onChange={(e) => setPath(e.target.value)} required />
          <TextField label="Component Name" value={componentName} onChange={(e) => setComponentName(e.target.value)} required />
          <Button type="submit" variant="contained">Add Route</Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default AddRouteForm;
