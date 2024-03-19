import React from "react";
import useProductsData from '../hooks/convertFetchProductsData';
import { isEmpty, viewerProduct } from '../services/utilitaires';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carrousel() {

    const products = useProductsData();

    if (!products) return null;

    /* D'abord, le code va vérifier si products.products existe bien avant de s'assurer qu'il est bien une longueur supérieure à 0
    est est donc une array. Une fois ces deux vérification faite, il applique le filtrage basé sur la category*/

    const limitedTimeProducts = (products.products && products.products.length > 0) ?
    products.products.filter(product => product.category === "limited_time_products") :
    [];

    return (
        <div className="carrousel">
            <h1 id="produits_moment_titre">Nos produits du moment</h1>
            <Carousel autoPlay interval={3000} infiniteLoop showStatus={false} showIndicators={false}>
                {Array.isArray(limitedTimeProducts) && !isEmpty(limitedTimeProducts) && limitedTimeProducts.map((product, index) => (
                    <><div className='carrousel_element' product={product} key={index}>
                        <h1 className="nom_produit">{product.name}</h1>
                        <img src={product.image} onError={e => e.currentTarget.src = `${product.imageJPG}`} alt={product.name} onClick={() => viewerProduct(product)} />
                    </div>
                        <div id='viewer' className='notViewer'></div>
                    </>
                ))}
            </Carousel>
        </div>
    )
}

export default Carrousel;