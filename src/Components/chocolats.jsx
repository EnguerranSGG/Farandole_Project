import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import { isEmpty, showCoco } from "../services/utilitaires";

function Chocolats() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const chocolats = produits.produits.chocolats_artisanaux;

    return (
        <>
            <section className="presentation_chocolats">
                <div><h1>Chocolats artisanaux</h1>
                    <h2> Découvrez notre gamme de chocolats faits maison !</h2>
                </div>
            </section>
            <section id="chocolats">
                <h1 className="chocolats">
                    Toute notre gamme :
                </h1>
            </section>
            <section className='all_products'>
                    {Array.isArray(chocolats) && !isEmpty(chocolats) && chocolats.map((produit, index) => (
                        <><div className='products' produit={produit} key={index}>
                            <img src={produit.image} alt={produit.nom} onClick={() => showCoco(produit)} />
                        </div>
                            <div id='showCoco' className='notViewer'></div>
                        </>
                    ))}
                </section>
        </>
    )
}

export default Chocolats;