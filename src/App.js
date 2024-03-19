import './CSS/App.css';
import './CSS/Contact.css';
import './CSS/Footer.css';
import './CSS/Header_home.css';
import './CSS/Header.css';
import './CSS/Chateaux.css';
import './CSS/Modales_Templates.css';
import './CSS/Deguisements_Accessoires.css';
import './CSS/Chocolates_modal.css';
import './CSS/Cadeaux_perso.css';
import './CSS/Machines_mascottes.css';
import './CSS/Deco.css';
import './CSS/Error.css';
import './CSS/Mentions_legales.css';
import './CSS/Carrousel.css';
import './CSS/Product_presentation.css'

import Header from './Components/header';
import Deguisements from './Components/deguisements';
import Accessoires from './Components/accessoires';
import Contact from './Components/contact';
import HeaderHome from './Components/header_home';
import Footer from './Components/footer';
import Chateaux_gonflables from './Components/chateaux_gonflables';
import Perso from './Components/mug_puzzle_perso';
import Machines_alimentaires from './Components/machines_sucreries';
import Deco from './Components/deco_evenementielle';
import Error from './Components/error';
import Mentions from './Components/mentions_legales';
import ProductsMapper from './Components/products_mapper';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet /><Footer /></>,
    errorElement: <><Header /><Error /><Footer /></>,
    children: [
      {
        path: '',
        element: <><HeaderHome /></>
      },
      {
        path: 'Farandole_Project',
        element: <><HeaderHome /></>
      },
      {
        path: 'Deguisements',
        element: <><Header /><Deguisements /><Accessoires /></>
      },
      {
        path: 'Locations_evenementielles',
        element: <><Header /></>
      },
      {
        path: 'Perso',
        element: <><Header /><Perso /></>
      },
      {
        path: 'Celebrations',

        element: <><Header /><ProductsMapper category={'occasional_gifts'} /></>
      },
      {
        path: 'Chocolats',

        element: <><Header /><ProductsMapper category={'artisanal_chocolates'} /></>
      },
      {
        path: 'Dragees',

        element: <><Header /><ProductsMapper category={'sugared_almonds_compositions'} /></>
      },
      {
        path: 'Produits_regionnaux',

        element: <><Header /><ProductsMapper category={'local_products'} /></>
      },
      {
        path: 'Sucreries_antan',

        element: <><Header /><ProductsMapper category={'yesteryear_candies'} /></>
      },
      {
        path: 'Gateaux_bonbons',

        element: <><Header /><ProductsMapper category={'candies_cakes'} /></>
      },
      {
        path: 'Farces_attrapes',

        element: <><Header /><ProductsMapper category={'farces'} /></>
      },
      {
        path: 'Machines_alimentaires',

        element: <><Header /><Machines_alimentaires /></>
      },
      {
        path: 'Chateaux_gonflables',

        element: <><Header /><Chateaux_gonflables /></>
      },
      {
        path: 'Mascottes',

        element: <><Header /><ProductsMapper category={'mascots'} /></>
      },
      {
        path: 'Jeux',

        element: <><Header /><ProductsMapper category={'games'} /></>
      },
      {
        path: 'Deco_evenementielle',

        element: <><Header /><Deco /></>
      },
      {
        path: 'Contact',

        element: <><Header /><Contact /></>
      },
      {
        path: 'Mentions_legales',

        element: <><Header /><Mentions /></>
      }
    ]
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
