import React from "react";
import useProductsData from "../hooks/convertFetchProductsData";
import { isEmpty, viewerChateaux, viewerChateauxProvisoires } from "../services/utilitaires";

function Chateaux_gonflables() {
    const products = useProductsData();

    if (!products) {
        return null;
    }

    const boncyCastels = (products.products && products.products.length > 0) ?
    products.products.filter(product => product.category === "boncy_castels") :
    [];

    const temporaryBoncyCastels = (products.products && products.products.length > 0) ?
    products.products.filter(product => product.category === "temporary_boncy_castels") :
    [];

    return <><section className="presentation_chateaux_gonflables">
        <div><h1>Chateaux gonflables</h1>
            <h2>Découvrez tous nos chateaux gonflables disponibles en location !</h2></div>
    </section>
        <section className='tous_les_chateaux'>
            {Array.isArray(boncyCastels) && !isEmpty(boncyCastels) && boncyCastels.map((product, index) => (
                <><div className='chateaux' product={product} key={index}>
                    <img id="chateaux_template_img" src={product.image1} onError={e => e.currentTarget.src =`${product.imageJPG1}` } alt={product.name} onClick={() => viewerChateaux(product)} />
                </div>
                    <div id='viewer_accessoires' className='notViewer'></div>
                </>
            ))}
            {Array.isArray(temporaryBoncyCastels) && !isEmpty(temporaryBoncyCastels) && temporaryBoncyCastels.map((product, index) => (
                <><div className='chateaux' product={product} key={index}>
                    <img id="chateaux_template_img" src={product.imageAVIF} onError={e => e.currentTarget.src =`${product.imageJPG}` } alt={product.name} onClick={() => viewerChateauxProvisoires(product)} />
                </div>
                    <div id='viewer_accessoires' className='notViewer'></div></>
            ))}
        </section></>;
}

export default Chateaux_gonflables;