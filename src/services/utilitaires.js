export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0))
}

export const voirDeguisements = () => {
  const produits = document.getElementById('deguisements');
  const instruction = document.getElementById('instruction_deguisements');

  if (produits.className === 'pasProduits') {
    produits.className = 'produits';
    instruction.textContent = 'Cacher tous les déguisements';
  } else {
    produits.className = 'pasProduits';
    instruction.textContent = 'Voir tous nos déguisements';
  }
}

export const voirAccessoires = () => {
  const produits = document.getElementById('accessoires');
  const instruction = document.getElementById('instruction_accessoires');

  if (produits.className === 'pasAccessoires') {
    produits.className = 'produits';
    instruction.textContent = 'Cacher tous les accessoires';
  } else {
    produits.className = 'pasAccessoires';
    instruction.textContent = 'Voir tous nos accessoires';
  }
}

export const viewerProduits = (produit) => {
  const viewer = document.getElementById('viewer');
  viewer.className = 'viewer';

  viewer.innerHTML = `
  <div>
    <img src="${produit.image}" alt="${produit.nom}" id="viewer_img"/>
    <p>${produit.nom}</p>
    <button class="btn" id="fermer_deguisements">Fermer</button>
  </div>`

  const btn = document.getElementById('fermer_deguisements');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const showCoco = (produit) => {
  const viewer = document.getElementById('showCoco');
  viewer.className = 'showCoco';

  viewer.innerHTML = `
    <section class="showCocoSection">
    <div><img src="${produit.image}" onError={e => e.currentTarget.src ="${produit.imageJPG}" } alt="${produit.nom}" id="choco_img"/></div>
    <div class="showCocoText"><p>${produit.nom}</p>
    <p>${produit.description}</p>
    <button class="btn" id="fermer_deguisements">Fermer</button></div></section>`

  const btn = document.getElementById('fermer_deguisements');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const viewerAccessoires = (produit) => {
  const viewer = document.getElementById('viewer_accessoires');
  viewer.className = 'viewer';

  viewer.innerHTML = `
    <div>
      <img src="${produit.image}" alt="${produit.nom}"/>
      <p>${produit.nom}</p>
      <button class="btn" id="fermer_accessoires">Fermer</button>
    </div>`

  const btn = document.getElementById('fermer_accessoires');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const viewerChateaux = (produit) => {
  const viewer = document.getElementById('viewer_accessoires');
  viewer.className = 'viewerChateaux';

  viewer.innerHTML = `
    <div>
    <h2>${produit.nom}</h2>
      <div id="images_chateaux"><img id="image1_chateaux" src="${produit.image1}" alt="${produit.nom}"/>
      <img id="image2_chateaux" src="${produit.image2}" alt="${produit.nom}"/>
      <img id="image3_chateaux" src="${produit.image3}" alt="${produit.nom}"/></div>
      <p>${produit.dimensions}</p>
      <button class="btn" id="fermer_accessoires">Fermer</button>
    </div>`

  const btn = document.getElementById('fermer_accessoires');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}
