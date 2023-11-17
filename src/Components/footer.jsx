import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div>
                <NavLink to="/Contact">Nous contacter</NavLink>
                <a href="https://www.facebook.com/profile.php?id=100090708152032"></a>
            </div>
            <div>
                <p>©2023LaFarandole. Tous droits reservés.</p>
            </div>
        </footer>
    )
}

export default Footer;