import axios from "axios";

axios.defaults.baseURL = "https://3c46-119-206-216-76.ngrok-free.app/";

// 모든 상품 가져오기 GET
export const fetchProducts = async () => {
  try {
    const response = await axios.get("/products", {
      params: { page: 1, size: 100 },
    });

    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Products:", error);
  }
};

// 해당 상품의 리뷰 가져오기
export const fetchReviews = async productId => {
  try {
    const response = await axios.get(`/reviews/findByProduct/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};
