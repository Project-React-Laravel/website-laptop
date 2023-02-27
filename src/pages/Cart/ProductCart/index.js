import styles from "./ProductCart.module.scss";
import classNames from "classnames/bind";
import images from "@/pages/assets/image";
import { TableRow, TableCell, CardMedia, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteCart } from "@/redux/actions";

const cx = classNames.bind(styles);

function ProductCart({img,name,size,price,qty1,totalPrice}) {
  const item = {img,name,size,price};
  const dispath = useDispatch();
  const handleDelete = ()=>{
    dispath(deleteCart({item}))
  }
  //Quantity And Total Product
  // const total = 38;
  // const [qty, setQty] = useState(qty1);
  // const [priceProduct, setPrice] = useState(38);
  // const increase = () => {
  //   setQty(qty + 1);
  // };
  // const decrease = () => {
  //   setQty(qty - 1);
  //   if (qty <= 1) {
  //     setQty(1);
  //   }
  // };
  // useEffect(() => {
  //   setPrice(qty * total);
  // }, [qty]);

  return (
    
    <TableRow>
      <TableCell className={cx("product-cell")}>
        <CardMedia
          image={images[img]}
          className={cx("img-product-cart")}
          component="img"
        />
        <Box className={cx("name-product-cart")}>
          <p>{name}</p>
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
        <p>{size}</p>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <p>${price}</p>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <div className={cx("input-container")}>
          <div className={cx("input-sub-container")}>
            <button  className={cx("btn-qty-cart")}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{qty1}</span>
            <button  className={cx("btn-qty-cart")}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <p>${totalPrice}</p>
      </TableCell>
      <TableCell className={cx("cart-cell")}>
        <span>
          <FontAwesomeIcon icon={faXmark} className={cx("icon-delete-cart")} onClick={handleDelete} />
        </span>
      </TableCell>
    </TableRow>
  );
}

export default ProductCart;
