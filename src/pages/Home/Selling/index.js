import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Selling({image,name,des,price}) {
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
            image={image}
            component="img"
            sx={{ width: 255 , height: 190 }} 
            />
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',fontSize:'15px',marginLeft:'15px'}}>
                <h1 style={{fontSize:'18px'}}>{name}</h1>
                <p>{des}</p>
                <span style={{fontSize:'18px',fontWeight:'600',color:'#ef262c'}}>${price}</span>
                <Button variant="contained" color="primary" sx={{backgroundColor:'#ffbb38',width:'110px',height:'30px',marginTop:'10px'}}>
                    Add To Cart
                </Button>
            </Box>
        </Card>
    );
}
export default Selling;