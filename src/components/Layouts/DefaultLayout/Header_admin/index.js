import styles from './Header_admin.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faMessage, faSliders } from '@fortawesome/free-solid-svg-icons';
import imgadmin from '../Img/admin.jpg'
const cx = classNames.bind(styles)
function Img({src})
{
    
    return <img src={src} alt="Logo"></img>
}
function HeaderAdmin()
{
    
    return(
        <div className={cx("Main")}>
            <div className={cx("Main1")}>
                <a href='/'>
                    DARK NIGHT <span>PRO</span>
                </a>
            </div>
            <div className={cx("Main2")}>
                <a href='/'>
                   <FontAwesomeIcon icon={faBars}/>
                </a>
            </div>
            <div className={cx("Main3")}>
                <ul>
                    <li>
                        <button>
                            <FontAwesomeIcon icon={faSliders}/>
                        </button>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                </ul>
            </div>

            <div className={cx("Main4")}>
                <div>
                    <button><FontAwesomeIcon icon={faMessage}/></button>
                </div>
                <div>
                    <button><FontAwesomeIcon icon={faEnvelope}/></button>
                </div>
                <div className={cx("Main4_img")}>
                    <button> <Img  src={imgadmin}/></button>
                </div>
            </div>
        </div>
    );
}


export default HeaderAdmin