import classNames from 'classnames/bind';
import styles from './Header_nav.module.scss';
const cx = classNames.bind(styles)
function nav({isOpen} )
{
    return(
        <div className={cx("Main_nav_nav",isOpen ? "open" : ""   )}>
        <ul>
            <li><a href='/'>Dashboards1</a></li>
            <li><a href='/'>Dashboards1</a></li>
            <li><a href='/'>Dashboards1</a></li>
            <li><a href='/'>Dashboards1</a></li>
            <li><a href='/'>Dashboards1</a></li>
            
        </ul>
    </div>
    );
}
export default nav