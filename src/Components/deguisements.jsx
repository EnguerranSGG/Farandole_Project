import illustration from '../Illustrations/illusatration_deguisement_provisoire.avif';
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerProduits } from '../services/utilitaires';
import { voirDeguisements } from '../services/utilitaires';

function Deguisements() {
  const produits = useProduits();

  if (!produits) {
    return null;
  }

  const deguisements = produits.produits.deguisements;

  return (
    <>
      <section className='presentation_deguisements'>
        <div>
          <h1>Découvrez nos déguisements à la location</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href='#deguisements' className='btnVoirDeguisements' onClick={() => voirDeguisements()}><span id='instruction_deguisements'>Voir tous nos déguisements</span></a>
        </div>
        <img src={illustration} className='illustrations_page_DeguisementsAccessories' />
      </section>
      <section id='deguisements' className='pasProduits'>
        {Array.isArray(deguisements) && !isEmpty(deguisements) && deguisements.map((produit, index) => (
          <><div className='produit' produit={produit} key={index}>
            <img src={produit.image} alt={produit.nom} onClick={() => viewerProduits(produit)} />
          </div>
            <div id='viewer' className='notViewer'></div>
          </>
        ))}
      </section>
    </>
  );
}

export default Deguisements;
