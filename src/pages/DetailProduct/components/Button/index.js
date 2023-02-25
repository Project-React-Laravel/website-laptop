import { Button } from "@mui/material";
import { styled } from "@mui/system";

function Button1() {
  const CustomButton = styled(Button)({
    borderRadius: 0,
    backgroundColor: "#222222",
    color: "#ffffff",
    width: "314px",
    height: "50px",
    fontFamily: 'Inter',
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: "#222222",
      color: "#ffffff",
    },
  });
  return <CustomButton>Add To Cart</CustomButton>;
}

export default Button1;
