export function createMarkupBigCard(result) {
  return result
    .map(
      (elem) => `<li class="productsItem">
    <div class="block_3">
    <img src="${elem.flags.svg}" class="image" width=80 height=50>
    </div>
    <div class="block_4">
    <h2 class="bigname" style="font-size:50px">${elem.name.official}</h2>
    </div>
    <h2 class="capital" style="font-size:25px">CAPITAL: ${elem.capital[0]}</h2>
    <h2 class="population" style="font-size:25px">POPULATION: ${elem.population}</h2>
    <h2 class="languages" style="font-size:25px">LANGUAGES: ${Object.values(elem.languages)}</h2>
  </li>`
    )
    .join('');
};

export function createMarkupLittleCard(result) {
  return result
    .map(
      (elem) => `<li class="productsItem">
    <div class="block_2">
    <img src="${elem.flags.svg}" class="image" width=40 height=25>
    </div>
    <div class="block_1">
    <h2 class="name">${elem.name.official}</h2>
    </div>
  </li>`
    )
    .join('');
};