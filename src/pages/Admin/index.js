import { Box, Typography, Breadcrumbs, Link, TextField, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Label } from '@mui/icons-material';

function Admin() {
    return (
        <Box display={'flex'} justifyContent="center" sx={{height: '900px', backgroundColor: '#f8f8f8',flex:'1' }}>
            <Box display={'flex'} flexDirection={'column'} justifyContent="space-around" sx={{ width: '1170px', height: '600px' }}>
                <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: '17px', m: 10 }}>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/admin"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/admin"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        Create
                    </Link>
                </Breadcrumbs>
                <Typography variant="h2" gutterBottom>
                    Add new product
                </Typography>
                <Box
                    display="flex"
                    flexDirection={'column'}
                    justifyContent={'space-around'}
                    alignItems={'center'}
                    sx={{
                        padding: '20px',
                        width: '100%',
                        height: '419px',
                        borderRadius: 2,
                        border: '2px solid #e6ebf1',
                        backgroundColor: '#fff',
                    }}
                >
                    <TextField variant="outlined" label="Name Product" fullWidth></TextField>
                    <TextField variant="outlined" label="Price" fullWidth></TextField>
                    <TextField variant="outlined" label="Description" fullWidth></TextField>
                    <TextField variant="outlined" label="Graphic Card" fullWidth></TextField>
                    <TextField variant="outlined" label="Processor" fullWidth></TextField>
                    <TextField variant="outlined" label="New" fullWidth></TextField>
                    <Box style={{ position: 'relative', width: '100%', height: '50px' }}>
                        <Button
                            variant="contained"
                            size="medium"
                            style={{ fontSize: '17px', position: 'absolute', bottom: 0, right: 0 }}
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Admin;
