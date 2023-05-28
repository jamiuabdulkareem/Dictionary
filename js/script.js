"use strict";
const resultContainer = document.querySelector(".results");
const searchInput = document.querySelector(".search__input");
const btn = document.querySelector("#btn");

// Display loading spinner
const loadSpinner = function () {
  const markup = `
     <div class="spinner">
        <div class="custom-loader"></div>
      </div>
  `;
  resultContainer.innerHTML = "";
  resultContainer.insertAdjacentHTML("afterbegin", markup);
};

// Display search results
const displayResult = function (data) {
  console.log(data);

  // Noun
  const noun = data.meanings[0].definitions;
  const nounItem = noun.slice(0, 4).map((i) => `<li>${i.definition}</li>`);
  // console.log(meaning.definition);

  // Verb
  const verb = data.meanings[1].definitions;
  const verbItem = verb.slice(0, 4).map((i) => `<li>${i.definition}</li>`);

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
            <h2>${data.meanings[0].partOfSpeech}</h2>
            <span>Meaning</span>
            <ol class="results__defination--list">
              ${nounItem}
            </ol>

            <div class="results__defination--verb">
            <h2>${data.meanings[1].partOfSpeech}</h2>
            <span>Meaning</span>
            <ol class="results__defination--list">
              ${verbItem}
            </ol>
          </div>
          </div>
  `;

  resultContainer.innerHTML = "";
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
    console.log(
      "we could not find definitions for the word you were looking for"
    );
    throw err;
  }
};

// Handle event listener
btn.addEventListener("click", function (e) {
  e.preventDefault();
  loadSpinner();
  api(searchInput.value);
  searchInput.value = "";
});
