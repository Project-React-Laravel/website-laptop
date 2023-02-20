import { Slider, Typography, Box } from "@mui/material";

function Slider1({ handle, values }) {
  return (
    <Box
    sx={{width: '100%'}}>
      <Slider
        defaultValue={100000}
        onChange={(e) => handle(e)}
        size="small"
        min={10000}
        max={50000000}
        sx={{
          color: "#1976d2",
          "& .MuiSlider-thumb": {
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px #1976d2,
                    0.16
                  )}`,
            },
            "&.Mui-active": {
              boxShadow: `0px 0px 0px 14px #1976d2,
                    0.16
                  )}`,
            },
          },
        }}
      />
      <Typography gutterBottom sx={{border: '1px'}}>
        Price: {values}
      </Typography>
    </Box>
  );
}

export default Slider1;
