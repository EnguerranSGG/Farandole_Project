import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Jeux() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const Jeux = produits.produits.jeux;

    return (
        <>
            <div className="presentation_jeux">
                <div>
                    <h1>Jeux</h1>
                    <h2>Vous organisez un événement? D'estaminet ou de kermesse, découvrez nos divers jeux en location !</h2>
                </div>
            </div>
            <section className='all_jeux'>
                {Array.isArray(Jeux) && !isEmpty(Jeux) && Jeux.map((produit, index) => (
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

export default Jeux;