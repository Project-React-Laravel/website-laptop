import { Select, MenuItem, FormControl } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/system';
function Select1() {
    const [size, setSize] = React.useState('');
    const CustomSelect = styled(Select)({
        borderRadius: 0,
    });
    const CustomItem = styled(MenuItem)({
        color: '#222222',
        fontSize: '13px',
        textAlign: 'center',
        lineHeight: '19.5px',
    });
    const handleChange = (event) => {
        setSize(event.target.value);
    };
    return (
        <FormControl sx={{ minWidth: '100%' }}>
            <CustomSelect
                value={size}
                className="select"
                onChange={handleChange}
                displayEmpty
                style={{
                    color: '#222222',
                    fontSize: '13px',
                    lineHeight: '19.5px',
                }}
            >
                <CustomItem value="">Select size</CustomItem>
                <CustomItem value={10}>Medium</CustomItem>
                <CustomItem value={20}>Large</CustomItem>
                <CustomItem value={30}>Extra Large</CustomItem>
            </CustomSelect>
        </FormControl>
    );
}

export default Select1;
