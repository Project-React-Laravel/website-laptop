import { Select, MenuItem, FormControl } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/system";
function Select1() {
  const [age, setAge] = React.useState("");
  const CustomSelect = styled(Select)(
    {
        borderRadius: 0
    }
  )
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: "100%" }}>
      <CustomSelect
        value={age}
        className="select"
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomSelect>
    </FormControl>
  );
}

export default Select1;
