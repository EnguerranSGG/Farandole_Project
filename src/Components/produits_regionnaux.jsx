import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import { isEmpty, viewerProduits } from "../services/utilitaires";

function Produits_regionnaux() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const produits_regionnaux = produits.produits.produits_regionnaux;

    return <><section className="presentation_produits_regionnaux">
        <div><h1>Produits régionnaux</h1>
            <h2>Découvrez ou redécouvrez des produits typiques du Nord !</h2></div>
    </section>
        <section className='all_products'>
            {Array.isArray(produits_regionnaux) && !isEmpty(produits_regionnaux) && produits_regionnaux.map((produit, index) => (
                <><div className='products' produit={produit} key={index}>
                    <img src={produit.image} onError={e => e.currentTarget.src =`${produit.imageJPG}` } alt={produit.nom} onClick={() => viewerProduits(produit)} />
                </div>
                    <div id='viewer' className='notViewer'></div>
                </>
            ))}
        </section></>;
}

export default Produits_regionnaux;