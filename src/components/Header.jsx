import './style/header.css';
import '../button.css';

import Logo from '../assets/Logo.svg';
import iconModifyWhite from '../assets/icon-modify-white.svg';
import iconLogout from '../assets/icon-logout.svg';

function Login(){
    return (
        <div>
            <ul>
                <li className="profile-img">
                    <a href="#">
                        <img src="./assets/profile.jpg" alt="My Page" />
                    </a>
                </li>
                <li>
                    <a href="#" className="button">
                        <img src={iconModifyWhite} alt="" />
                        <span>Write</span>
                    </a>
                </li>
                <li>
                    <button className="button white">
                        <img src={iconLogout} alt="" />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default function Header(){
    return (
        <div>
            <header>
                <div className='max-width'>
                    <h1><a href="#"><img src={Logo} alt="My Blog" /></a></h1>
                    <Login />
                </div>
            </header>
        </div>
    )
}