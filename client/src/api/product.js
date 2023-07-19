import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("/products", {
      params: { page: 1, size: 10 },
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Products:", error);
  }
};

//
export const fetchReviews = async productId => {
  try {
    const response = await axios.get(`/review/findByProduct/${productId}`); // API_URL에 실제 API 엔드포인트를 입력해야 합니다.
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};
//recoil로 관리
// import axios from "axios";
// import { productsState } from "../atoms/product";

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get("/products", {
//       params: { page: 1, size: 10 },
//     });

//     const data = response.data;
//     productsState(data); // Recoil 상태 업데이트
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
