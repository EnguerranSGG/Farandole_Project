import React from "react";
import Facebook from "../Illustrations/facebook-logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="liens_contact">
                <div id="contact"><NavLink to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Nous contacter</NavLink></div>
                <div id="facebook"><a href="https://www.facebook.com/profile.php?id=100090708152032"><img src={Facebook} alt="Liens versFacebook"></img></a></div>
                <div id="contact"><NavLink to="/Mentions_legales" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Mentions légales</NavLink></div>
            </div>
            <div>
                <p>©2023LaFarandole. Tous droits reservés.</p>
            </div>
        </footer>
    )
}

export default Footer;