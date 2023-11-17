import './CSS/App.css';
import './CSS/Contact.css';

import Header from './Components/header';
import Deguisements from './Components/deguisements';
import Accessoires from './Components/accessoires';
import Contact from './Components/contact';
import HeaderHome from './Components/header_home';
import Chocolats from './Components/chocolats';
import Footer from './Components/footer';
import Dragees from './Components/dragees';
import Produits_regionnaux from './Components/produits_regionnaux';
import Sucreries_autrefois from './Components/sucrerie_autrefois';
import Gateaux_bonbons from './Components/gateaux_bonbons';
import Chateaux_gonflables from './Components/chateaux_gonflables';
import Perso from './Components/mug_puzzle_perso';
import Farces from './Components/farces_attrapes';
import Celebrations from './Components/cadeaux_celebrationnels';
import Machines_alimentaires from './Components/machines_sucreries';
import Estaminet from './Components/jeux_estaminet';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet /><Footer /></>,
    errorElement: <><Header /><h1>Désolé mais cette page n'existe pas.</h1><Footer /></>,
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

        element: <><Header /><Celebrations /></>
      },
      {
        path: 'Chocolats',

        element: <><Header /><Chocolats /></>
      },
      {
        path: 'Dragees',

        element: <><Header /><Dragees /></>
      },
      {
        path: 'Produits_regionnaux',

        element: <><Header /><Produits_regionnaux /></>
      },
      {
        path: 'Sucreries_antan',

        element: <><Header /><Sucreries_autrefois /></>
      },
      {
        path: 'Confiseries',

        element: <><Header /><Sucreries_autrefois /></>
      },
      {
        path: 'Gateaux_bonbons',

        element: <><Header /><Gateaux_bonbons /></>
      },
      {
        path: 'Farces_attrapes',

        element: <><Header /><Farces /></>
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
        path: 'Jeux_estaminet',

        element: <><Header /><Estaminet /></>
      },
      {
        path: 'Contact',

        element: <><Header /><Contact /></>
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
