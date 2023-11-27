import illustration from '../Illustrations/illusatration_deguisement_provisoire.avif';
import illustrationJPG from 'https://github.com/EnguerranSGG/Farandole_Project/blob/main/src/Illustrations_JPG/illusatration_deguisement_provisoire.jpg?raw=true';
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
        <img src={illustration} onError={e => e.currentTarget.src ={illustrationJPG} } className='illustrations_page_DeguisementsAccessories' />
        <div>
          <h1>Découvrez aussi notre gamme d'accessoires</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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