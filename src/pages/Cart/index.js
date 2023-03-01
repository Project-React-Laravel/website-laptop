import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  MenuItem,
} from "@mui/material";
import ProductCart from "./ProductCart";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { cartListSelectors } from "@/redux/selectors";
import React from 'react';

const cx = classNames.bind(styles);
const locations = [
  "Quận 1",
  "Quận 3",
  "Quận 4",
  "Quận 5",
  "Quận 6",
  "Quận 7",
  "Quận 8",
  "Quận 10",
  "Quận 11",
  "Quận 12",
  "Quận Bình Tân",
  "Quận Bình Thạnh",
  "Quận Gò Vấp",
  "Quận Phú Nhuận",
  "Quận Tân Bình",
  "Quận Tân Phú",
  "Quận Bình Chánh",
  "Quận Cần Giờ",
  "Quận Củ Chi",
  "Quận Hóc Môn",
  "Quận Nhà Bè",
];
const shippings = [
  {
    id: 1,
    name: "Free Shipping",
  },
  {
    id: 2,
    name: "Flat Rate",
  },
  {
    id: 3,
    name: "Local Delivery",
  },
];

function Cart() {
  const cartList = useSelector(cartListSelectors);
  const [checked, setChecked] = useState();
  return (
    <div>
      <div className={cx("wrapper")}>
        {/* Title */}
        <div className={cx("title")}>
          <h1>Your Cart</h1>
        </div>
        {/* Cart */}
        <div className={cx("car-container")}>
          <div className={cx("car-body")}>
            <TableContainer
              component={Paper}
              sx={{ width: 1200, margin: "23px auto" }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f6f6f6" }}>
                    <TableCell>
                      <p className={cx("head-table")}>Product</p>
                    </TableCell>
                    <TableCell>
                      <p className={cx("head-table")}>Color</p>
                    </TableCell>
                    <TableCell>
                      <p className={cx("head-table")}>Size</p>
                    </TableCell>
                    <TableCell>
                      <p className={cx("head-table")}>Price</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className={cx("head-table")}>Quantity</p>
                    </TableCell>
                    <TableCell>
                      <p className={cx("head-table")}>Total</p>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    cartList.map((product,index)=>
                      <ProductCart 
                        key={index}
                        img={product.img} 
                        name={product.name}
                        size={product.size}
                        price={product.price}
                        qty1={product.quantity}
                        totalPrice={product.price*product.quantity}
                        id={product.id_product}
                      />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        {/* Discount */}
        <div className={cx("discount-container")}>
          <div className={cx("discount-container-body")}>
            <div className={cx("discount-code")}>
              <div className={cx("discount-input")}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Discount Code"
                  multiline
                  maxRows={4}
                  sx={{
                    width: 178,
                    height: 50,
                  }}
                />
              </div>
              <Button title={"Apply"} />
            </div>
            <div className={cx("discount-code")}>
              <div className={cx("btn-group-continute")}>
                <Button title={"Continute Shopping"} />
                <Button title={"Update Cart."} />
              </div>
            </div>
          </div>
        </div>
        {/* //Checkout */}
        <div className={cx("checkout-container")}>
          <div className={cx("checkout-body")}>
            <div className={cx("checkout-box")}>
              <div className={cx("checkout-box-body")}>
                {/* Subtotal */}
                <div className={cx("subtotal")}>
                  <p>Subtotal</p>
                  <p style={{ color: "#ef262c" }}>$365</p>
                </div>
                {/* Shipping */}
                <div className={cx("shipping")}>
                  <span style={{ marginBottom: 18 }}>Shipping</span>
                  <ul>
                    {shippings.map((shipping) => (
                      <li className={cx("list-shipping")} key={shipping.id}>
                        <div className={cx("shiping-option-container")}>
                          <div className={cx("shiping-option")}>
                            <input
                              type="radio"
                              checked={checked === shipping.id}
                              onChange={() => setChecked(shipping.id)}
                            />
                            <span>{shipping.name}</span>
                          </div>
                          <span>+$00.00</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Caculate Shipping */}
                <div className={cx("shipping")}>
                  <span style={{ marginBottom: 18 }}>Caculate Shipping</span>
                  <div className={cx("caculate-body")}>
                    <div className={cx("caculate-input")}>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Select Country"
                        defaultValue=""
                        sx={{ width: 308, height: 50 }}
                      >
                        {locations.map((location, index) => {
                          return (
                            <MenuItem key={index} value={location}>
                              {location}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                      <TextField
                        label="Postcode / Zip"
                        id="outlined-start-adornment"
                        sx={{ width: 308, height: 51 }}
                      />
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div className={cx("btn-checkout")}>
                  <Button title={"Update Cart"} />
                </div>
                {/* Total */}
                <div className={cx("total-checkout")}>
                  <p>Total</p>
                  <p style={{ color: "#ef262c" }}>$365</p>
                </div>
                <div className={cx()}>
                  <Button title={"Proceed to Checkout"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
