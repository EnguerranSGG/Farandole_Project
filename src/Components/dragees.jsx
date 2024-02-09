import React from "react";
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';

function Dragees() {
    const produits = useProduits();

    if (!produits) {
        return null;
    }

    const compositions = produits.produits.compositions_dragees;

    return (
        <>
            <div className="presentation_compositions">
                <div><h1>Compositions de dragées</h1>
                    <h2>Que ce soit pour un baptême, une communion ou un mariage; n'hésitez pas à nous faire confiance pour la composition de dragées ! </h2>
                </div>
            </div>
            <div id="compositions">
            </div>
            <section className='all_products'>
                {Array.isArray(compositions) && !isEmpty(compositions) && compositions.map((produit, index) => (
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

export default Dragees;

/** import osierBleu from "../Compositions_dragees/presentoire_dragees_bleu.jpg";
import licorne from "../Compositions_dragees/presentoire_dragees_licorne.jpg";
import grandeRoue from "../Compositions_dragees/presentoire_grande_roue.jpg";
import licorneFee from "../Compositions_dragees/presentoire_licornes_fees.jpg";
import manegePanda from "../Compositions_dragees/presentoire_manege_panda.jpg";
import mongolfiereLicorne from "../Compositions_dragees/presentoire_mongolfiere_licorne.jpg";
import wreckingChair from "../Compositions_dragees/presentoire_wrecking_chair.jpg";

<div className="all_compositions">
                <div className="compositions" id="composition1">
                    <img src={osierBleu} alt="présentoire en osier bleu" />
                    <h2> Présentoire en osier bleu </h2>
                </div>
                <div className="compositions" id="composition2">
                    <img src={licorne} alt="présentoire en licorne" />
                    <h2> Présentoire licornes </h2>
                </div>
                <div className="compositions" id="composition3">
                    <img src={grandeRoue} alt="présentoire en grande roue" />
                    <h2> Présentoire grande roue </h2>
                </div>
                <div className="compositions" id="composition4">
                    <img src={licorneFee} alt="présentoire en licorne fees" />
                    <h2> Présentoire licornes et fées </h2>
                </div>
                <div className="compositions" id="composition5">
                    <img src={manegePanda} alt="présentoire en manege panda" />
                    <h2> Présentoire manège et pandas </h2>
                </div>
                <div className="compositions" id="composition6">
                    <img src={mongolfiereLicorne} alt="présentoire en mongolfière licorne" />
                    <h2> Présentoire mongolfière et licornes </h2>
                </div>
                <div className="compositions" id="composition7">
                    <img src={wreckingChair} alt="présentoire en wrecking chair" />
                    <h2> Présentoire wrecking chair </h2>
                </div>
            </div> */