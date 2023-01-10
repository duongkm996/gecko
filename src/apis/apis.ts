import axios from "axios";
import { BASE_URL } from "../const";

export const getGlobal = async () => {
  try {
    const result = await axios.get(
      `${BASE_URL}/api/coins/global`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const resultData = result.data;
    if (resultData.status === 200) {
      return resultData.result;
    }
  } catch (error) { }
};
