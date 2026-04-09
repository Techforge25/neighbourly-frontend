"use client";
import { Tab_Data } from "@/utils/dumydata";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setActiveTab } from "@/store/tabSlice";
import { api } from "@/src/service/axios";
import { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const TabBar: React.FC = () => {
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const cardLength = useSelector(
    (state: RootState) => state.cardLength.cardLength,
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = usePathname();
  const param = useSearchParams();
  const search = searchParams.get("search");
  const filter = searchParams.get("filter");
  const dispatch = useDispatch<AppDispatch>();

  const [categoryData, setCategoryData] = useState<any>([]);
  const [locationData, SetLocationData] = useState<any>([]);
  const [selectSuburb, setSelectSuburb] = useState<any>(search?.toString());
  const scrollRef = useRef<HTMLDivElement>(null);

  const getCategotyData = async () => {
    try {
      const res = await api.get(`recommendation`);
      const cetData = res.data;

      const uniqueData = [
        ...Array.from(
          new Map(
            cetData?.data?.recommendations?.docs?.map((item: any) => [
              item.serviceType,
              item,
            ]),
          ).values(),
        ),
      ];

      setCategoryData(uniqueData);
      SetLocationData(cetData?.data?.recommendations?.docs);
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    getCategotyData();
  }, []);

  //  Scroll Functions
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const uniqueLocations = [
    ...new Set(
      locationData
        .map((item: any) => item.addresses.map((address: any) => address))
        .flat(),
    ),
  ];

  const handleSearchChange = (e: any) => {
    setSelectSuburb(e.target.value);
    if (params === "/suberb-search") {
      router.push(
        `/suberb-search?search=${e.target.value.toLocaleLowerCase()}`
      );
      router.refresh();
    } else if (params === "/discover") {
      router.push(`/discover?search=${e.target.value.toLocaleLowerCase()}`
      );
      router.refresh();
    }
    return;
  };

  const handleChangeFilter = (item:any)=>{
    if (filter) {
      router.push('/suberb-search');
      dispatch(setActiveTab(item))
    }else{
      dispatch(setActiveTab(item))
    }
    
  }

  const serviceTypes = ["Plumber", "Electrician", "Handyman"];

  return (
    <div className="md:max-w-[1296px] md:my-4 p-4 mx-auto relative">
      {cardLength ? (
        <div className="flex items-center md:flex-row flex-col space-y-4 justify-between">
          {/* Tab Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Left Button */}
            {/* <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-light-bg hover:bg-lightbg cursor-pointer md:hidden flex"
            >
              <MdKeyboardArrowLeft
                size={20}
                className="text-tabText font-medium"
              />
            </button> */}

            {/* Scrollable Tabs */}
            <div
              ref={scrollRef}
              className="flex items-center gap-[12px] overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {serviceTypes.map((item: any, ind: any) => (
                <button
                  key={ind}
                  onClick={() => handleChangeFilter(item)}
                  className={`flex items-center gap-[8px] cursor-pointer px-[20px] py-[11px] rounded-full transition-all
                ${
                  activeTab?.toLowerCase() === item?.toLowerCase() || item === filter
                    ? "bg-primary text-white border-[1px] border-border1"
                    : "border-[1px] border-border1 text-tabText"
                }`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <p className="capitalize md:text-[16px] font-manrope font-medium whitespace-nowrap">
                    {item}
                  </p>
                </button>
              ))}
            </div>

            {/* Right Button */}
            {/* <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-light-bg hover:bg-lightbg cursor-pointer md:hidden flex"
            >
              <MdKeyboardArrowRight
                size={20}
                className="text-tabText font-medium"
              />
            </button> */}
          </div>

          {/* Area Filter List */}
          <div>
            <div className="flex items-center md:gap-[12px] gap-[10px]">
              <label
                htmlFor="filterBySuburb"
                className="sm:text-[16px] font-manrope font-medium text-textdark"
              >
                Filter by Suburb
              </label>
              <select
                id="filterBySuburb"
                className="border-[1px] border-border-light text-textdark px-[20px] py-[10px] rounded-[12px] md:text-[16px] text-[14px] font-manrope font-medium cursor-pointer outline-none "
                value={selectSuburb}
                onChange={(e) => handleSearchChange(e)}
              >
                {uniqueLocations.toSorted().map((item: any, ind: any) => {
                  return <option key={ind}>{item}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TabBar;
