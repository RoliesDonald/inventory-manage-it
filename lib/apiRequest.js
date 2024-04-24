import toast from "react-hot-toast";

export async function makeApiRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true);
    const baseURL = "http://localhost:3000";
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`New ${resourceName} created successfully`);
      reset();
    } else {
      setLoading(false);
      toast.error("Upps Something went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}
