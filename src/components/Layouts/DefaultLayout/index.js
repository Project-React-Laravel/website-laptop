import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';
import HeaderAdmin from './Header_admin';
import HeaderNav from './Header_nav';
import Footer from './Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children, admin }) {
    if (admin) {
        return (
            <div className={cx('wrapper')}>
                <HeaderAdmin />
                <div className={cx('container')}>
                    <HeaderNav content={children}/>
                           
                    </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>{children}</div>
                <Footer />
            </div>
        );
    }
}

export default DefaultLayout;
