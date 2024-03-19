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

export const viewerProduct = (product) => {
  const viewer = document.getElementById('viewer');
  viewer.className = 'viewer';

  viewer.innerHTML = `
  <div>
    <img src="${product.image}" onerror="this.src='${product.imageJPG}'" alt="${product.name}" id="viewer_img"/>
    <p>${product.name}</p>
    <button class="btn" id="fermer_deguisements">Fermer</button>
  </div>`

  const btn = document.getElementById('fermer_deguisements');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const showCoco = (product) => {
  const viewer = document.getElementById('showCoco');
  viewer.className = 'showCoco';

  viewer.innerHTML = `
    <section class="showCocoSection">
    <div><img src="${product.image}" onerror="this.src='${product.imageJPG}'" alt="${product.name}" id="choco_img"/></div>
    <div class="showCocoText"><p>${product.name}</p>
    <p>${product.description}</p>
    <button class="btn" id="fermer_deguisements">Fermer</button></div></section>`

  const btn = document.getElementById('fermer_deguisements');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const viewerAccessoires = (product) => {
  const viewer = document.getElementById('viewer_accessoires');
  viewer.className = 'viewer';

  viewer.innerHTML = `
    <div>
      <img src="${product.image}" onerror="this.src='${product.imageJPG}'" alt="${product.name}"/>
      <p>${product.name}</p>
      <button class="btn" id="fermer_accessoires">Fermer</button>
    </div>`

  const btn = document.getElementById('fermer_accessoires');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const viewerChateaux = (product) => {
  const viewer = document.getElementById('viewer_accessoires');
  viewer.className = 'viewerChateaux';

  viewer.innerHTML = `
    <div>
    <h2>${product.name}</h2>
      <div id="images_chateaux"><img id="image1_chateaux" src="${product.image1}" onerror="this.src='${product.imageJPG1}'" alt="${product.name}"/>
      <img id="image2_chateaux" src="${product.image2}" onerror="this.src='${product.imageJPG2}'" alt="${product.name}"/>
      <img id="image3_chateaux" src="${product.image3}" onerror="this.src='${product.imageJPG3}'" alt="${product.name}"/></div>
      <button class="btn" id="fermer_accessoires">Fermer</button>
    </div>`

  const btn = document.getElementById('fermer_accessoires');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}

export const viewerChateauxProvisoires = (product) => {
  const viewer = document.getElementById('viewer_accessoires');
  viewer.className = 'viewerChateaux';

  viewer.innerHTML = `
    <div>
    <h2>${product.name}</h2>
      <div id="images_chateaux_provisoires"><img src="${product.imageAVIF}" onerror="this.src='${product.imageJPG}'" alt="${product.name}"/>
      </div>
      <button class="btn" id="fermer_accessoires">Fermer</button>
    </div>`

  const btn = document.getElementById('fermer_accessoires');

  btn.addEventListener('click', () => {
    viewer.className = 'notViewer';
  })
}
