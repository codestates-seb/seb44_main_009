import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("/products", {
      params: { page: 1, size: 10 },
    });

    const data = response.data;
    console.log("data", data);
  } catch (error) {
    console.error(error);
  }
};
