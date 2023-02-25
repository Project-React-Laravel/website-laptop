import classNames from "classnames/bind";
import styles from "./DetailProduct.module.scss";
import Select1 from "./components/SelectNonLabel";
import Button1 from "./components/Button";
import BasicTabs from "./components/Tabs";
import images from "../assets/image";
import image from "./assets";
import React from "react";
import Card from "../Shop/components/CardProduct";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";

const cx = classNames.bind(styles);

function DetailProduct() {
  const [qty, setQty] = React.useState(1);
  const increase = () => {
    setQty(qty + 1);
  };
  const descrease = () => {
    setQty(qty - 1);
    if (qty === 1) {
      setQty(1);
    }
  };
  //API Product
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://laptopapi.000webhostapp.com/api/laptops")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);
  //Carousel
  const carousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 85, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-breadCrumb")}>
        <div className={cx("breadCrumb")}>
          <span>Home</span>
          <span>/</span>
          <span>Detail Product</span>
        </div>
      </div>
      <div className={cx("wrapper-productView")}>
        <div className={cx("main-product")}>
          <div className={cx("container-productImage")}>
            <div className={cx("mainImage")}>
              <img alt={"productImage"} src={images["laptop2.png"]} />
            </div>
            <div className={cx("secondImage")}>
              <div className={cx("miniImage")}>
                <img alt={"productImage"} src={images["laptop.png"]} />
              </div>
              <div className={cx("miniImage")}>
                <img alt={"productImage"} src={images["laptop.png"]} />
              </div>
              <div className={cx("miniImage")}>
                <img alt={"productImage"} src={images["laptop.png"]} />
              </div>
              <div className={cx("miniImage")}>
                <img alt={"productImage"} src={images["laptop.png"]} />
              </div>
              <div className={cx("miniImage")}>
                <img alt={"productImage"} src={images["laptop.png"]} />
              </div>
            </div>
          </div>
          <div className={cx("container-productDetail")}>
            <span className={cx("productCate")}>Laptop Gaming</span>
            <p className={cx("productName")}>
              Samsung Galaxy Z Fold3 5G 3 colors in 512GB
            </p>
            <div className={cx("productVote")}>
              <img src={image.Star} alt="Star" />
              <img src={image.Star} alt="Star" />
              <img src={image.Star} alt="Star" />
              <img src={image.Star} alt="Star" />
              <img src={image.Star} alt="Star" />
              <span>6 Reviews</span>
            </div>
            <div className={cx("productPrice")}>21.000.000 VND</div>
            <p className={cx("productInfo")}>
              It is a long established fact that a reader will be distracted by
              the readable there content of a page when looking at its layout.
            </p>
            <div className={cx("productColor")}>
              <span>COLOR</span>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={cx("productSize")}>
              <span>SIZE</span>
              <Select1></Select1>
            </div>
            <div className={cx("productCart")}>
              <div>
                <button onClick={descrease}>-</button>
                <span>{qty}</span>
                <button onClick={increase}>+</button>
              </div>
              <div>
                <img src={image.Heart} alt="Heart" />
              </div>
              <Button1></Button1>
            </div>
            <div className={cx("productTags")}>
              <p>
                <span>Category :</span> Gaming
              </p>
              <p>
                <span>Tag :</span> Gaming, Cheap
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("wrapper-productDes")}>
        <BasicTabs></BasicTabs>
      </div>
      <div className={cx("wrapper-productRelated")}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#1d1d1d",
            lineHeight: "36px",
          }}
        >
          Popular Product
        </h1>
        <Box sx={{ width: "1168px", padding: "20px" }}>
          <Carousel
            responsive={carousel}
            partialVisbile={true}
            draggable
            infinite
            autoPlay={true}
            autoPlaySpeed={2000}
            // centerMode={true}
            showDots={false}
            focusOnSelect={true}
            sliderClass={"carousel"}
          >
            {products.map((product, index) => (
              <Card
                key={index}
                name={product.name}
                price={product.price}
                image={product.image_url}
              ></Card>
            ))}
          </Carousel>
        </Box>
      </div>
    </div>
  );
}

export default DetailProduct;
