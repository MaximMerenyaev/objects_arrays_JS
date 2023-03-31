let input = document.querySelector(`#input`);
let result = document.querySelector(`#result`);


const words = {
  "cat": {
    ru: `кошка`,
    transcription: `[kæt]`,
    example: `It was not he only cat.
    И это была не единственная кошка`
  },
  "dog": {
    ru: `собака`,
    transcription: `[dɒg]`,
    example: `Only the poor dog hasn't made the necessary deductions?
    Бедной собачке лишь не дано делать выводы?`
  },
  "crow": {
    ru: `ворона`,
    transcription: `[krəʊ]`,
    example: `The one crow was still there.
    Одна ворона по-прежнему сидела на месте.`
  },
  "frog": {
    ru: `лягушка`,
    transcription: `[frɒg]`,
    example: `She's an American Tree Frog.
    Это американская древесная квакша.`
  },
  "fox": {
    ru: `лиса`,
    transcription: `[fɒks]`,
    example: `Fox DNA, lots of fox-related stuff.
    ДНК лисы, куча всякого материала, имеющего отношение к лисам.`
  }
}


input.addEventListener(`keyup`, function(){
  let value = input.value;
  let template = `
<h5 class="card-title">${words[value].ru}</h5>
<h6 class="card-subtitle mb-2 text-muted">${words[value].transcription}</h6>
<p class="card-text">${words[value].example}</p>
`;
    if (words[value]){
      result.innerHTML = template;
    } else {
      result.innerHTML = ``;
    }
})