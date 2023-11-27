import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import { isEmpty, viewerProduits } from "../services/utilitaires";

function Sucreries_autrefois() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const sucreries_antan = produits.produits.sucreries_antan;

    return <><section className="presentation_sucreries_antan">
        <div><h1>Friandises d'autrefois</h1>
            <h2>Découvrez ou redécouvrez les délicieuses sucreries d'antan !</h2></div>
    </section>
        <section className='all_products'>
            {Array.isArray(sucreries_antan) && !isEmpty(sucreries_antan) && sucreries_antan.map((produit, index) => (
                <><div className='products' produit={produit} key={index}>
                    <img src={produit.image} onError={e => e.currentTarget.src =`${produit.imageJPG}` } alt={produit.nom} onClick={() => viewerProduits(produit)} />
                </div>
                    <div id='viewer' className='notViewer'></div>
                </>
            ))}
        </section></>;
}

export default Sucreries_autrefois;