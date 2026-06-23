import { api } from "@/src/service/axios";
import { useQuery } from "@tanstack/react-query";

function buildQueryString(
  location: string,
  filterParam: string,
  activeTab: string
) {
  const formattedLocation =
    location?.trim()
      ? location
          .trim()
          .split(" ")
          .filter(Boolean)
          .map(
            (word) =>
              word.charAt(0).toUpperCase() +
              word.slice(1).toLowerCase()
          )
          .join(" ")
      : "";

  const locationQ = location
    ? `&location=${formattedLocation}`
    : "";

  const selectedFilter =
    activeTab && activeTab !== "Most Recommended"
      ? activeTab
      : filterParam;

  const filterQ = selectedFilter
    ? `&filter=${selectedFilter}`
    : "";

  return `${locationQ}${filterQ}`;
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
    `recommendation?page=${page}&limit=${isListTrue ? 6 : limit}${qs}`,
  );
  return res.data?.data as {
    showFullList: boolean;
    recommendations: {
      docs: [];
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