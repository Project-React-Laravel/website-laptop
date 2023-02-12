import styles from '../Home.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function CicleCate() {
    return (  
        <div className={cx('circle')}>
            <FontAwesomeIcon icon={faGamepad} className={cx('icon-circle')}/>
        </div>);
}

export default CicleCate;