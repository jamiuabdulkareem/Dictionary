import { useLoaderData, useParams } from "react-router-dom";
import getMeaning from "../services/apiDictionaryResult";

function Meaning() {
  const data = useLoaderData();
  const { id } = useParams();
  data.slice(0, 4).map((mean) => {
    console.log(mean);
  });

  return (
    <div className="mt-10 md:px-20">
      <div className="pb-4">
        <h1 className="text-6xl font-bold capitalize">{id}</h1>
        <hr />
      </div>

      <div>
        <h2 className="mb-3 text-3xl capitalize">Meaning</h2>
        <ul className="list-decimal px-10 font-light">
          {data.slice(0, 4).map((mean) => (
            <li key={mean.defid} className="pb-2">
              {mean.definition}{" "}
              <span className="font-semibold">Author: {mean.author}</span>
            </li>
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
