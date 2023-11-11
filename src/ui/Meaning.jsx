import { useLoaderData } from "react-router-dom";
import getMeaning from "../services/apiDictionaryResult";

function Meaning() {
  const { meanings, word, phonetic } = useLoaderData();
  const noun = meanings[0];
  const verb = meanings[1];

  const { definitions: nounDefine } = noun;
  const { definitions: verbDefine } = verb;

  return (
    <div className="mt-10 md:px-20">
      <div className="pb-4">
        <h1 className="text-6xl font-bold capitalize">{word}</h1>
        <span className="block pb-3 text-sky-400">{phonetic}</span>
        <hr />
      </div>

      <div>
        <h2 className="mb-3 text-3xl capitalize">{noun.partOfSpeech}</h2>
        <p className="mb-2 font-light italic">Meaning</p>
        <ul className="list-decimal px-10 font-light">
          {nounDefine.slice(0, 4).map((mean) => (
            <li key={mean.length}>{mean.definition}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="mb-3 text-3xl capitalize">{verb.partOfSpeech}</h2>
        <p className="mb-2 font-light italic">Meaning</p>
        <ul className="list-decimal px-10 font-light">
          {verbDefine.slice(0, 4).map((mean) => (
            <li key={mean.length}>{mean.definition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getMeaning(params.id);
  return data;
}

export default Meaning;
