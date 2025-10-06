import { useParams, useSearchParams } from "react-router-dom";

export default function TaskDetail() {
  const { id } = useParams();
  const [query, setQuery] = useSearchParams();

  const searchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setQuery({ name });
  }

  return (
    <div>
      <p>Task {id}</p>
      <input type="text" name="name" id="name" onChange={searchName}/>
      <p>Query: {query.get("name")}</p>
    </div>
  );
}
