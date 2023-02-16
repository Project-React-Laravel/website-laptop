import classNames from 'classnames/bind';
import * as React from 'react';
import styles from './Shop.module.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterGroup from '@/pages/Shop/components/FilterGroup';
import Card from '@/pages/Shop/components/CardProduct';
import {Button} from '@mui/material';
const demand = ["Gaming", "Học tập - Văn phòng","Đồ họa - Kỹ thuật","Mỏng nhẹ","Cao cấp - Sang trọng"]
const size = ["15 inch", "16 inch","17 inch","18 inch","19 inch","20 inch"]
const cx = classNames.bind(styles)
const label= ["a","b","c"];
function Shop() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>Home</div>
            <div className={cx('content')}>
                <div className={cx('filter')}>
                    <FilterGroup children={'Nhu cầu'} label={demand} type="CheckBox"></FilterGroup>
                    <FilterGroup children={'Kích cỡ màn hình'} label={size} type="CheckBox"></FilterGroup>
                    <FilterGroup children={'Độ phân giải'} label={["HD", "FullHD","Retina","2K","4K","8K"]} type="ChecsadasasdkBox"></FilterGroup> 
                </div>
                <div className={cx('list')}>
                    <div className={cx('product-sorting')}>
                        <p className={cx('text-sorting')}>Showing</p>
                        <div className={cx('menu-sorting')}><span>Sort by:</span><div className={cx('list-sorting')}>Default <FontAwesomeIcon icon={faChevronDown} className={cx('icon-circle')}></FontAwesomeIcon></div></div>
                    </div>
                    <div className={cx('list-card')}>
                        <Card name="Asussssssssssssssssssssssssssssssssssssssssssss"  price='25.000.000 VND'></Card>
                        <Card name="Asus"  price='25.000.000 VND'></Card>
                        <Card name="Asus"  price='25.000.000 VND'></Card>
                        <Card name="Asus"  price='25.000.000 VND'></Card>
                        <Card name="Asus"  price='25.000.000 VND'></Card>
                        <Card name="Asus"  price='25.000.000 VND'></Card>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Shop;