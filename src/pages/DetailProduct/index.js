import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import BasicTabs from './components/Tabs';
import images from '../assets/image';
import logo from './assets';
import React from 'react';
import Card from '../Shop/components/CardProduct';
import Carousel from 'react-multi-carousel';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCart } from '@/redux/actions';
import {  useSnackbar } from 'notistack';

const cx = classNames.bind(styles);

function DetailProduct({ children }) {
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
    //Cart
    const dispath = useDispatch()
    const handleCart = ()=>{
        dispath(addCart({
            id_product:product.id,
            img:product.image_url,
            name:product.name,
            color:'#e4bc87',
            size:'small',
            price:product.price,
            quantity:qty
        }))
    }
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant) =>  {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant });
      };
    const onClickFun = ()=>{
        handleClickVariant('success');
        handleCart();
    }
    //API Products
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch('https://laptopapi.000webhostapp.com/api/laptops')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);
    //API Product
    const [product, setProduct] = React.useState();
    React.useEffect(() => {
        fetch('https://laptopapi.000webhostapp.com/api/detail/'.concat(children))
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            });
    }, [children]);
    //Carousel
    const carousel = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-breadCrumb')}>
                <div className={cx('breadCrumb')}>
                    <span>Home</span>
                    <span>/</span>
                    <span>Detail Product</span>
                </div>
            </div>
            <div className={cx('wrapper-productView')}>
                <div className={cx('main-product')}>
                    <div className={cx('container-productImage')}>
                        <div className={cx('mainImage')}>
                            <img alt={'productImage'} src={images[product === undefined ? '' : product.image_url]} />
                        </div>
                        <div className={cx('secondImage')}>
                            <div className={cx('miniImage')}>
                                <img
                                    alt={'productImage'}
                                    src={images[product === undefined ? '' : product.image_url]}
                                />
                            </div>
                            <div className={cx('miniImage')}>
                                <img
                                    alt={'productImage'}
                                    src={images[product === undefined ? '' : product.image_url]}
                                />
                            </div>
                            <div className={cx('miniImage')}>
                                <img
                                    alt={'productImage'}
                                    src={images[product === undefined ? '' : product.image_url]}
                                />
                            </div>
                            <div className={cx('miniImage')}>
                                <img
                                    alt={'productImage'}
                                    src={images[product === undefined ? '' : product.image_url]}
                                />
                            </div>
                            <div className={cx('miniImage')}>
                                <img
                                    alt={'productImage'}
                                    src={images[product === undefined ? '' : product.image_url]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('container-productDetail')}>
                        <span className={cx('productCate')}>{product === undefined ? '' : product.brand}</span>
                        <p className={cx('productName')}>{product === undefined ? '' : product.name}</p>
                        <div className={cx('productVote')}>
                            <img src={logo.Star} alt="Star" />
                            <img src={logo.Star} alt="Star" />
                            <img src={logo.Star} alt="Star" />
                            <img src={logo.Star} alt="Star" />
                            <img src={logo.Star} alt="Star" />
                            <span>6 Reviews</span>
                        </div>
                        <div className={cx('productPrice')}>{product === undefined ? '' : product.price} VND</div>
                        <p className={cx('productInfo')}>{product === undefined ? '' : product.description}</p>
                        <div className={cx('productTags')}>
                            <p>
                                <span>Processor :</span> {product === undefined ? '' : product.processor}
                            </p>
                            <p>
                                <span>RAM :</span> {product === undefined ? '' : product.RAM} GB
                            </p>
                            <p>
                                <span>Screen Size :</span> {product === undefined ? '' : product.screen_size}
                            </p>
                            <p>
                                <span>Graphic Card :</span> {product === undefined ? '' : product.graphic_card}
                            </p>
                            <p>
                                <span>Operating System :</span> {product === undefined ? '' : product.operating_system}
                            </p>
                        </div>
                        {/* <div className={cx('productColor')}>
                            <span>COLOR</span>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div> */}
                        {/* <div className={cx('productSize')}>
                            <span>SIZE</span>
                            <Select1 ></Select1>
                        </div> */}
                        
                        <div className={cx('productCart')}>
                            <div>
                                <button onClick={descrease}>-</button>
                                <span>{qty}</span>
                                <button onClick={increase}>+</button>
                            </div>
                            <div>
                                <img src={logo.Heart} alt="Heart" />
                            </div>
                            <Button
                                onClick={onClickFun}
                                style={{
                                    borderRadius: 0,
                                    backgroundColor: '#222222',
                                    color: '#ffffff',
                                    width: '314px',
                                    height: '50px',
                                    fontFamily: 'Inter',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    lineHeight: '20px',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#222222',
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                Add to cart
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-productDes')}>
                <BasicTabs></BasicTabs>
            </div>
            <div className={cx('wrapper-productRelated')}>
                <h1
                    style={{
                        fontSize: '30px',
                        fontWeight: '600',
                        color: '#1d1d1d',
                        lineHeight: '36px',
                    }}
                >
                    Popular Product
                </h1>
                <Box sx={{ width: '1168px', padding: '20px' }}>
                    <Carousel
                        responsive={carousel}
                        draggable
                        infinite
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        centerMode={true}
                        showDots={false}
                        focusOnSelect={true}
                        sliderClass={'carousel'}
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
