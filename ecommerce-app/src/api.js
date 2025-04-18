import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("/data/products.json");
  return response.data;
};
