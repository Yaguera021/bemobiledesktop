export async function fetchEmployees() {
  try {
    const response = await fetch("http://localhost:3000/employees");
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
}
