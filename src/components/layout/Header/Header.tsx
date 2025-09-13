import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
export const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: 1 }}>
          Rask
        </Typography>
        <Button color="inherit">login</Button>
      </Toolbar>
    </AppBar>
  </Box>
)
