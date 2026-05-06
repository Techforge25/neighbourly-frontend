"use client";
import { Tab_Data } from "@/utils/dumydata";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setActiveTab } from "@/store/tabSlice";
import { api } from "@/src/service/axios";
import { useEffect, useState, useRef, use } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { StringDecoder } from "string_decoder";
import { AxiosError } from "axios";
import { RecommendationItem, TabItem } from "@/types";

type TabBarProps = {
  tabarActive?: Boolean;
  cardLength?: number;
};

const TabBar: React.FC<TabBarProps> = ({ tabarActive, cardLength }) => {
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);

  const isShowFullList = useSelector(
    (state: RootState) => state.cardLength.isShowFullList,
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = usePathname();
  const param = useSearchParams();
  const search = searchParams.get("search");
  const filter = searchParams.get("filter");
  const dispatch = useDispatch<AppDispatch>();
  const [locationData, SetLocationData] = useState([]);
  const [selectSuburb, setSelectSuburb] = useState<string | null>(search);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getCategotyData = async () => {
    try {
      const res = await api.get(`recommendation`);
      const cetData = res.data;
      SetLocationData(cetData?.data?.recommendations?.docs);
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log(err.response?.data, "Error fetching category data");
    }
  };

  useEffect(() => {
    getCategotyData();
    dispatch(setActiveTab(""));
  }, [params]);

  //  Scroll Functions
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const isDisabled = !tabarActive && !isShowFullList;

  const uniqueLocations = [
    ...new Set(
      locationData.flatMap((item: RecommendationItem) => item.addresses),
    ),
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSuburb(e.target.value);
    const selectedSuburb = e.target.value.toLocaleLowerCase();
    if (filter) {
      router.push(
        `/discover?search=${selectedSuburb}&filter=${filter.toLocaleLowerCase()}`,
      );
    } else {
      router.push(`/discover?search=${selectedSuburb}`);
    }
  };

  const handleChangeFilter = (item: string) => {
    if (search) {
      router.push(
        `/discover?search=${selectSuburb}&filter=${item.toLocaleLowerCase()}`,
      );
      dispatch(setActiveTab(item));
    } else {
      router.push(`/discover?filter=${item.toLocaleLowerCase()}`);
      dispatch(setActiveTab(item));
    }
  };

  return (
    <div className="md:max-w-[1296px] md:my-4 p-4 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* LEFT: Tabs Section */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          {/* Left Arrow (only on lg+) */}
          <button
            onClick={scrollLeft}
            className="flex lg:hidden p-2 rounded-full bg-light-bg hover:bg-lightbg"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>

          {/* Tabs */}
          <div
            ref={scrollRef}
            className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth w-full lg:max-w-[750px]"
          >
            {Tab_Data.map((item: TabItem, ind: number) => (
              <button
                key={ind}
                disabled={isDisabled}
                onClick={() => handleChangeFilter(item?.title)}
                className={`flex items-center gap-2 px-5 py-3 cursor-pointer rounded-full transition-all whitespace-nowrap
              ${
                activeTab?.toLowerCase() === item?.title?.toLowerCase() ||
                item.title.toLowerCase() === filter
                  ? "bg-share-modal-icon text-white"
                  : "border border-border1 text-tabText"
              }`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span className="font-medium capitalize">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Right Arrow (only on lg+) */}
          <button
            onClick={scrollRight}
            className="flex lg:hidden p-2 rounded-full bg-light-bg hover:bg-lightbg"
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>

        {/* RIGHT: Select */}
        <div className="w-full lg:w-auto">
          <select
            disabled={isDisabled}
            value={selectSuburb ?? ""}
            onChange={handleSearchChange}
            className="w-full lg:w-auto border cursor-pointer border-border-light px-5 py-3 rounded-xl"
          >
            <option value="">Select Suburb</option>
            {uniqueLocations.toSorted().map((item: string, ind: number) => (
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
