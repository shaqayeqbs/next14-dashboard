import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products.service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 3,
  });
};

export const useProductCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: productsService.getCategories,
    staleTime: 30 * 60 * 1000, // Cache for 30 minutes
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productsService.getById(id),
    enabled: !!id, // Only run if ID exists
  });
};
