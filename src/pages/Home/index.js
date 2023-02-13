import styles from './Home.module.scss'
import classNames from 'classnames/bind';
import img from '../assets/image/banner-1.png';
import img2 from '../assets/image/banner-2.jpg';
import img3 from '../assets/image/banner-3.jpg';
import Service from './Service';
import CicleCate from './CircleCate';
import Selling from './Selling';
import { faGamepad, faGraduationCap, faLaptop, faPenRuler } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)

function Home() {
    const CateIcon = CicleCate
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner-card')}>
                    <div className={cx('container-img-left')}>
                        <img src={img} alt='Banner' className={cx('banner-img-left')}></img>
                    </div>
                    <div className={cx('container-img-right')}>
                        <img src={img2} alt='Banner' className={cx('banner-img-right')}></img>
                        <img src={img3} alt='Banner' className={cx('banner-img-right')}></img>
                    </div>
                </div>
                <div className={cx('service-container')}>
                    <Service />
                    <Service />
                    <Service />
                    <Service />
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
                    }}>
                    Category 
                    </h1>
                    <div className={cx('selling-container')}>
                        <Selling/>
                        <Selling/>
                        <Selling/>
                        <Selling/>
                    </div>
                </div>
            </div>
    );
}

export default Home;