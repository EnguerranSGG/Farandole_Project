import React from "react";
import useProduits from "../hooks/convertFetchProduits";
import { isEmpty, viewerChateaux } from "../services/utilitaires";

function Chateaux_gonflables() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const chateaux_gonflables = produits.produits.chateaux_gonflables;

    return <><section className="presentation_chateaux_gonflables">
        <div><h1>Chateaux gonflables</h1>
            <h2>Découvrez tous nos chateaux gonflables disponibles en location !</h2></div>
    </section>
        <section className='tous_les_chateaux'>
            {Array.isArray(chateaux_gonflables) && !isEmpty(chateaux_gonflables) && chateaux_gonflables.map((produit, index) => (
                <><div className='chateaux' produit={produit} key={index}>
                    <img id="chateaux_template_img" src={produit.image1} alt={produit.nom} onClick={() => viewerChateaux(produit)} />
                </div>
                    <div id='viewer_accessoires' className='notViewer'></div>
                </>
            ))}
        </section></>;
}

export default Chateaux_gonflables;