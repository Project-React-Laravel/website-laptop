import { Button } from "@mui/material";
import { useRef } from "react";

function Button1({ ten }) {
  const BtnRef = useRef()
  // const active = {
  //   "&:active": {
  //     backgroundColor: "red",
  //   },
  // }
  return (
    <Button
      ref={BtnRef}
      variant="outlined"
      sx={{
        width: "50px",
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
