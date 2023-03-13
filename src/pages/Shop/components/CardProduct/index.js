import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import images from '@/pages/assets/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/pages/DetailProduct/assets';
import { useDispatch } from 'react-redux';
import { addCart } from '@/redux/actions';
import {  useSnackbar } from 'notistack';

const cx = classNames.bind(styles);

function Card({ id, name, des, price, image }) {
    //Cart
    const dispath = useDispatch()
    const handleCart = ()=>{
        dispath(addCart({
            id_product:id,
            img:image,
            name:name,
            color:'#e4bc87',
            size:'small',
            price:price,
            quantity:1
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
                    toggleActions: 'play none none reverse',
                },
            },
        );
    }, []);
    return (
        <div className={cx('item-card')} ref={cardRef}>
            <div className={cx('product-image')}>
                <img src={images[image]} alt="Banner" className={cx('image')} />
            </div>
            <div className={cx('product-info')}>
                <div className={cx('product-reviews')}>
                    <img src={logo.Star} alt={'star'} />
                    <img src={logo.Star} alt={'star'} />
                    <img src={logo.Star} alt={'star'} />
                    <img src={logo.Star} alt={'star'} />
                    <img src={logo.Star} alt={'star'} />
                </div>
                <Link to={"/detailProduct/".concat(id)} className={cx('product-name')}>
                    {name}
                </Link>
                <p className={cx('product-description')}>{des}</p>
                <p className={cx('product-price')}>{(price * 23000).toLocaleString('vi-VN')} VND</p>
                <button onClick={onClickFun} className={cx('add-to-cart')}>Add to cart</button>
            </div>
            <div className={cx('product-access')}>
                <Link to="/detailProduct" className={cx('')}>
                  <img src={logo['Expand']} alt="Banner" />
                </Link>
                <Link to="/detailProduct" className={cx('')}>
                  <img src={logo['Heart']} alt="Banner" />
                </Link>
            </div>
        </div>
    );
}

export default Card;
