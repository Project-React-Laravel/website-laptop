import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack, faBagShopping, faBars, faChevronDown, faChevronRight, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Img()
{
    const src="https://shopo.quomodothemes.website/assets/images/logo.svg";
    return <img src={src} alt="Logo"></img>
}
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('Header_container_top')} >
            <div className={cx('Header_full')}>
                <div className={cx('Header_full_1')}>
                    <a href="/">
                        <Img/>
                    </a>
                </div>
                <div className={cx('Header_full_2')}>
                    <div className={cx("Header_full_2_1")}>
                        <form action="#" className={cx("FormSearch")}> 
                            <input type="text" placeholder="Search Product..." className={cx("InputSearch")}></input>
                        </form>
                    </div>
                    <div className={cx("Header_full_2_2")}>
                        
                    </div>
                    <div className={cx("Header_full_2_3")}>
                        <button>
                            <span>All Categories</span>
                            <span>  <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                        </button>
                    </div>
                    <div className={cx("Header_full_2_4")}>
                        <button>
                            Search
                        </button>
                    </div>
                </div>
                <div className={cx('Header_full_3')}>
                    <div className={cx('Header_full_3_1')}>
                        <a href='/'>
                            <span><FontAwesomeIcon icon={faArrowRotateBack} className={cx('arrow_rotate')}/></span>
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <span>
                                <FontAwesomeIcon icon={faHeart} className={cx('heart')}/>
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <span><FontAwesomeIcon icon={faBagShopping} className={cx('bag')}/></span>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <span><FontAwesomeIcon icon={faUser}className={cx('user')}/></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={cx('Header_container_bottom')}>
            <div className={cx('Header_full_bottom')}>
                <div className={cx('Header_full_bottom_1')}>
                    <div className={cx('Header_full_bottom_1_1')}>
                        <button>
                           <div>
                            <span>
                                <FontAwesomeIcon icon={faBars}/>
                            </span>
                            <span>
                                All Categories
                            </span>
                           </div>
                            <div>
                                 <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/>
                            </div>
                        </button>
                    </div>

                    <div className={cx('Header_full_bottom_1_2')}>
                        <ul>
                            <li>
                                <span>
                                    <span>Homepage</span>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span>Shop</span>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span>Pages</span>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span>About</span>
                                   
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span>Blog</span>
                                    
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span>Context</span>
                                    
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('Header_full_bottom_2')}>
                    <button>
                        <span>Become a Seller</span>
                        <span><FontAwesomeIcon icon={faChevronRight}className={cx('arrow_right')}/></span>
                    </button>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;