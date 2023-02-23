import styles from "./ProductCart.module.scss";
import classNames from "classnames/bind";
import images from "@/pages/assets/image";
import { TableRow, TableCell, CardMedia, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function ProductCart() {
  //Quantity And Total Product
  const total = 38;
  const [qty, setQty] = useState(1);
  const [priceProduct, setPrice] = useState(38);
  const increase = () => {
    setQty(qty + 1);
  };
  const decrease = () => {
    setQty(qty - 1);
    if (qty <= 1) {
      setQty(1);
    }
  };
  useEffect(() => {
    setPrice(qty * total);
  }, [qty]);

  return (
    <TableRow>
      <TableCell className={cx("product-cell")}>
        <CardMedia
          image={images["laptop.png"]}
          className={cx("img-product-cart")}
          component="img"
        />
        <Box className={cx("name-product-cart")}>
          <p>Laptop Asus</p>
        </Box>
      </TableCell>
      <TableCell>
        <span
          className={cx("color-cart")}
          date-selected="true"
          data-label-id="0"
        ></span>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <p>Small</p>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <p>$38</p>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <div className={cx("input-container")}>
          <div className={cx("input-sub-container")}>
            <button onClick={decrease} className={cx("btn-qty-cart")}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{qty}</span>
            <button onClick={increase} className={cx("btn-qty-cart")}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <p>${priceProduct}</p>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <span>
          <FontAwesomeIcon icon={faXmark} className={cx("icon-delete-cart")} />
        </span>
      </TableCell>
    </TableRow>
  );
}

export default ProductCart;
