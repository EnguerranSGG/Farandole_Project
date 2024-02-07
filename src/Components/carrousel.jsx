import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carrousel() {

    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const produits_moment = produits.produits.produits_moment;

    return (
        <div className="carrousel">
            <h1 id="produits_moment_titre">Nos produits du moment</h1>
            <Carousel autoPlay interval={3000} infiniteLoop showStatus={false} showIndicators={false}>
                {Array.isArray(produits_moment) && !isEmpty(produits_moment) && produits_moment.map((produit, index) => (
                    <><div className='carrousel_element' produit={produit} key={index}>
                        <h1 className="nom_produit">{produit.nom}</h1>
                        <img src={produit.image} onError={e => e.currentTarget.src = `${produit.imageJPG}`} alt={produit.nom} onClick={() => viewerProduits(produit)} />
                    </div>
                        <div id='viewer' className='notViewer'></div>
                    </>
                ))}
            </Carousel>
        </div>
    )
}

export default Carrousel;