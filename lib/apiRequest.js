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
      setLoading(false);
      toast.success(`New ${resourceName} created successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("Not Enough Stock to Transfer");
      } else {
        toast.error("Upps Something went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseURL = "http://localhost:3000";
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setLoading(false);
      toast.success(`${resourceName} Updated successfully`);
      redirect();
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
