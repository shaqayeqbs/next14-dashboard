export const API_ENDPOINTS = {
  PRODUCTS: {
    GET_ALL: "/products",
    GET_BY_ID: (id: number) => `/products/${id}`,
    GET_CATEGORIES: "/products/categories",
    GET_BY_CATEGORY: (category: string) => `/products/category/${category}`,
  },
  CONTACT: {
    SUBMIT: "/contact",
  },
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
  },
} as const;
