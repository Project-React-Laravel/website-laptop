import classNames from "classnames/bind";
import styles from "./CardProduct.module.scss";
import images from "@/pages/assets/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef ,useEffect } from "react";

const cx = classNames.bind(styles);

function Card({ name, des, price, image }) {
  //Gsap Animate
  gsap.registerPlugin(ScrollTrigger);
  const cardRef = useRef();
  useEffect(() => {
    const card = cardRef.current;
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 100,
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className={cx("item-card")} ref={cardRef}>
      <div className={cx("product-image")}>
        <img src={images[image]} alt="Banner" className={cx("image")} />
      </div>
      <div className={cx("product-info")}>
        <h2 className={cx("product-name")}>{name}</h2>
        <p className={cx("product-description")}>{des}</p>
        <p className={cx("product-price")}>{price}</p>
        <button className={cx("add-to-cart")}>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
