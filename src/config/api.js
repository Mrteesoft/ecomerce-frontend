// API Configuration
// Local development configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/api/products`,
  PRODUCT_BY_ID: (id) => `${API_BASE_URL}/api/products/${id}`,
  PRODUCTS_BY_CATEGORY: (category) => `${API_BASE_URL}/api/products?category=${category}`
};

export default API_BASE_URL;
