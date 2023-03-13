import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import Button1 from "./Button";
import Slider1 from "./Slider";
import styles from "./FilterGroup.module.scss";
import classNames from "classnames/bind";
import * as React from "react";

const cx = classNames.bind(styles);

function FilterGroup({ children, label, type }) {
  const minDistance = 10000000;
  const [value2, setValue2] = React.useState([10000000, 50000000]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  //Check
  const [sizes, setSizes] = React.useState([]);
  const handleCheckbox = (event) => {
    setSizes((prev) => 
      prev.includes(event.target.value)?
        prev.filter((value) => value!==event.target.value)
      :
        [...prev, event.target.value]
    )
  }
  console.log(sizes);
  //Checkbox
  if (type === "CheckBox") {
    return (
      <div className={cx("filter-group")}>
        <h3>{children}</h3>
        <ul className={cx("list-filter")}>
          <li className={cx("item-filter")}>
            {label.map((item, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={<Checkbox color="default" size="big" onChange={handleCheckbox} value={item} />}
                  label={<span style={{ fontSize: "12px" }}>{item}</span>}
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
          {label.map((item, index) => {
            return (
              <Button1 ten={item} key={index}></Button1>
            );
          })}
        </div>
      </div>
    );
  } else if (type === "Range") {
    return (
      <div className={cx("filter-group")}>
        <h3>{children}</h3>
        <div className={cx("range-filter")}>
          <Slider1 handle={handleChange2} values={value2}></Slider1>
        </div>
      </div>
    );
  }
}

export default FilterGroup;
