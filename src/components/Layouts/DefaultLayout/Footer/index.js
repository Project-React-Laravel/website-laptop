import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import imgbank from '../Img/Qr.png'

const cx = classNames.bind(styles)
function ContentFooter({header,con1,con2,con3})
{
    return(
        <div className={cx('Footer_Full_Bottom_content_2_2')}>
                        <div className={cx('Footer_Full_Bottom_content_2_2_1')}>
                            <div className={cx('Footer_Full_Bottom_content_2_2_1_header')}>
                                <h1>{header}</h1>
                            </div>
                            <div className={cx('Footer_Full_Bottom_content_2_2_1_content')} >
                                <ul>
                                    <li>
                                        <a href='/'>
                                            {con1}
                                        </a>
                                    </li>
                                    <li>
                                    <a href='/'>
                                            {con2}
                                        </a>
                                    </li>
                                    <li>
                                    <a href='/'>
                                            {con3}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    );
}
function Img({src})
{
   
    return <img src={src} alt="Logo"></img>
}
function Footer() {
    return <div className={cx('Footer_Container')}>
        <div className={cx('Footer')}>
            <div className={cx('Footer_Full')}>
                <div className={cx('Footer_Full_1')}>
                    <h1>Get
                        <span>20%</span>
                        Off Discount Coupon
                    </h1>
                    <p>by Subscribe our Newsletter</p>
                </div>
                <div className={cx('Footer_Full_2')}>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </span>
                        <input placeholder='EMAIL ADDRESS'></input>
                    </div>
                    <button>Get the Coupon</button>
                </div>
            </div>
        </div>
        <div className={cx('Footer_Full_Bottom')}>
           <div className={cx('Footer_Full_Bottom_content')}>
                <div className={cx('Footer_Full_Bottom_content_1')}>
                    <Img src='https://shopo.quomodothemes.website/assets/images/logo.svg'/>
                </div>
                <div className={cx('Footer_Full_Bottom_content_2')}>
                    <div className={cx('Footer_Full_Bottom_content_2_1')}>
                        <h1>About Us</h1>
                        <p>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
                    </div>
                    <ContentFooter header='Feature'con1='About Us'con2='Ters Condition'con3='BestProducts'></ContentFooter>
                    <ContentFooter header='General Links'con1='Blog'con2='Tracking Order'con3='Become Seller'></ContentFooter>
                    <ContentFooter header='Helpful'con1='Flash Sale'con2='FAQ'con3='Support'></ContentFooter>
                </div>
                <div className={cx('Footer_Full_Bottom_content_3')}></div>
                <div className={cx('Footer_Contact')}>
                <div className={cx('Footer_Contact_1')}>
                    <div>
                        <a href='\'>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href='\'><FontAwesomeIcon icon={faYoutube}/></a>
                        <a href='\'> <FontAwesomeIcon icon={faTwitter}/></a>
                    </div>
                    <span>
                        @2023 <a href='\' >Quomodosoft</a> All rights reserved
                    </span>
                </div>
                <div className={cx('Footer_Contact_2')}>
                   <Img src={imgbank}/>
                </div>
            </div>
           </div>
           
        </div>
        
    </div>
    ;
}

export default Footer;