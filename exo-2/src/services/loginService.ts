const API_URL = "http://localhost:3001";

export async function setToken() {
  const method = "POST";

  const response = await fetch(`${API_URL}/login`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "student@example.com",
      password: "password",
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);

  return await response.json();
}
