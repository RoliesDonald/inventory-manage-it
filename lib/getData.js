export async function getData(endpoint) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseURL}/api/${endpoint}`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
