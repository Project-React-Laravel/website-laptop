import styles from './Checkout.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cartListSelectors } from '@/redux/selectors';

const cx = classNames.bind(styles);

function Checkout() {
    //Store
    const [customer, setCustomer] = useState({
        customer_name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };
    const cartList = useSelector(cartListSelectors);
    const handleCheckout = (e) => {
        e.preventDefault();
        axios
            .post('http://127.0.0.1:8000/api/checkout',{ cartList, ...customer }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((data) => {
                console.log(data.data);
                window.location.href = '/checkoutSuccess';
            })
            .catch((error) => {
                console.error(error);
            });
    };
    //Infomation Product
    const [subtotal , setSubtotal] = useState(0);
    const getSubTotal = (cartList)=>{
      return cartList.reduce((total,product)=>{
        return total + parseFloat(product.price * product.quantity)
      },0)
    }
    useEffect(()=>{
      setSubtotal(getSubTotal(cartList))
    },[cartList])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <div className={cx('breadcrumb')}>Home / Checkout</div>
                    <div className={cx('header')}>
                        <h1>Checkout</h1>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('container')}>
                        <div className={cx('box')}>
                            <div className={cx('box_login')}>
                                <a href="/">
                                    <div>
                                        <span>Log into your Account</span>
                                    </div>
                                </a>
                            </div>

                            <div className={cx('box_login')}>
                                <a href="/">
                                    <div>
                                        <span>Enter Coupon Code</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('form')}>
                                <h1 className={cx('header-form-1')}>Billing Details</h1>
                                <div className={cx('header-form-contact')}>
                                    <form onSubmit={handleCheckout}>
                                        <div className={cx('header-form-contact-info')}>
                                            <div className={cx('header-form-contact-info-1')}>
                                                <label>First Name *</label>
                                                <br></br>
                                                <input placeholder="Demo Name"></input>
                                            </div>
                                            <div className={cx('header-form-contact-info-1')}>
                                                <label>Last Name *</label>
                                                <br></br>
                                                <input
                                                    placeholder="Demo Name"
                                                    name="customer_name"
                                                    value={customer.name}
                                                    onChange={handleChange}
                                                ></input>
                                            </div>
                                        </div>
                                        <div className={cx('header-form-contact-info')}>
                                            <div className={cx('header-form-contact-info-1')}>
                                                <label>Email Address *</label>
                                                <br></br>
                                                <input
                                                    type="email"
                                                    placeholder="Vd:...@gmail.com"
                                                    name="email"
                                                    value={customer.email}
                                                    onChange={handleChange}
                                                ></input>
                                            </div>
                                            <div className={cx('header-form-contact-info-1')}>
                                                <label>Phone Number *</label>
                                                <br></br>
                                                <input
                                                    placeholder="0123...."
                                                    name="phone"
                                                    value={customer.phone}
                                                    onChange={handleChange}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className={cx('header-form-contact-country')}>
                                            <h1>Country *</h1>
                                            <div className={cx('header-form-contact-country-1')}>
                                                <span>Select Country</span>
                                                <span>
                                                    <FontAwesomeIcon icon={faChevronDown} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('header-form-contact-country')}>
                                            <h1>Address *</h1>
                                            <div className={cx('header-form-contact-country-1')}>
                                                <span>Your Address here</span>
                                            </div>
                                        </div>
                                        <div className={cx('header-form-contact-info')}>
                                            <div className={cx('header-form-contact-info-1')}>
                                                <div className={cx('header-form-contact-info-1-css')}>
                                                    <h1>Town/City*</h1>
                                                    <div className={cx('header-form-contact-info-1-1')}>
                                                        <span>MiyamiTown</span>
                                                        <span>
                                                            <FontAwesomeIcon icon={faChevronDown} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('header-form-contact-info-2')}>
                                                <label>Postcode/Zip*</label>
                                                <br></br>
                                                <input></input>
                                            </div>
                                        </div>
                                        <div className={cx('header-form-contact-info-checkbox')}>
                                            <div>
                                                <input type="checkbox"></input>
                                            </div>
                                            <label>Create an account?</label>
                                        </div>
                                        <div className={cx('header-form-contact-info-detail')}>
                                            <h1>Billing Details</h1>
                                            <div className={cx('header-form-contact-info-checkbox')}>
                                                <div>
                                                    <input type="checkbox"></input>
                                                </div>
                                                <label>Ship to a different address</label>
                                            </div>
                                        </div>
                                        <button type="submit">check</button>
                                    </form>
                                </div>
                            </div>
                            <div className={cx('list')}>
                                <h1 className={cx('header-form-2')}>Order Summary</h1>
                                <div className={cx('header-form-contact-order-main')}>
                                    <div className={cx('header-form-contact-order-main-1')}>
                                        <div className={cx('header-form-contact-order-main-1-1')}>
                                            <p>PRODUCT</p>
                                            <p>TOTAL</p>
                                        </div>
                                    </div>

                                    <div className={cx('header-form-contact-order-main-2')}></div>
                                    {cartList.map((product) => (
                                        <div className={cx('header-form-contact-order-main-3')}>
                                            <ul>
                                                <li>
                                                    <div className={cx('header-form-contact-order-main-3-1')}>
                                                        <div className={cx('header-form-contact-order-main-3-1-1')}>
                                                            <h5>
                                                                {product.name} <sup>x1</sup>
                                                            </h5>

                                                            <p>64GB,Black,44mm,Chain Belt</p>
                                                        </div>
                                                        <div className={cx('header-form-contact-order-main-3-1-2')}>
                                                            ${product.price}
                                                        </div>
                                                    </div>
                                                    <div></div>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}

                                    <div className={cx('header-form-contact-order-main-2')}></div>

                                    <div className={cx('header-form-contact-order-main-4')}>
                                        <p>SUBTOTAL</p>
                                        <p>${subtotal}</p>
                                    </div>

                                    <div className={cx('header-form-contact-order-main-5')}>
                                        <div>
                                            <span>SHIPPING</span>
                                            <p>Free Shipping</p>
                                        </div>
                                        <p>+$0</p>
                                    </div>

                                    <div className={cx('header-form-contact-order-main-2')}></div>

                                    <div className={cx('header-form-contact-order-main-6')}>
                                        <p>Total</p>
                                        <p>${subtotal}</p>
                                    </div>

                                    <div className={cx('header-form-contact-order-main-7')}>
                                        <ul>
                                            <li>
                                                <div className={cx('header-form-contact-order-main-7-1')}>
                                                    <input type="radio" name="a"></input>
                                                    <label>Direct Bank Transfer</label>
                                                </div>
                                                <p>
                                                    Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference.
                                                </p>
                                            </li>
                                            <li>
                                                <div className={cx('header-form-contact-order-main-7-1')}>
                                                    <input type="radio" name="a"></input>
                                                    <label>Cash on Delivery</label>
                                                </div>
                                            </li>
                                            <li>
                                                {' '}
                                                <div className={cx('header-form-contact-order-main-7-1')}>
                                                    <input type="radio" name="a"></input>
                                                    <label>Credit/Debit Cards or Paypal</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <button className={cx('header-form-contact-order-main-8-a')}>
                                        <div className={cx('header-form-contact-order-main-8')}>
                                            <span>Place Order Now</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
