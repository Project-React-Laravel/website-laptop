import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from '../Home.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Service() {
    return (  
                <div className={cx('service-item')}>
                    <div className={cx('service-left')}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('icon-service')}/>
                    </div>
                    <div className={cx('service-right')}>
                        <p style={{
                            fontSize:"15px",
                            fontWeight: "700"
                        }}>Free Shipping</p>
                        <p>When ordering over $100</p>
                    </div>
                </div>
    );
}

export default Service;