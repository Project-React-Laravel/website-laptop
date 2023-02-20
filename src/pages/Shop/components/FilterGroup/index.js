import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import Button1 from "./Button";
import Slider1 from "./Slider";
import styles from "./FilterGroup.module.scss";
import classNames from "classnames/bind";
import * as React from "react";

const cx = classNames.bind(styles);

function FilterGroup({ children, label, type }) {
  const [values, setValue] = React.useState(100000);

  const handleSlide = (val) => {
    setValue(val.target.value);
  };
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
          <Slider1 handle={handleSlide} values={values}></Slider1>
        </div>
      </div>
    );
  }
}

export default FilterGroup;
