import classNames from 'classnames/bind';
import * as React from 'react';
import styles from './CardProduct.module.scss'
import img from '../Selling/laptop.png';

const cx = classNames.bind(styles);

function Card({name, des, price}) {
    return ( 
        <div className={cx('item-card')}>
                <div className={cx('product-image')}>
                    <img src={img} alt='Banner' className={cx('image')}/>
                </div>
                <div className={cx('product-info')}>
                    <h2 className={cx('product-name')}>{name}</h2>
                    <p className={cx('product-description')}>{des}</p>
                    <p className={cx('product-price')}>{price}</p>
                    <button className={cx('add-to-cart')}>Add to cart</button>
                </div>
        </div>
    );
}

export default Card;