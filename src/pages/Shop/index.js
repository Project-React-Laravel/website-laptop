import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FilterGroup from "@/pages/Shop/components/FilterGroup";
import Card from "@/pages/Shop/components/CardProduct";


import { useEffect, useState } from "react";

const demand = [
  "Gaming",
  "Học tập - Văn phòng",
  "Đồ họa - Kỹ thuật",
  "Mỏng nhẹ",
  "Cao cấp - Sang trọng",
];
const size = ["15 inch", "16 inch", "17 inch", "18 inch", "19 inch", "20 inch"];
const cx = classNames.bind(styles);
function Shop() {
  //API Product
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://laptopapi.000webhostapp.com/api/laptops")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>Home</div>
      <div className={cx("content")}>
        <div className={cx("filter")}>
          <FilterGroup
            children={"Nhu cầu"}
            label={demand}
            type="CheckBox"
          ></FilterGroup>
          <FilterGroup
            children={"Kích cỡ màn hình"}
            label={size}
            type="CheckBox"
          ></FilterGroup>
          <FilterGroup
            children={"Độ phân giải"}
            label={["HD", "FullHD", "Retina", "2K", "4K", "8K"]}
            type="Button"
          ></FilterGroup>
          <FilterGroup children={"Giá"} type="Range"></FilterGroup>
        </div>
        <div className={cx("list")}>
          <div className={cx("product-sorting")}>
            <p className={cx("text-sorting")}>Showing</p>
            <div className={cx("menu-sorting")}>
              <span>Sort by:</span>
              <div className={cx("list-sorting")}>
                Default{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cx("icon-circle")}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className={cx("list-card")}>
            {products.map((product, index) => (
              <Card
                key={index}
                name={product.name}
                price={product.price}
                image={product.image_url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
