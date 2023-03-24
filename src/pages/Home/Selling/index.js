import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import images from "@/pages/assets/image";
import { useDispatch } from 'react-redux';
import { addCart } from '@/redux/actions';
import {  useSnackbar } from 'notistack';


function Selling({id,image,name,des,price}) {
    
    const dispath = useDispatch()
    const handleCart = ()=>{
        dispath(addCart({
            id_product:id,
            img:image,
            name:name,
            color:'#e4bc87',
            size:'small',
            price:price,
            quantity:1
        }))
    }
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant) =>  {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant });
      };
    const onClickFun = ()=>{
        handleClickVariant('success');
        handleCart();
    }
    return (
        <Card style={{
            display:'flex',
            width:'569px',
            height:'250px',
            padding:'30px',
            alignItems:'center',
            marginTop:'20px'
            }}>
            <CardMedia 
            title="" 
            image={images[image]}
            component="img"
            sx={{ width: 255 , height: 190 }} 
            />
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',fontSize:'15px',marginLeft:'15px'}}>
                <h1 style={{fontSize:'18px'}}>{name}</h1>
                <p>{des}</p>
                <span style={{fontSize:'18px',fontWeight:'600',color:'#ef262c'}}>${price}</span>
                <Button variant="contained"
                        color="primary" 
                        sx={{
                            backgroundColor:'#ffbb38',
                            width:'110px',
                            height:'30px',
                            marginTop:'10px'}}
                            onClick={onClickFun}
                >
                    Add To Cart
                </Button>
            </Box>
        </Card>
    );
}
export default Selling;