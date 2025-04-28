import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

const fetchBookmarks = async (category: string) => {
  const response = await fetch(`${API_URL}/${category}`);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export const useBookmarks = (category: string) => {
  return useQuery({
    queryKey: ["bookmarks", category],
    queryFn: () => fetchBookmarks(category),
  });
};
