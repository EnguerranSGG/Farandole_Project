import React from "react";
import useProductsData from '../hooks/convertFetchProductsData';
import { isEmpty, viewerProduct, showCoco } from '../services/utilitaires';

function ProductsMapper({ category }) {
    const products = useProductsData();
    let isChoco = false;

    if (!products) return null;

    /* D'abord, le code va vérifier si products.products existe bien avant de s'assurer qu'il est bien une longueur supérieure à 0
    est est donc une array. Une fois ces deux vérification faite, il applique le filtrage basé sur la category*/

    const filteredProducts = (products.products && products.products.length > 0) ?
        products.products.filter(product => product.category === category) :
        [];

    if (filteredProducts[0].category === 'artisanal_chocolates') {
        isChoco = true;
    }

    const filteredProductsPresentation = (products.products_presentations && products.products_presentations.length > 0) ?
        products.products_presentations.filter(productPresentation => productPresentation.category === category) :
        [];

    return (
        <>
            <div className="products_presentation" style={{ backgroundImage: `url(${filteredProductsPresentation[0].image}), url(${filteredProductsPresentation[0].imageJPG})` }}>
                <div className="products_description"><h1>{filteredProductsPresentation[0].first_title}</h1>
                    <h2>{filteredProductsPresentation[0].second_title}</h2>
                </div>
            </div>
            <div id="compositions">
            </div>
            <section className='all_products'>
                {Array.isArray(filteredProducts) && !isEmpty(filteredProducts) && filteredProducts.map((product, index) => (
                    <><div className='products' product={product} key={product.name}>
                        <img src={product.image} onError={e => e.currentTarget.src = `${product.imageJPG}`} alt={product.name} onClick={isChoco ? () => showCoco(product) : () => viewerProduct(product)} />
                    </div>
                        {isChoco ?
                            <div id="showCoco" className='notViewer'></div>
                            : <div id='viewer' className='notViewer'></div>
                        }
                    </>
                ))}
            </section>
        </>
    );
}

export default ProductsMapper;