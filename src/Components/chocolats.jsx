import React from "react";
import choco_prix from "../Illustrations/chocolats_prix.jpg";

function Chocolats() {
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
        </>
    )
}

export default Chocolats;