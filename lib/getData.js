export async function getData(endpoint) {
  try {
    const baseURL = "http://localhost:3000";
    const response = await fetch(`${baseURL}/api/${endpoint}`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
