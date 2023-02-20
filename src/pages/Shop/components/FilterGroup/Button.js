import { Button } from "@mui/material";

function Button1({ten}) {
  return (
    <Button
      variant="outlined"
      sx={{
        width:"50px",
        fontWeight: 300,
        margin: "3px",
        "&:hover": {
          backgroundColor: "#1976d2",
          color: "#fff",
        },
      }}
    >
      {ten}
    </Button>
  );
}

export default Button1;
