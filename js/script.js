"use strict";
const resultContainer = document.querySelector("#result");
const searchInput = document.querySelector("#searchInput");
const btn = document.querySelector("#btn");

// Display search results
const displayResult = function (data) {
  console.log(data);
  const meaning = data.meanings[0].definitions[0];
  console.log(meaning.definition);

  const html = `<p>${meaning.definition}</p>`;

  resultContainer.innerHTML = "";
  resultContainer.insertAdjacentHTML("afterbegin", html);
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

// Handle event listener
btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".spinner").style.display = "";
  api(searchInput.value);
  searchInput.value = "";
});
