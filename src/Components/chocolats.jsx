import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import choco_prix from "../Illustrations/chocolats_prix.avif";
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
                <p className="chocolats">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et doloremque modi quidem quia voluptatibus, dicta aspernatur aliquid eveniet, accusantium explicabo ea quasi placeat vel. Obcaecati debitis reiciendis nesciunt ullam.
                </p>
                <div className="prix_chocolats">
                    <img src={choco_prix} alt="Prix des chocolats" />
                </div>
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