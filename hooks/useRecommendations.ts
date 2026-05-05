import { api } from "@/src/service/axios";
import { useQuery } from "@tanstack/react-query";

function buildQueryString(location: string, filterParam: string, activeTab: string) {
  const locationQ = location ? `&location=${location}` : "";
  const tabFilter = activeTab === "Most Recommended" ? "" : `&filter=${activeTab}`;
  if (location) return `${locationQ}${tabFilter}`;
  if (filterParam) return `&filter=${filterParam}`;
  return tabFilter;
}

async function fetchRecommendations(
  page: number,
  limit: number,
  isListTrue: boolean,
  activeTab: string,
  location: string,
  filterParam: string,
) {
  const qs = buildQueryString(location, filterParam, activeTab);
  const res = await api.get(
    `recommendation?page=${page}&limit=${isListTrue ? 9 : limit}${qs}`,
  );
  return res.data?.data as {
    showFullList: boolean;
    recommendations: {
      docs:[];
      totalPages: number;
      totalDocs: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}

export function useRecommendations(
  page: number,
  limit: number,
  isListTrue: boolean,
  activeTab: string,
  location: string,
  filterParam: string,
  triggerRecommendations: any,
) {
  return useQuery({
    queryKey: [
      "recommendations",
      page,
      isListTrue ? 9 : limit,
      activeTab,
      triggerRecommendations,
      location,
      filterParam,
    ],
    queryFn: () =>
      fetchRecommendations(page, limit, isListTrue, activeTab, location, filterParam),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
}