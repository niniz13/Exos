const API_URL = "http://localhost:3001";

export async function userLogin(email: string, password: string) {
  const method = "POST";

  const response = await fetch(`${API_URL}/login`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);

  return await data.token;
}
