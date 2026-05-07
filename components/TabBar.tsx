"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AxiosError } from "axios";

import { Tab_Data } from "@/utils/dumydata";
import { RootState, AppDispatch } from "@/store";
import { setActiveTab } from "@/store/tabSlice";
import { api } from "@/src/service/axios";
import { RecommendationItem, TabItem } from "@/types";

type TabBarProps = {
  tabarActive?: boolean;
  cardLength?: number;
};

const TabBar: React.FC<TabBarProps> = ({ tabarActive, cardLength }) => {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const isShowFullList = useSelector((state: RootState) => state.cardLength.isShowFullList);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const filter = searchParams.get("filter");

  const [locationData, setLocationData] = useState<RecommendationItem[]>([]);
  const [selectSuburb, setSelectSuburb] = useState<string | null>(search);

  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchRecommendations = useCallback(async () => {
    try {
      const res = await api.get("recommendation");
      setLocationData(res.data?.data?.recommendations?.docs ?? []);
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error fetching recommendations:", err.response?.data);
    }
  }, []);

  useEffect(() => {
    fetchRecommendations();
    dispatch(setActiveTab(""));
  }, [pathname, fetchRecommendations, dispatch]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });

  const isDisabled = !tabarActive && !isShowFullList;

  const uniqueLocations = useMemo(() => {
    const all = locationData.flatMap((item) => item.addresses);
    return [...new Set(all)].sort();
  }, [locationData]);

  const handleSuburbChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectSuburb(value);
    const suburb = value.toLowerCase();
    const url = filter
      ? `/discover?search=${suburb}&filter=${filter.toLowerCase()}`
      : `/discover?search=${suburb}`;
    router.push(url);
  };

  const handleTabChange = (title: string) => {
     const isAlreadyActive = isTabActive(title);

    if (isAlreadyActive) {
      dispatch(setActiveTab(""));
      const url = search ? `/discover?search=${selectSuburb}` : `/discover`;
      router.push(url);
      return;
    }
    const tab = title.toLowerCase();
    const url = search
      ? `/discover?search=${selectSuburb}&filter=${tab}`
      : `/discover?filter=${tab}`;
    router.push(url);
    dispatch(setActiveTab(title));
  };

  const isTabActive = (title: string) =>
    activeTab?.toLowerCase() === title.toLowerCase() ||
    title.toLowerCase() === filter;

  return (
    <div className="md:max-w-[1296px] md:my-4 p-4 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Tabs with scroll arrows (mobile only) */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <button
            onClick={scrollLeft}
            className="flex lg:hidden p-2 rounded-full bg-light-bg hover:bg-lightbg"
            aria-label="Scroll left"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth w-full lg:max-w-[750px]"
          >
            {Tab_Data.map((item: TabItem, ind: number) => (
              <button
                key={ind}
                disabled={isDisabled}
                onClick={() => handleTabChange(item.title)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all whitespace-nowrap
                  disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
                  ${isTabActive(item.title)
                    ? "bg-share-modal-icon text-white"
                    : "border border-border1 text-tabText"
                  }`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span className="font-medium capitalize">{item.title}</span>
              </button>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="flex lg:hidden p-2 rounded-full bg-light-bg hover:bg-lightbg"
            aria-label="Scroll right"
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>

        {/* Suburb Select */}
        <div className="w-full lg:w-auto">
          <select
            disabled={isDisabled}
            value={selectSuburb ?? ""}
            onChange={handleSuburbChange}
            className="w-full lg:w-auto border border-border-light px-5 py-3 rounded-xl outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select Suburb</option>
            {uniqueLocations.map((item, ind) => (
              <option key={ind} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
