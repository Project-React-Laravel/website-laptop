import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ButtonCart() {
    return ( 
        <Button 
        variant="contained" 
        sx={{
            backgroundColor:'#ffbb38',
            width:'210px',height:'40px',
            margin:'10px auto',
            fontWeight:600,
            fontSize:'13px',
            color:'#1d1d1d'
            }}>
            <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'8px'}}/>
            Add To Cart
        </Button>
     );
}

export default ButtonCart;