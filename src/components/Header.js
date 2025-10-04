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
    <div className="flex justify-between shadow-lg m-2">
        <div className="logo-container mb-3">
            <img className="w-40"
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--2048x1152.jpg"/>
        </div>
        <div className="flex items-center mb-3">
            <ul className="flex px-4 m-4">
                <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-4">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="px-4">
                    <Link to={"/about"}>About Us</Link>
                </li>
                <li className="px-4">
                    <NavLink className={({isActive})=>(isActive ? 'activeLink' : '')} to={"/contact"}>Contact Us</NavLink>
                </li>
                <li className="px-4">
                    <Link to={"/grocery"}>Grocery</Link>
                </li>
                <li className="px-4">
                    <Link >Cart</Link>
                </li>
                <li className="px-4">
                    <Link>Login</Link>
                </li>
            </ul>
        </div>
    </div>
)};

export default Header;