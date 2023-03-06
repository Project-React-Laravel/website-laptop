import Header from './Header';
import Footer from './Footer';
import Header_admin from "./Header_admin";
import styles from './DefaultLayout.module.scss';;
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children,admin }) {
    if(admin){
        return (
            <div className={cx('wrapper')}>
                <Header />
                {/* <div className={cx('container')}>{children}</div>
                <Footer /> */}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
