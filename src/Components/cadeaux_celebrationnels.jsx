import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Celebrations() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const cadeaux = produits.produits.cadeaux_occasionnels;

    return (
        <>
            <div className="presentation_cadeaux">
                <div>
                    <h1>Cadeaux toutes occasions</h1>
                    <h2>Découvrez notre gamme de cadeaux toutes occasions disponible en magasin et sur commande !</h2>
                </div>
            </div>
            <section className='all_products'>
                {Array.isArray(cadeaux) && !isEmpty(cadeaux) && cadeaux.map((produit, index) => (
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

export default Celebrations;