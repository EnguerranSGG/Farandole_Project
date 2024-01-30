import React from 'react';
import { NavLink } from 'react-router-dom';
import Down from "../Illustrations/caret-down.svg";
import Up from "../Illustrations/caret-up.svg";
import { switchOver1, switchOut1, switchOver2, switchOut2, switchOver3, switchOut3, switchOver4, switchOut4 } from '../services/switch.arrows';

function HeaderHome() {
    return (
        <header id='HeaderHome'>
            <div id='banniere_gauche' />
            <NavLink to="/" className='logo' id='logo'><img src="https://fontmeme.com/permalink/231102/2a5041f89c099d072067ce1b12a8051d.png" alt="police-disney" border="0" /></NavLink>
            <nav>
            <div className='dropdown'>
                    <div className='arrows' onMouseOver={() => switchOver1()} onMouseOut={() => switchOut1()}><div><img src={Down} id='down1' className='up_down_show'></img><img src={Up} id='up1' className='up_down_none'></img></div><div><NavLink className="active">Confiseries</NavLink></div></div>
                    <div className='dropdown-content' onMouseOver={() => switchOver1()} onMouseOut={() => switchOut1()}>
                        <NavLink className="active" to="/Gateaux_bonbons">Gateaux en bonbons</NavLink>
                        <NavLink className="active" to="/Sucreries_antan">Friandises d'autrefois</NavLink>
                        <NavLink className="active" to="/Produits_regionnaux">Confiseries régionnales</NavLink>
                        <NavLink className="active" to="/Dragees">Compositions de dragées</NavLink>
                        <NavLink className="active" to="/Chocolats">Chocolats artisanaux</NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <div className='arrows' onMouseOver={() => switchOver2()} onMouseOut={() => switchOut2()}><div><img src={Down} id='down2' className='up_down_show'></img><img src={Up} id='up2' className='up_down_none'></img></div>
                        <div><NavLink className="active">Coin cadeaux</NavLink></div></div>
                    <div className='dropdown-content' onMouseOver={() => switchOver2()} onMouseOut={() => switchOut2()}>
                        <NavLink to="/Perso"> Mugs et puzzles personnalisables</NavLink>
                        <NavLink to="/Farces_attrapes"> Farce et attrape</NavLink>
                        <NavLink to="/Celebrations">Cadeaux toutes occasions</NavLink>
                    </div>
                </div>
                <div className='dropdown'>
                    <div className='arrows' onMouseOver={() => switchOver3()} onMouseOut={() => switchOut3()}><div><img src={Down} id='down3' className='up_down_show'></img><img src={Up} id='up3' className='up_down_none'></img></div><div><NavLink className="active" onMouseOver={() => switchOver3()} onMouseOut={() => switchOut3()}>Déguisements</NavLink></div></div>
                    <div className='dropdown-content'>
                        <NavLink className="active" to='/Deguisements'>Location de déguisements</NavLink>
                        <NavLink className="active" to='/Deguisements'>Accessoires et maquillages</NavLink>
                    </div>
                </div>
                <div className='dropdown'>
                    <div className='arrows' onMouseOver={() => switchOver4()} onMouseOut={() => switchOut4()}><div><img src={Down} id='down4' className='up_down_show'></img><img src={Up} id='up4' className='up_down_none'></img></div><div><NavLink className="active">Locations évementielles</NavLink></div></div>
                    <div className='dropdown-content' onMouseOver={() => switchOver4()} onMouseOut={() => switchOut4()}>
                        <NavLink className="active" to="/Chateaux_gonflables">Chateaux gonflables</NavLink>
                        <NavLink className="active" to="/Machines_alimentaires">Machines à sucreries</NavLink>
                        <NavLink className="active" to="/Jeux">Jeux</NavLink>
                        <NavLink className="active" to="/Deco_evenementielle">Décoration</NavLink>
                    </div>
                </div>
            </nav>
            <div id='banniere_droite' />
            <div className='bienvenue'>
                <div>
                <h1>Vous organisez un événement ? </h1>
                <h2>Un événement important pour <strong>vous</strong> est aussi important pour <strong>nous</strong>. </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eligendi. Vero error id cupiditate animi. Sed modi, odit veritatis earum nostrum labore consectetur fugiat minima officia hic nisi saepe quidem.</p>
                <section className='contact_home'><NavLink to="/Contact" className="btn_contact_home">Nous contacter</NavLink></section>
                </div>
            </div>
        </header>
    )
}

export default HeaderHome;