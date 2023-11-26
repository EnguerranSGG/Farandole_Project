import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import { isEmpty, viewerProduits } from "../services/utilitaires";

function Gateaux_bonbons() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const gateaux_bonbons = produits.produits.gateaux_bonbons;

    return <><section className="presentation_gateaux_bonbons">
        <div><h1>Gateaux en bonbons</h1>
            <h2>Que ce soit pour n'importe quel type de célébréations; nos gateaux en friandises disponibles sur commande ravieront petits et grands !</h2></div>
    </section>
        <section className='all_products'>
            {Array.isArray(gateaux_bonbons) && !isEmpty(gateaux_bonbons) && gateaux_bonbons.map((produit, index) => (
                <><div className='products' produit={produit} key={index}>
                    <img src={produit.image} onError={e => e.currentTarget.src =`${produit.imageJPG}` } alt={produit.nom} onClick={() => viewerProduits(produit)} />
                </div>
                    <div id='viewer' className='notViewer'></div>
                </>
            ))}
        </section></>;
}

export default Gateaux_bonbons;