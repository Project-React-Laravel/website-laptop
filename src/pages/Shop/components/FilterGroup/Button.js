import { Button } from "@mui/material";

function Button1({ten,key}) {
  return (
    <Button
      key={key}
      variant="outlined"
      sx={{
        fontWeight: 400,
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
