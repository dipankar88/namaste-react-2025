import { Link, NavLink } from "react-router";
import '../styles/Header.css'
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const onlineStatus = useOnlineStatus();
    const myStyle = {
        height: '110px',
        width: '90px'
    };
    return ( //JSX
    <div style={{display: "flex", border: "1px solid black", width: "100%"}}>
        <div className="logo-container" style={{height: "100%"}}>
            <img className="logo" style={myStyle}
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--2048x1152.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive ? 'activeLink' : '')} to={"/contact"}>Contact Us</NavLink>
                </li>
            </ul>
        </div>
    </div>
)};

export default Header;