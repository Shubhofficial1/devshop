export const BASE_URL =
  process.env.NODE_ENV === "production" ? "http://localhost:5000" : "";
export const PRODUCT_URL = "api/v1/products";
export const USERS_URL = "api/v1/users";
export const ORDERS_URL = "api/v1/orders";
export const PAYPAL_CONFIG = "api/v1/config/paypal";
