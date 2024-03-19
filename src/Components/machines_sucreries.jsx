import React from "react";
import { isEmpty, viewerProduct } from '../services/utilitaires';
import useProductsData from "../hooks/convertFetchProductsData";

function Machines_alimentaires() {
    const products = useProductsData();

    if (!products) {
        return null;
    }

    const machines = (products.products && products.products.length > 0) ?
    products.products.filter(product => product.category === "alimentary_machines") :
    [];

    return (
        <>
            <div className="presentation_machines_mascottes">
                <div>
                    <h1>Machines à sucreries</h1>
                    <h2>Vous organisez un événement? Découvrez nos machines à sucreries en location !</h2>
                </div>
            </div>
            <section className='all_machines_mascots'>
                {Array.isArray(machines) && !isEmpty(machines) && machines.map((product, index) => (
                    <><div className='products' product={product} key={index}>
                        <img src={product.image} onError={e => e.currentTarget.src =`${product.imageJPG}` } alt={product.name} onClick={() => viewerProduct(product)} />
                    </div>
                        <div id='viewer' className='notViewer'></div>
                    </>
                ))}
            </section>
        </>
    );
}

export default Machines_alimentaires;