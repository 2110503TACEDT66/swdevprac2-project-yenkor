export default async function getMe(token?: string) {
  const response = await fetch(`http://localhost:5000/api/v1/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch car providers");
  }
  return response.json();
}
