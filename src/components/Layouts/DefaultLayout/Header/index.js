import styles from './Header.module.scss';
import imggame from'../Img/game.jpg';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import imgshop from'../Img/imgshop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack, faBaby, faBagShopping, faBars, faBowlFood, faBus, faCartShopping, faChevronDown, faChevronRight, faGamepad, faHeart, faLaptop, faMarsStrokeUp, faPassport, faToilet, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import { cartListSelectors } from '@/redux/selectors';
import { useSelector } from 'react-redux';

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
    const cartList = useSelector(cartListSelectors);
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
                        <span className={cx('Header_full_3_1_countcard')}>1</span>
                    </div>
                    <div className={cx('Header_full_3_1')}>
                        <a href='/'>
                            <span>
                                <FontAwesomeIcon icon={faHeart} className={cx('heart')}/>
                            </span>
                        </a>
                        <span className={cx('Header_full_3_1_countcard')}>2</span>
                    </div>
                    <div className={cx('Header_full_3_1')}>
                       
                        <a href='#'>
                            <span><FontAwesomeIcon icon={faCartShopping} className={cx('bag')}/></span>
                         </a>
                        <span className={cx('Header_full_3_1_countcard')}>15</span>
                       
                       <div className={cx('Header_full_3_1_Listcard')}>
                            <div className={cx('Header_full_3_1_Listcard_scroll')}>
                                <ul>
                                
                                    <li >
                                        <div className={cx('Header_full_3_1_Listcard_1')}>
                                            <div className={cx('Header_full_3_1_Listcard_img')}>
                                                <Img src={imggame}/>
                                            </div>
                                            <div className={cx('Header_full_3_1_Listcard_text')}>
                                                <p>iphone 12 Pro Max 128GB Glonden</p>
                                                <p>$ 38$</p>
                                            </div>
                                        </div>
                                        <span>x</span>
                                    </li>
                                    <li >
                                        <div className={cx('Header_full_3_1_Listcard_1')}>
                                            <div className={cx('Header_full_3_1_Listcard_img')}>
                                                <Img src={imggame}/>
                                            </div>
                                            <div className={cx('Header_full_3_1_Listcard_text')}>
                                                <p>iphone 12 Pro Max 128GB Glonden</p>
                                                <p>$ 38$</p>
                                            </div>
                                        </div>
                                        <span>x</span>
                                    </li>
                                    <li >
                                        <div className={cx('Header_full_3_1_Listcard_1')}>
                                            <div className={cx('Header_full_3_1_Listcard_img')}>
                                                <Img src={imggame}/>
                                            </div>
                                            <div className={cx('Header_full_3_1_Listcard_text')}>
                                                <p>iphone 12 Pro Max 128GB Glonden</p>
                                                <p>$ 38$</p>
                                            </div>
                                        </div>
                                        <span>x</span>
                                    </li>
                                    <li >
                                        <div className={cx('Header_full_3_1_Listcard_1')}>
                                            <div className={cx('Header_full_3_1_Listcard_img')}>
                                                <Img src={imggame}/>
                                            </div>
                                            <div className={cx('Header_full_3_1_Listcard_text')}>
                                                <p>iphone 12 Pro Max 128GB Glonden</p>
                                                <p>$ 38$</p>
                                            </div>
                                        </div>
                                        <span>x</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('Header_full_3_1_Listcard_2')}>
                                
                            </div>
                            <div className={cx('Header_full_3_1_Listcard_3')}>
                                <div className={cx('Header_full_3_1_Listcard_3_first')}>
                                    <span>Subtotal</span>
                                    <span>$365</span>
                                </div>
                                <div className={cx('Header_full_3_1_Listcard_3_last')}>
                                    <div>
                                        <a href='/'>
                                            <span>
                                                View Cart
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href='/'>
                                            <span>
                                                Checkout Now
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('Header_full_3_1_Listcard_2')}>
                                
                                </div>
                            <div className={cx('Header_full_3_1_Listcard_4')}>
                                <p>
                                    Get Return within <span>30 days</span>
                                </p>
                            </div>
                       </div>
                       
                        
                    </div>
                    <div className={cx('Header_full_3_1')}>
                        <a href="/">
                        <Link to="/login" style={{color:'#000000',textDecoration:'none'}}>
                            <span><FontAwesomeIcon icon={faUser} className={cx('user')}/></span>
                        </Link> 
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
                                    <Link to="/" style={{color:'#000000',textDecoration:'none'}}>Home</Link>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                                <div className={cx('Header_full_bottom_show_home')}>
                                    <div>
                                        <ul>
                                            <li><a href='/shop'>Home One</a></li>
                                            <li><a href='/shop'>Home Two</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('Header_show_control3')}>
                                <span>
                                    <Link to="/shop" style={{color:'#000000',textDecoration:'none'}}>Shop</Link>
                                    <span> <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')}/></span>
                                </span>
                                <div className={cx('Header_full_bottom_show_shop')}>
                                    <div className={cx('Header_full_bottom_show_shop_main')}>
                                        <div className={cx('Header_full_bottom_show_shop_main_block')}>
                                            <div className={cx('Header_full_bottom_show_shop_main_h1')}><h1>Shop LIST</h1></div>
                                            <div className={cx('Header_full_bottom_show_shop_1')}>
                                                <ul>
                                                    <li><a href='/shop'>Shop Sidebar</a></li>
                                                    <li><a href='/shop'>Shop Fullwidth</a></li>
                                                    <li><a href='/shop'>Shop Category Icon</a></li>
                                                    <li><a href='/shop'>Shop Category Icon</a></li>
                                                    <li><a href='/shop'>Shop List View</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cx('Header_full_bottom_show_shop_main_block')}>
                                            <div className={cx('Header_full_bottom_show_shop_main_h1')}><h1>PRODUCT LAYOUTS</h1></div>
                                            <div className={cx('Header_full_bottom_show_shop_1')}>
                                                <ul>
                                                    <li><a href='/shop'>Horizonral Thumbnail</a></li>
                                                    <li><a href='/shop'>Vertical Thumbnail</a></li>
                                                    <li><a href='/shop'>Gallery Thumbnail</a></li>
                                                    <li><a href='/shop'>Sticky Summary</a></li>
                              
                                                </ul>
                                            </div>
                                           
                                        </div>
                                        <div className={cx('Header_full_bottom_show_shop_main_block')}>
                                            <div className={cx('Header_full_bottom_show_shop_main_h1')}><h1>POLULAR CATEGORY</h1></div>
                                            <div className={cx('Header_full_bottom_show_shop_1')}>
                                                <ul>
                                                    <li><a href='/shop'>Phone & Tablet</a></li>
                                                    <li><a href='/shop'>Gaming & Sports</a></li>
                                                    <li><a href='/shop'>Home Appliance</a></li>
                                                    <li><a href='/shop'>Fashion Clothes</a></li>
                                                    
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