import { Button } from "@mui/material";
import { useRef } from "react";

function Button1({ ten }) {
  const BtnRef = useRef()
  return (
    <Button
      ref={BtnRef}
      sx={{
        border: '1px solid #ccc',
        width: "50px",
        fontWeight: 300,
        margin: "3px",
        color:"#797979",
        "&:active":{
          backgroundColor: "#ffbf44",
          color: "#000"
        }
      }}
    >
      {ten}
    </Button>
  );
}

export default Button1;
