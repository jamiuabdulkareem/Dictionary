import { useLoaderData, useParams } from "react-router-dom";
import getMeaning from "../services/apiDictionaryResult";

function Meaning() {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data);

  return (
    <div className="mt-10 md:px-20">
      <div className="pb-4">
        <h1 className="text-6xl font-bold capitalize">{id}</h1>
        <hr />
      </div>

      {data.length ? (
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
      ) : (
        <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Please check your spelling and try again with correct word 🤦‍♂️
        </p>
      )}
    </div>
  );
}

export async function loader({ params }) {
  const data = await getMeaning(params.id);
  return data;
}

export default Meaning;
