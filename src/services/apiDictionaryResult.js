const API_URL ="https://api.dictionaryapi.dev/api/v2/entries/en";

export default async function getMeaning(word) {
   const res = await fetch(`${API_URL}/${word}`);

   if(!res.ok) throw Error("Failed to get meaning");

   const data = await res.json();
   return data[0];
}