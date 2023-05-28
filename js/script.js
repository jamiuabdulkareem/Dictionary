"use strict";
const resultContainer = document.querySelector(".results");
const searchInput = document.querySelector(".search__input");
const btn = document.querySelector("#btn");

// Display search results
const displayResult = function (data) {
  console.log(data);
  const noun = data.meanings[0].definitions;
  const nounItem = noun.slice(0, 4).map((i) => `<li>${i.definition}</li>`);
  // console.log(meaning.definition);

  const markup = `
  <div class="results__word">
            <div class="results__word--heading">
              <h1>${data.word}</h1>
              <p>${data.phonetic}</p>
            </div>
            <div>
              <button class="results__word-play--btn">
                <ion-icon class="results__word-play--btn-icon" name="play"></ion-icon>
              </button>
            </div>
          </div>
          <hr>

          <div class="results__defination">
            <h2>Noun</h2>
            <span>Meaning</span>
            <ol class="results__defination--list">
              ${nounItem}
            </ol>
  `;

  {
    /* nounItem.foreach(function (list) {
    return  `
    <div class="results__defination">
    <h2>Noun</h2>
    <span>Meaning</span>
    <ol class="results__defination--list">
      <li>${list}</li>
    </ol>
    `;
  }); */
  }

  // const html = `<p>${meaning.definition}</p>`;

  // resultContainer.innerHTML = "";
  resultContainer.insertAdjacentHTML("afterbegin", markup);
};

// Dictionary api
const api = async function (word) {
  try {
    const url = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await url.json();
    displayResult(data[0]);
  } catch (err) {
    console.log(err);
  }
};

api("class");

// Handle event listener
btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".spinner").style.display = "";
  api(searchInput.value);
  searchInput.value = "";
});
