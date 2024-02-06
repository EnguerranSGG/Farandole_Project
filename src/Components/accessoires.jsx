import illustration from '../Illustrations/illusatration_deguisement_provisoire.avif';
import useProduits from '../hooks/convertFetchProduits';
import { isEmpty, viewerAccessoires } from '../services/utilitaires';
import { voirAccessoires } from '../services/utilitaires';

function Accessoires() {
  const produits = useProduits();

  if (!produits) {
    return null;
  }

  const accessoires = produits.produits.accessoires;

  return (
    <>
      <section className='presentation_accessoires'>
        <img src={illustration} onError={e => e.currentTarget.src = "../Illustrations_JPG/accessoires.jpg" } className='illustrations_page_DeguisementsAccessories' />
        <div>
          <h1>Découvrez aussi notre gamme d'accessoires</h1>
          <a href='#accessoires' className='btnVoirAccessoires' onClick={() => voirAccessoires()}><span id='instruction_accessoires'>Voir tous nos accessoires</span></a>
        </div>
      </section>
      <section id='accessoires' className='pasAccessoires'>
        {Array.isArray(accessoires) && !isEmpty(accessoires) && accessoires.map((produit) => (
          <><div className='produit' key={produit.id}>
            <img src={produit.image} onError={e => e.currentTarget.src =`${produit.imageJPG}` } alt={produit.nom} onClick={() => viewerAccessoires(produit)} />
          </div>
            <div id='viewer_accessoires' className='notViewer'></div>
          </>
        ))}
      </section>
    </>
  );
}

export default Accessoires;