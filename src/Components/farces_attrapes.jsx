import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Farces() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const farce_attrape = produits.produits.farce_attrape;

    return (
        <>
            <div className="presentation_farce_attrape">
                <div>
                    <h1>Farce et attrape</h1>
                    <h2>Découvrez notre gamme de produits farce et attrape !</h2>
                </div>
            </div>
            <section className='all_products'>
                {Array.isArray(farce_attrape) && !isEmpty(farce_attrape) && farce_attrape.map((produit, index) => (
                    <><div className='products' produit={produit} key={index}>
                        <img src={produit.image} onError={e => e.currentTarget.src =`${produit.imageJPG}` } alt={produit.nom} onClick={() => viewerProduits(produit)} />
                    </div>
                        <div id='viewer' className='notViewer'></div>
                    </>
                ))}
            </section>
        </>
    );
}

export default Farces;