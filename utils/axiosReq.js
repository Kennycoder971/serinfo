import axios from "axios";

export default async function axiosReq(url, method, payload) {
  let [data, error, loaded] = [null, "", false];

  try {
    const response = await axios.request({
      data: payload,
      method,
      url,
    });

    data = response.data;
  } catch (err) {
    error = err.response;
  } finally {
    loaded = true;
  }
  return { data, error, loaded };
}
