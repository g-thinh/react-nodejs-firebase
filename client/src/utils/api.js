const BASE_URL = "/hello";

export async function getHello() {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
