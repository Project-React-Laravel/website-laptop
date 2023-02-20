import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import ButtonCart from '../ButtonCart';
import images from "@/pages/assets/image";

function Product({image,name,des,price}) {
    return (  
     <div>
        <Card style={{
                display:'flex',
                width:'270px',
                height:'500px',
                flexDirection:'column',
                marginTop:'20px',
                padding:'30px'
            }}>
        <CardMedia 
            title="" 
            image={images[image]}
            component="img"
            sx={{ width: 210 , height: 175 , margin:'0px 0px 20px' , borderBottom:'1px solid #ccc'}} 
        />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',fontSize:'15px',marginLeft:'15px'}}>
                <h1 style={{fontSize:'18px'}}>{name}</h1>
                <p style={{height:'100px',marginTop:'10px'}}>{des}</p>
                <span style={{fontSize:'18px',fontWeight:'600',color:'#ef262c'}}>${price}</span>
        </Box>
        <ButtonCart />
        </Card>
     </div>   
    );
}

export default Product;