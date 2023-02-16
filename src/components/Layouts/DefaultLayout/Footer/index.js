import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function ContentFooter({header,con1,con2,con3})
{
    return(
        <div className={cx('Footer_Full_Bottom_content_2_2')}>
                        <div className={cx('Footer_Full_Bottom_content_2_2_1')}>
                            <div>
                                <h1>{header}</h1>
                            </div>
                            <div>
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
function Img()
{
    const src="https://shopo.quomodothemes.website/assets/images/logo.svg";
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
                    <Img/>
                </div>
                <div className={cx('Footer_Full_Bottom_content_2')}>
                    <div className={cx('Footer_Full_Bottom_content_2_1')}>
                        <h1>About Us</h1>
                        <p>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
                    </div>
                    <ContentFooter header='Feature'con1='About Us'con2='Ters Condition'con3='BestProducts'></ContentFooter>
                    <ContentFooter header='Feature'con1='About Us'con2='Ters Condition'con3='BestProducts'></ContentFooter>
                    <ContentFooter header='Feature'con1='About Us'con2='Ters Condition'con3='BestProducts'></ContentFooter>
                </div>
                <div className={cx('Footer_Full_Bottom_content_3')}></div>
           </div>
        </div>
    </div>
    ;
}

export default Footer;