"use client";

import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { setPaginationData } from "@/store/paginationSlice";
import { setCardLength, setIsShowFullList } from "@/store/searchCountSlice";
import { useRecommendations } from "@/hooks/useRecommendations";
import CardEmpty from "./Card/CardEmpty";
import RecommendationCard from "./Card/RecommendationCard";
import ShareModal from "./ShareModal";
import CardPagination from "./Card/CardPagination";
import { RecommendationItem } from "@/types";

const Card = () => {
  const dispatch = useDispatch();
  const params = useSearchParams();

  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const { page, limit, totalPages } = useSelector(
    (state: RootState) => state.pagination,
  );
  const { triggerRecommendations } = useSelector(
    (state: RootState) => state.share,
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isListTrue, setIsListTrue] = useState(false);

  const location = params.get("search") ?? "";
  const filterParam = params.get("filter") ?? "";

  const { data, isLoading } = useRecommendations(
    page,
    limit,
    isListTrue,
    activeTab,
    location,
    filterParam,
    triggerRecommendations,
  );

  // Redux sync
  useEffect(() => {
    if (!data) return;
    const recs = data.recommendations;
    setIsListTrue(data?.showFullList);
    dispatch(setCardLength(recs?.totalDocs));
    dispatch(setIsShowFullList(data?.showFullList));
    dispatch(
      setPaginationData({
        totalPages: recs?.totalPages,
        totalDocs: recs?.totalDocs,
        hasNextPage: recs?.hasNextPage,
        hasPrevPage: recs?.hasPrevPage,
      }),
    );
  }, [data, dispatch]);

  const recommendations = data?.recommendations;
  const docs = isListTrue
    ? recommendations?.docs?.slice(0, 6)
    : recommendations?.docs?.slice(0, 3);

  if (!docs?.length) {
    return <CardEmpty isLoading={isLoading} />;
  }

  return (
    <div>
      <div className="max-w-[1396px] mx-auto md:p-0 p-4">
        <div className="">
          <div className="flex items-stretch gap-4 flex-wrap justify-center">
            {docs.map((item: RecommendationItem, ind: number) => (
              <RecommendationCard
                key={ind}
                item={item}
                isActive={activeIndex === ind}
                onToggle={() =>
                  setActiveIndex(activeIndex === ind ? null : ind)
                }
              />
            ))}
          </div>
        </div>
      </div>

      <ShareModal />

      {recommendations && (
        <CardPagination
          page={page}
          totalPages={totalPages}
          hasNextPage={recommendations.hasNextPage}
          hasPrevPage={recommendations.hasPrevPage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Card;
