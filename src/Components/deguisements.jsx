import illustration from '../Illustrations_JPG/illusatration_deguisement_provisoire.jpg';
import useProductsData from '../hooks/convertFetchProductsData';
import { isEmpty, viewerProduct } from '../services/utilitaires';
import { voirDeguisements } from '../services/utilitaires';

function Deguisements() {
  const products = useProductsData();

  if (!products) {
    return null;
  }

  const deguisements = (products.products && products.products.length > 0) ?
  products.products.filter(product => product.category === "deguisements") :
  [];

  return (
    <>
      <section className='presentation_deguisements'>
        <div>
          <h1>Découvrez nos déguisements à la location</h1>
          <a href='#deguisements' className='btnVoirDeguisements' onClick={() => voirDeguisements()}><span id='instruction_deguisements'>Voir tous nos déguisements</span></a>
        </div>
        <img src={illustration} onError={e => e.currentTarget.src = "../Illustrations_JPG/illusatration_deguisement_provisoire.jpg" } className='illustrations_page_DeguisementsAccessories' />
      </section>
      <section id='deguisements' className='pasProduits'>
        {Array.isArray(deguisements) && !isEmpty(deguisements) && deguisements.map((product, index) => (
          <><div className='produit' product={product} key={index}>
            <img src={product.image} onError={e => e.currentTarget.src =`${product.imageJPG}` } alt={product.name} onClick={() => viewerProduct(product)} />
          </div>
            <div id='viewer' className='notViewer'></div>
          </>
        ))}
      </section>
    </>
  );
}

export default Deguisements;
