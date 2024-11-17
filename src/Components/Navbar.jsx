import { useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import menu_icon from '../assets/menu-icon.png'
import { Link } from 'react-scroll';
export default function Navbar(){

    const [sticky,superSticky]=useState(false);
    useEffect(
        ()=>{
            window.addEventListener('scroll',()=>{
                    window.scrollY>60?superSticky(true):superSticky(false);
            })
        },[])

        const [mobileMenu,setMobileMenu]=useState(false);
        const toggleMenu=()=>{
            mobileMenu?setMobileMenu(false):setMobileMenu(true);
        }
    return(
    <div>
        <nav className={`container ${sticky?'dark-nav':""}`}>
            <img src={logo} alt="image" />
            <ul className={mobileMenu?'':'hideMobileMenu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-160} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-160} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-160} duration={500}>Campus</Link></li>
                <li><Link to='Testmonials' smooth={true} offset={-160} duration={500}>Testimonials</Link></li>
                <li><Link className='btn' to='contact' smooth={true} offset={-161} duration={500}>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} alt="menu" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    </div>)
}