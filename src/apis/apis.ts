import axios from "axios";

export const getGlobal = async () => {
  try {
    const result = await axios.get("http://207.148.127.143/api/coins/global", {
      headers: {
        Accept: "application/json",
      },
    });
    const resultData = result.data;
    if (resultData.status === 200) {
      return resultData.result;
    }
  } catch (error) {}
};
