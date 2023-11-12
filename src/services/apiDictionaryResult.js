import { useDispatch } from "react-redux";

const API_URL =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "21b88c5f83mshec0af511739a0ffp1476d6jsn83db87913cf2",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
};

export default async function getMeaning(word) {
  const res = await fetch(`${API_URL}=${word}`, options);

  if (!res.ok) throw Error("Failed to get meaning");

  const data = await res.json();
  return data.list;
}
