import { Slider, Typography, Box } from '@mui/material';

var nf = Intl.NumberFormat();

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10000000,
        label: '10Tr',
    },
    {
        value: 30000000,
        label: '30Tr',
    },
    {
        value: 50000000,
        label: '50Tr',
    },
    {
        value: 70000000,
        label: '70Tr',
    },
    {
        value: 100000000,
        label: '100Tr',
    },
];
function Slider1({ handle, values }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={values}
                max={100000000}
                onChange={handle}
                valueLabelDisplay="auto"
                disableSwap
                marks={marks}
                sx={{
                    color: '#ffbf44',
                    '& .MuiSlider-thumb': { color: '#fff',width: '15px',height: '15px' },

                    '& .MuiSlider-rail': {
                        opacity: 0.5,
                        backgroundColor: '#bfbfbf',
                    },
                }}
            />
            <Typography gutterBottom sx={{ border: '1px' }}>
                Price: {nf.format(values[0])} VND {' - '}
                {nf.format(values[1])} VND
            </Typography>
        </Box>
    );
}

export default Slider1;
