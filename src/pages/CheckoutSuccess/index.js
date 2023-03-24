import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CheckoutSuccess() {
    return ( 
        <div>
            <div style={{
                width:'100%',
                padding:20,
                display:'flex',
                justifyContent:'center',
                fontSize:30,
                flexDirection:'column',
                alignItems:'center',
                color:'green',
                marginTop:200,
            }}>
                <FontAwesomeIcon style={{fontSize:280,marginBottom:30}} icon={faCircleCheck}/>
                <h1>Đặt hàng thành công</h1>
            </div>
        </div>
     );
}

export default CheckoutSuccess;