import Header from "./Header";
import Footer from "./Footer";
import Header_admin from "./Header_admin";
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)



function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                    {children}
            </div>
            <Footer />
            <Header_admin></Header_admin>
        </div>
    );
}

export default DefaultLayout;