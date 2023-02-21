import { Button } from "@mui/material";
import { useState,useRef } from "react";

function Button1({ ten }) {
  const [bg, setBg] = useState(false);
  const BtnRef = useRef()
  const handleClick = () =>{
    setBg(true)
  }
  const active = {
    "&:active": {
      backgroundColor: "red",
    },
  }
  return (
    <Button
      ref={BtnRef}
      variant="outlined"
      onClick={handleClick}
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
