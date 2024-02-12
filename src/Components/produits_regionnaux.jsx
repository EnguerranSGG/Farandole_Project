import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import { isEmpty, viewerProduits } from "../services/utilitaires";

function Produits_regionaux() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const produits_regionaux = produits.produits.produits_regionaux;

    return <><section className="presentation_produits_regionnaux">
        <div><h1>Produits régionaux</h1>
            <h2>Découvrez ou redécouvrez des produits typiques du Nord !</h2></div>
    </section>
        <section className='all_products'>
            {Array.isArray(produits_regionaux) && !isEmpty(produits_regionaux) && produits_regionaux.map((produit, index) => (
                <><div className='products' produit={produit} key={index}>
                    <img src={produit.image} onError={e => e.currentTarget.src =`${produit.imageJPG}` } alt={produit.nom} onClick={() => viewerProduits(produit)} />
                </div>
                    <div id='viewer' className='notViewer'></div>
                </>
            ))}
        </section></>;
}

export default Produits_regionaux;