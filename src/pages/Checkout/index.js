import styles from "./Checkout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Checkout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper")}>
        <div className={cx("title")}>
          <div className={cx("breadcrumb")}>Home / Checkout</div>
          <div className={cx("header")}>
            <h1>Checkout</h1>
          </div>
        </div>
        <div className={cx("content")}>
          <div className={cx("container")}>
            <div className={cx("box")}></div>
            <div className={cx("body")}>
              <div className={cx("form")}>
                <h1 className="header-form">Billing Details</h1>
              
              </div>
              <div className={cx("list")}>
                <h1 className="header-form">Order Summary</h1>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
