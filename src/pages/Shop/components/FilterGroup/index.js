import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Checkbox, Slider, Input } from "@mui/material";
import styles from "./FilterGroup.module.scss";
import classNames from "classnames/bind";
import * as React from "react";

const cx = classNames.bind(styles);

function FilterGroup({ children, label, type }) {
  const [values, setValue] = React.useState(100000);

  const handleSlide = (val) => {
    setValue(val.target.value);
  }
  //Checkbox
  if (type === "CheckBox") {
    return (
      <div className={cx("filter-group")}>
        <h3>{children}</h3>
        <ul className={cx("list-filter")}>
          <li className={cx("item-filter")}>
            {label.map((item,index) => {
              return (
                <FormControlLabel
                  key= {index}
                  control={<Checkbox defaultChecked size="big" />}
                  label={<span style={{ fontSize: "15px" }}>{item}</span>}
                />
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
  //Button
  else if (type === "Button") {
    return (
      <div className={cx("filter-group")}>
        <h3>{children}</h3>
        <div className={cx("button-filter")}>
          {label.map((item,index) => {
            return <Button 
            key= {index}
            variant="outlined"
            sx={{
              fontWeight: 400,
              '&:hover': {
                backgroundColor: "#1976d2",
                color: "#fff"
              }}}
            >{item}</Button>;
          })}
        </div>
      </div>
    );
  } else if (type === "Range") {
    return (
      <div className={cx("filter-group")}>
        <h3>{children}</h3>
        <div className={cx("range-filter")}>
          <Slider
            defaultValue={100000}
            onChange={(e) => handleSlide(e)}
            size="small"
            min={10000}
            max={50000000}
            marks
            sx={{
              width: '100 %',
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
          {/* <Label></Label> */}
          <Input
            value={values}
            size="small"
            label= 'Price'
            inputProps={{
              min: 0,
              max: 25000,
              type: 'string',
              'aria-labelledby': 'input-slider',
            }}
          />
        </div>
      </div>
    );
  }
}

export default FilterGroup;
