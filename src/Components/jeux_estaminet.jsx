import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Estaminet() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const jeux_estaminet = produits.produits.jeux_estaminet;

    return (
        <>
            <div className="presentation_jeux">
                <div>
                    <h1>Jeux d'estaminet</h1>
                    <h2>Vous organisez un événement? Découvrez nos jeux d'estaminet en location !</h2>
                </div>
            </div>
            <section className='all_jeux'>
                {Array.isArray(jeux_estaminet) && !isEmpty(jeux_estaminet) && jeux_estaminet.map((produit, index) => (
                    <><div className='products' produit={produit} key={index}>
                        <img src={produit.image} alt={produit.nom} onClick={() => viewerProduits(produit)} />
                    </div>
                        <div id='viewer' className='notViewer'></div>
                    </>
                ))}
            </section>
        </>
    );
}

export default Estaminet;