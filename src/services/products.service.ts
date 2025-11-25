import { apiClient } from "./api/client";
import { API_ENDPOINTS } from "./api/endpoints";
import { Product } from "@/lib/types";

export interface ProductsServiceInterface {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product>;
  getCategories(): Promise<string[]>;
  getByCategory(category: string): Promise<Product[]>;
}

class ProductsService implements ProductsServiceInterface {
  async getAll(): Promise<Product[]> {
    try {
      return await apiClient.get<Product[]>(API_ENDPOINTS.PRODUCTS.GET_ALL);
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }

  async getById(id: number): Promise<Product> {
    try {
      return await apiClient.get<Product>(API_ENDPOINTS.PRODUCTS.GET_BY_ID(id));
    } catch (error) {
      throw new Error(`Failed to fetch product with id: ${id}`);
    }
  }

  async getCategories(): Promise<string[]> {
    try {
      return await apiClient.get<string[]>(
        API_ENDPOINTS.PRODUCTS.GET_CATEGORIES
      );
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  }

  async getByCategory(category: string): Promise<Product[]> {
    try {
      return await apiClient.get<Product[]>(
        API_ENDPOINTS.PRODUCTS.GET_BY_CATEGORY(category)
      );
    } catch (error) {
      throw new Error(`Failed to fetch products in category: ${category}`);
    }
  }
}

export const productsService = new ProductsService();
