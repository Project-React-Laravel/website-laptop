import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import images from "../assets/image";
import Service from "./Service";
import CicleCate from "./CircleCate";
import Selling from "./Selling";
import Product from "./Product";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  faGamepad,
  faGraduationCap,
  faLaptop,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function Home() {
  //GSAP ANIMATION
  gsap.registerPlugin(ScrollTrigger);
  const CateIcon = CicleCate;
  //GSAP
  const banner = useRef(null);
  const service = useRef(null);
  const selling = useRef(null);
  const popular = useRef(null);
  const ser = useRef(null);
  useEffect(() => {
    const el = banner.current;
    const elSer = service.current;
    const elSell = selling.current;
    const elPopular = popular.current;
    const elSerBan = ser.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        toggleActions: "play none none reverse",
      }
    );
    gsap.fromTo(
      elSer,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: elSer,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      elSerBan,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: elSerBan,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      elSell,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: elSell,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      elPopular,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: elPopular,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

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
    <div className={cx("wrapper-full")}>
      <div className={cx("banner")} ref={banner}>
        <div className={cx("banner-card")}>
          <div className={cx("container-img-left")}>
            <img
              src={images.bannerLeft}
              alt="Banner"
              className={cx("banner-img-left")}
            ></img>
          </div>
          <div className={cx("container-img-right")}>
            <div className={cx("img-right")}>
              <img
                src={images.bannerRight1}
                alt="Banner"
                className={cx("banner-img-right")}
              ></img>
            </div>
            <div className={cx("img-right")}>
              <img
                src={images.bannerRight2}
                alt="Banner"
                className={cx("banner-img-right")}
              ></img>
            </div>
          </div>
        </div>
        <div className={cx("service-container")} ref={ser}>
          <Service className={cx("ser")} />
          <Service className={cx("ser")} />
          <Service className={cx("ser")} />
          <Service className={cx("ser")} />
        </div>
      </div>
      <div className={cx("wrapper")} ref={service}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#1d1d1d",
            lineHeight: "36px",
          }}
        >
          Category
        </h1>
        <div className={cx("cate-container")}>
          <div>
            <CateIcon>{faGamepad}</CateIcon>
            <p>Laptop Gaming</p>
          </div>
          <div>
            <CateIcon>{faGraduationCap}</CateIcon>
            <p>Laptop Gaming</p>
          </div>
          <div>
            <CateIcon>{faPenRuler}</CateIcon>
            <p>Laptop Gaming</p>
          </div>
          <div>
            <CateIcon>{faLaptop}</CateIcon>
            <p>Laptop Gaming</p>
          </div>
          <div>
            <CateIcon>{faGamepad}</CateIcon>
            <p>Laptop Gaming</p>
          </div>
        </div>
      </div>
      <div className={cx("wrapper")} ref={selling}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#1d1d1d",
            lineHeight: "36px",
          }}
          className={cx("test")}
        >
          Selling Product
        </h1>
        <div className={cx("selling-container")}>
          {products.map((product, index) => (
            <Selling
              key={index}
              image={images.laptop}
              name={product.name}
              des={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className={cx("wrapper")} ref={popular}>
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
        <div className={cx("popular-container")}>
          <Product>{images.laptop}</Product>
          <Product>{images.laptop2}</Product>
          <Product>{images.laptop3}</Product>
          <Product>{images.laptop4}</Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
