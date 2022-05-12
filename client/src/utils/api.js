const BASE_URL = "/api";

export async function getHello() {
  try {
    const response = await fetch("/hello");
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getFeed() {
  try {
    const response = await fetch(BASE_URL + "/feed");
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
