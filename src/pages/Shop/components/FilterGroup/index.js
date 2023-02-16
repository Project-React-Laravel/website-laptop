import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Checkbox } from "@mui/material";
import styles from "./FilterGroup.module.scss";
import classNames from "classnames/bind";
import * as React from "react";

const cx = classNames.bind(styles);

function FilterGroup({ children, label, type }) {
  return (
    <div className={cx("filter-group")}>
      <h3>{children}</h3>
      {type === "CheckBox" ? (
        <ul className={cx("list-filter")}>
          <li className={cx("item-filter")}>
            {label.map((item) => {
              return (
                <FormControlLabel
                  control={<Checkbox defaultChecked size="big" />}
                  label={<span style={{ fontSize: "15px" }}>{item}</span>}
                />
              );
            })}
          </li>
        </ul>
      ) : (
        <div className={cx("button-filter")}>
          {label.map((item) => {
            return (
              <Button variant="outlined" >
                {item}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterGroup;
