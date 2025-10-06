import { useState } from "react";

function FormTask() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>FormTask</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <input type="text" placeholder="Ajouter une tâche" />
        <button>Ajouter</button>
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </>
  );
}

export default FormTask;
