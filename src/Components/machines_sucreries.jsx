import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Machines_alimentaires() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const machines = produits.produits.machines_alimentaires;

    return (
        <>
            <div className="presentation_machines">
                <div>
                    <h1>Machines à sucreries</h1>
                    <h2>Vous organisez un événement? Découvrez nos machines à sucreries en location !</h2>
                </div>
            </div>
            <section className='all_machines'>
                {Array.isArray(machines) && !isEmpty(machines) && machines.map((produit, index) => (
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

export default Machines_alimentaires;