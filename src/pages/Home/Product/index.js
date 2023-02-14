import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import img from '../Selling/laptop.png';
import ButtonCart from '../ButtonCart';

function Product({children}) {
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
            image={children}
            component="img"
            sx={{ width: 210 , height: 175 , margin:'0px 0px 20px' , borderBottom:'1px solid #ccc'}} 
        />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',fontSize:'15px',marginLeft:'15px'}}>
                <h1 style={{fontSize:'18px'}}>Laptop Asus Vivobook A1503ZA-L1139W i5</h1>
                <p>Senmei ipsum dolore eiusmod dolor officia do nisi</p>
                <span style={{fontSize:'18px',fontWeight:'600',color:'#ef262c'}}>$27</span>
        </Box>
        <ButtonCart />
        </Card>
        
     </div>   
    );
}

export default Product;