import styles from './Header_nav.module.scss';
import classNames from 'classnames/bind';
import Nav from './nav.js';
import img from '../Img/admin2.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faComment, faHippo, faHouse, faNoteSticky, faPen } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Img({src})
{
    return <img src={src} alt="Logo"></img>
}

function HeaderNav()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [iscolor,setcolor]=useState(false)

    function Topbar({ setMenuStatus }) {
        return (
        <div className={cx("Main_nav_controller")} onClick={() => {
                if(iscolor===false)
                {
                    setcolor(true)
                }
                else
                {
                    setcolor(false)
                }

                if(isMenuOpen===true)
                {
                    setIsMenuOpen(false)
                }
                else
                    setIsMenuOpen(true)
                
            
          }}style={{ backgroundColor: iscolor ? "#21c1d6" : "",borderRadius:iscolor? "10px":"0" }} >
            <div><FontAwesomeIcon icon={faNoteSticky} style={{color:iscolor?"white":"" }}/></div>
            <div className={cx("Main_nav_controller2")}  style={{color:iscolor?"white":"" }} >Dashboards</div>
            <div ><FontAwesomeIcon icon={faChevronDown} style={{color:iscolor?"white":"" }}/></div>
        </div>
        )
      }
    return (
        
        <div className={cx("Main")}>
            <div className={cx("Main_nav")}>
                <Img src={img}/>
            </div>
            <div className={cx("Main_nav_home")}>
                <h1>Home</h1>
            </div>
            <div>
                <Topbar setMenuStatus={setIsMenuOpen}/>
                <Nav isOpen={isMenuOpen}/>
            </div>
            <div className={cx("Main_nav_controller")}>
                <div><FontAwesomeIcon icon={faHouse} /></div>
                <div  >Dashboards</div>
                <div ><FontAwesomeIcon icon={faPen} /></div>
            </div>
            <div className={cx("Main_nav_controller")}>
                <div><FontAwesomeIcon icon={faComment} /></div>
                <div  >Dashboards</div>
                <div ><FontAwesomeIcon icon={faPen} /></div>
            </div> 
            <div className={cx("Main_nav_controller")}>
                <div><FontAwesomeIcon icon={faHippo} /></div>
                <div  >Dashboards</div>
                <div ><FontAwesomeIcon icon={faPen} /></div>
            </div>
            
        </div>
    )
    
}
export default HeaderNav;