import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import img from './laptop.png';
import Button from '@mui/material/Button'

function Selling({children}) {
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
            image={img}
            component="img"
            sx={{ width: 255 , height: 190 }} 
            />
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',fontSize:'15px',marginLeft:'15px'}}>
                <h1 style={{fontSize:'18px'}}>Laptop Asus Vivobook A1503ZA-L1139W i5</h1>
                <p>Senmei ipsum dolore eiusmod dolor officia do nisi</p>
                <span style={{fontSize:'18px',fontWeight:'600',color:'#ef262c'}}>$27</span>
                <Button variant="contained" color="primary" sx={{backgroundColor:'#ffbb38',width:'110px',height:'30px'}}>
                    Add To Cart
                </Button>
            </Box>
        </Card>
    );
}

export default Selling;