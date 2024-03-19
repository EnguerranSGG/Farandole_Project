import illustration from '../Illustrations_JPG/accessoires.jpg';
import useProductsData from '../hooks/convertFetchProductsData';
import { isEmpty, viewerAccessoires } from '../services/utilitaires';
import { voirAccessoires } from '../services/utilitaires';

function Accessoires() {
  const products = useProductsData();

  if (!products) {
    return null;
  }

  const accessories = (products.products && products.products.length > 0) ?
  products.products.filter(product => product.category === "accessories") :
  [];

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
        {Array.isArray(accessories) && !isEmpty(accessories) && accessories.map((product) => (
          <><div className='product' key={product.id}>
            <img src={product.image} onError={e => e.currentTarget.src =`${product.imageJPG}` } alt={product.nom} onClick={() => viewerAccessoires(product)} />
          </div>
            <div id='viewer_accessoires' className='notViewer'></div>
          </>
        ))}
      </section>
    </>
  );
}

export default Accessoires;