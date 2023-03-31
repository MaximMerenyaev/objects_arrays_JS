let pokemon = {
  0: {
    name: `Пикачу`,
    img: `assets/pikachu`,
    description: `Спокойный и добрый. Использует электричество,
    удары хвоста и укусы острых зубов.`
  },
  1: {
    name: `Бульбазавр`,
    img: `assets/bullbasaur`,
    description: `Самый спокойный и миролюбивый покемно, может быть
    лидером и заботиться о других.`
  },
  2: {
    name: `Джигглипафф`,
    img: `assets/jigglypuff`,
    description: `Очаровательное существо, но если его обидеть
    то надувает щёки, злится и даёт сдачи. Очень злопамятный!`
  },
  3: {
    name: `Мяут`,
    img: `assets/meowth`,
    description: `Здаиристый и наглый покемон. Гуляет по ночам
    и ворует блестящие предметы и монетки.`
  },
  4: {
    name: `Псайдак`,
    img: `assets/psyduck`,
    description: `Добрый и наивный, прожорливый, глуповатый. После сильной
    головной боли создает психическую атаку.`
  }
  
}


function renderItem(pok) {
  let template =  `
  <div class="col">
    <div class="card">
      <img src="assets/heart-fill.svg" class="heart">
      <img src="${pokemon[pok].img}.png" class="avatar card-img-top">
      <div class="card-body">
        <h5 class="card-title">${pokemon[pok].name}</h5>
        <p class="card-text">${pokemon[pok].description}</p>
      </div>
    </div>
  </div>
`;
  document
  .querySelector(`.pokemon-container`)
  .innerHTML += template;
}

for (let i = 0; i < 5; i++) {
  renderItem(i)
}

  document.querySelectorAll(`.card`).forEach(
    (item) => item.addEventListener(`click`, ()=>{
      if(item.classList.contains(`like`)) {
        item.classList.remove(`like`)
      } else {
        item.classList.add(`like`)
      }
    })
  )
