const base_url = "https://jsonplaceholder.typicode.com";

const fetchData = async (url: string) => {
  const access_token = localStorage.getItem("accessToken");

  return await fetch(`${base_url + url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Request Failed");
    }

    return res.json();
  });
};

export default fetchData;
