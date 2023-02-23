import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({title}) {
    if(title==="Update Cart"){
    return (  
            <button className={cx(`btn-primary`)}>
                <span>{title}</span>
            </button>
        );  
    }else if(title==="Proceed to Checkout"){
        return (  
            <button className={cx(`btn-dark`)}>
                <span>{title}</span>
            </button>
        );  
    }else if(title==="Apply"){
        return (  
            <button className={cx(`btn`)}>
                <span>{title}</span>
            </button>
        );  
    }else if(title==="Continute Shopping"){
        return (  
            <button className={cx(`btn-primary-2`)}>
                <span>{title}</span>
            </button>
        );  
    }else{
        return (  
            <button className={cx(`btn-primary-3`)}>
                <span>{title}</span>
            </button>
        );  
    }
}

export default Button;