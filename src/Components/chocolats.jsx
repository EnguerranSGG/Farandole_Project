import React from "react";
import useProductsData from "../hooks/convertFetchProductsData";
import { isEmpty, showCoco } from "../services/utilitaires";

function Chocolats() {
    const products = useProductsData();

    if (!products) {
        return null;
    }

    const chocolates = (products.products && products.products.length > 0) ?
    products.products.filter(product => product.category === "artisanal_chocolates") :
    [];

    return (
        <>
            <section className="presentation_chocolats">
                <div><h1>Chocolats artisanaux</h1>
                    <h2>Découvrez notre gamme de chocolats faits maison !</h2>
                </div>
            </section>
            <section id="chocolats">
            </section>
            <section className='all_products'>
                    {Array.isArray(chocolates) && !isEmpty(chocolates) && chocolates.map((product, index) => (
                        <><div className='products' product={product} key={index}>
                            <img src={product.image} onError={e => e.currentTarget.src =`${product.imageJPG}` } alt={product.name} onClick={() => showCoco(product)} />
                        </div>
                            <div id='showCoco' className='notViewer'></div>
                        </>
                    ))}
                </section>
        </>
    )
}

export default Chocolats;