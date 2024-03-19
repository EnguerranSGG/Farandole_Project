import React from "react";
import useProduits from '../hooks/convertFetchProductsData';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Mascottes() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const mascottes = produits.produits.mascottes;

    return (
        <>
            <div className="presentation_machines_mascottes" id="mascotte_presentation">
                <div>
                    <h1>Mascottes</h1>
                    <h2>Vous organisez un événement? Découvrez nos mascottes en location !</h2>
                </div>
            </div>
            <section className='all_machines_mascots'>
                {Array.isArray(mascottes) && !isEmpty(mascottes) && mascottes.map((produit, index) => (
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

export default Mascottes;