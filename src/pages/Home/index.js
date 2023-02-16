import styles from './Home.module.scss'
import classNames from 'classnames/bind';
import images from '../assets/image';
import img4 from './Selling/laptop.png'
import Service from './Service';
import CicleCate from './CircleCate';
import Selling from './Selling';
import Product from './Product';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faGamepad, faGraduationCap, faLaptop, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';


const cx = classNames.bind(styles)

function Home() {
    gsap.registerPlugin(ScrollTrigger);
    const CateIcon = CicleCate
    const ref = useRef(null)
    useEffect(()=>{
        
    },[])

    return (
        <div className={cx('wrapper-full')} ref={ref}>
            <div className={cx('banner')}>
                <div className={cx('banner-card')}>
                    <div className={cx('container-img-left')}>
                        <img src={images.bannerLeft} alt='Banner' className={cx('banner-img-left')}></img>
                    </div>
                    <div className={cx('container-img-right')}>
                        <img src={images.bannerRight1} alt='Banner' className={cx('banner-img-right')}></img>
                        <img src={images.bannerRight2} alt='Banner' className={cx('banner-img-right')}></img>
                    </div>
                </div>
                <div className={cx('service-container')}>
                    <Service className={cx('ser')} />
                    <Service className={cx('ser')} />
                    <Service className={cx('ser')} />
                    <Service className={cx('ser')} />
                </div>
            </div>
            <div className={cx('wrapper')}>
                    <h1 style={{
                            fontSize:'30px',
                            fontWeight:'600',
                            color:'#1d1d1d',
                            lineHeight:'36px'
                    }}>
                    Category 
                    </h1>
                    <div className={cx('cate-container')}>
                        <div><CateIcon>{faGamepad}</CateIcon><p>Laptop Gaming</p></div>
                        <div><CateIcon>{faGraduationCap}</CateIcon><p>Laptop Gaming</p></div>
                        <div><CateIcon>{faPenRuler}</CateIcon><p>Laptop Gaming</p></div>
                        <div><CateIcon>{faLaptop}</CateIcon><p>Laptop Gaming</p></div>
                        <div><CateIcon>{faGamepad}</CateIcon><p>Laptop Gaming</p></div>
                    </div>
            </div>
            <div className={cx('wrapper')}>
                    <h1 style={{
                            fontSize:'30px',
                            fontWeight:'600',
                            color:'#1d1d1d',
                            lineHeight:'36px'
                    }} className={cx('test')}>
                    Selling Product
                    </h1>
            <div className={cx('selling-container')}>
                <Selling/>
                <Selling/>
                <Selling/>
                <Selling/>
            </div>
                <div className={cx('wrapper')}>
                    <h1 style={{
                            fontSize:'30px',
                            fontWeight:'600',
                            color:'#1d1d1d',
                            lineHeight:'36px'
                    }}>
                    Popular Product
                    </h1>
                    <div className={cx('popular-container')}>
                        <Product>{images.laptop}</Product>
                        <Product>{images.laptop}</Product>
                        <Product>{images.laptop}</Product>
                        <Product>{images.laptop}</Product>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;