const API_URL = "http://localhost:3001";

export async function fetchTasks() {
  const method = "GET";

  const response = await fetch(`${API_URL}/tasks`, {
    method,
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
}
