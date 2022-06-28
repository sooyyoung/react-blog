import './style/about.css'

import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram from '../assets/Instagram.svg';
import Github from '../assets/Github.svg';

function AboutMe(){
    return (
        <>
            <h2>About Me</h2>
            <img src="../../assets/profile.jpg" alt="" className="user-profile" />
            <p className="user-name">Chilli</p>
            <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
    )
}

function Categories(){
    return (
        <>
            <h3>Categories</h3>
            <ul className="categories">
                <li><a href="#">Life</a></li>
                <li><a href="#">Style</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Sport</a></li>
                <li><a href="#">Photo</a></li>
                <li><a href="#">Develop</a></li>
                <li><a href="#">Music</a></li>
            </ul>
        </>
    )
}

function Follow(){
    return (
        <>
            <h3>Follow</h3>
            <ul className="sns">
                <li>
                    <a href="#">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Github} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default function About(){
    return (
        <div className="about">
            <AboutMe />
            <Categories />
            <Follow />
        </div>
    )
}