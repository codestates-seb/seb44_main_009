import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("/products", {
      params: { page: 1, size: 10 },
    });

    const data = response.data;
    console.log("data", data);

    //콘솔을 지우고 데이터를 처리하는 로직 혹은 홈페이지
  } catch (error) {
    console.error(error);
  }
};
