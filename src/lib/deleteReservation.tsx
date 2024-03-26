export default async function deleteReservation(id: string, token?: string) {
  const response = await fetch(`http://localhost:5000/api/v1/rentings/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch car providers");
  }
  return response.json();
}
