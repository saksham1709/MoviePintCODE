import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setclick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleclick = () => {
        setclick(!click);
    }
    const changebackground = () => {
        if (window.scrollY > 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changebackground);
    return (
        <nav>
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <div className={navbar ? 'nav-logo active' : 'nav-logo'}>
                    {/* <a href="/"><i class="logo fas fa-film"></i></a> */}
                    <a href="/">
                        {/* <i class="logo fas fa-film"></i> */}
                        <h2>
                            <i class="logo fas fa-film"></i>
                            MOVIE PINT
                        </h2>
                    </a>
                </div>
                <div className={navbar ? 'nav-toggle active' : 'nav-toggle'} onClick={handleclick}>
                    <div className={click ? 'line1' : 'line'}></div>
                    <div className={click ? 'line2' : 'line'}></div>
                    <div className={click ? 'line3' : 'line'}></div>
                </div>
                <div className={navbar ? 'nav-links active' : 'nav-links'}>
                    <ul className={click ? 'links-list-mobile' : 'links-list'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-social">
                    <ul className={click ? 'social-list-mobile' : 'social-list'}>
                        <li><a href="https://www.facebook.com/"><img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" /></a></li>
                        <li><a href="https://www.instagram.com/"><img src="https://img.icons8.com/fluent-systems-filled/24/4a90e2/instagram-new.png" /></a></li>
                        <li><a href="https://www.twitter.com/"><img src="https://img.icons8.com/fluent-systems-filled/24/4a90e2/twitter.png" /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;