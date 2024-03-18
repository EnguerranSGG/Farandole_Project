import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function ProductComponent1({ product }) {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const compositions = product || produits.produits.product;

    return (
        <>
            <div className="presentation_compositions">
                <div><h1>Compositions de dragées</h1>
                    <h2>Que ce soit pour un baptême, une communion ou un mariage; n'hésitez pas à nous faire confiance pour la composition de dragées ! </h2>
                </div>
            </div>
            <div id="compositions">
            </div>
            <section className='all_products'>
                {Array.isArray(compositions) && !isEmpty(compositions) && compositions.map((produit, index) => (
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

export default ProductComponent1;