export default async function editReservation(
  rentTo: Date,
  rentDate: Date,
  id: string,
  token: string
) {
  const response = await fetch(`http://localhost:5000/api/v1/rentings/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      rentTo: rentTo,
      rentDate: rentDate,
      returned: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create reservation");
  }
  return response.json();
}
