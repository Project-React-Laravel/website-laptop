import styles from './Header.module.scss'

import classNames from 'classnames/bind';
import imgshop from'../Img/imgshop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack, faBaby, faBagShopping, faBars, faBowlFood, faBus, faChevronDown, faChevronRight, faGamepad, faHeart, faLaptop, faMarsStrokeUp, faPassport, faToilet, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';

const cx = classNames.bind(styles)


function Img({src})
{
    
    return <img src={src} alt="Logo"></img>
}
function Menu({name,icon1})
{
    return(<li>
        <a href='/'>
            <div>
                <div  >
                    <span><FontAwesomeIcon icon={icon1}/></span>
                    <span>{name}</span>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faChevronRight}/></span>
                </div>
            </div>
        </a>
    </li>)
}
function Header() {
   
    const[toggle,setToggle]=useState(false)
    return <header className={cx('wrapper')}>
        <div className={cx('Header_container_top')} >
            <div className={cx('Header_full')}>
                <div className={cx('Header_full_1')}>
                    <a href="/">
                        <Img src='https://shopo.quomodothemes.website/assets/images/logo.svg'/>
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
                        <button onClick={()=>setToggle(!toggle)} className={cx('Header_full_bottom_1_1_button')} >
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
                        <div className={cx('Header_full_bottom_menu')}   >
                            {
                               toggle && (
                                <ul>
                                <Menu name='Mobiles & Laptop' icon1={faLaptop}/>
                                <Menu name='Gaming Entertaiment' icon1={faGamepad}/>
                                <Menu name='Image & Video' icon1={faVideo}/>
                                <Menu name='Vehicle' icon1={faBus}/>
                                <Menu name='Furnitures' icon1={faBagShopping}/>
                                <Menu name='Suport' icon1={faPassport}/>  
                                <Menu name='Food & Drinks' icon1={faBowlFood}/>
                                <Menu name='Fashion Accessories' icon1={faBagShopping}/>
                                <Menu name='Toliet & Sanitation' icon1={faToilet}/>
                                <Menu name='Makeup Corner' icon1={faMarsStrokeUp}/>
                                <Menu name='Baby Items' icon1={faBaby}/>  
                                </ul>
                               )
                            }
                        </div>
                    </div>

                    <div className={cx('Header_full_bottom_1_2')}>
                        <ul>
                            <li className={cx('Header_show_control1')}>
                                <span>
                                    <span >Homepage</span>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                                <div className={cx('Header_full_bottom_show_home')}>
                                    <div>
                                        <ul>
                                            <li><a href='/'>Home One</a></li>
                                            <li><a href='/'>Home Two</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('Header_show_control3')}>
                                <span>
                                    <span>Shop</span>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                                <div className={cx('Header_full_bottom_show_shop')}>
                                    <div className={cx('Header_full_bottom_show_shop_main')}>
                                        <div className={cx('Header_full_bottom_show_shop_main_block')}>
                                            <div className={cx('Header_full_bottom_show_shop_main_h1')}><h1>Shop LIST</h1></div>
                                            <div className={cx('Header_full_bottom_show_shop_1')}>
                                                <ul>
                                                    <li><a href='/'>Shop Sidebar</a></li>
                                                    <li><a href='/'>Shop Fullwidth</a></li>
                                                    <li><a href='/'>Shop Category Icon</a></li>
                                                    <li><a href='/'>Shop Category Icon</a></li>
                                                    <li><a href='/'>Shop List View</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cx('Header_full_bottom_show_shop_main_block')}>
                                            <div className={cx('Header_full_bottom_show_shop_main_h1')}><h1>PRODUCT LAYOUTS</h1></div>
                                            <div className={cx('Header_full_bottom_show_shop_1')}>
                                                <ul>
                                                    <li><a href='/'>Horizonral Thumbnail</a></li>
                                                    <li><a href='/'>Vertical Thumbnail</a></li>
                                                    <li><a href='/'>Gallery Thumbnail</a></li>
                                                    <li><a href='/'>Sticky Summary</a></li>
                              
                                                </ul>
                                            </div>
                                           
                                        </div>
                                        <div className={cx('Header_full_bottom_show_shop_main_block')}>
                                            <div className={cx('Header_full_bottom_show_shop_main_h1')}><h1>POLULAR CATEGORY</h1></div>
                                            <div className={cx('Header_full_bottom_show_shop_1')}>
                                                <ul>
                                                    <li><a href='/'>Phone & Tablet</a></li>
                                                    <li><a href='/'>Gaming & Sports</a></li>
                                                    <li><a href='/'>Home Appliance</a></li>
                                                    <li><a href='/'>Fashion Clothes</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                        <Img src={imgshop}/>
                                         </div>
                                    </div>
                                   
                                </div>
                            </li>
                            <li className={cx('Header_show_control2')}>
                                <span>
                                    <span>Pages</span>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                                <div className={cx('Header_full_bottom_show_page')}>
                                    <div>
                                        <ul>
                                            <li><a href='/'>Privacy Policy</a></li>
                                            <li><a href='/'>Terms and Conditions</a></li>
                                            <li><a href='/'>FAQ</a></li>
                                            <li><a href='/'>Shop Category Icon</a></li>
                                            <li><a href='/'>Shop List View</a></li>
                                        </ul>
                                    </div>
                                </div>
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