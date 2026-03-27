"use client";
import { Tab_Data } from "@/utils/dumydata";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setActiveTab } from "@/store/tabSlice";
import { api } from "@/src/service/axios";
import { useEffect, useState } from "react";

const TabBar: React.FC = () => {
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const dispatch = useDispatch<AppDispatch>();

  const [categoryData, setCategoryData] = useState<any>([]);

  const getCategotyData = async () => {
    try {
      const res = await api.get("recommendation");
      const cetData = res.data;
      const uniqueData = [
        { serviceType: "Most Recommended" },
        ...Array.from(
          new Map(
            cetData?.data?.docs?.map((item: any) => [item.serviceType, item]),
          ).values(),
        ),
      ];
      setCategoryData(uniqueData);
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    getCategotyData();
  }, []);

  return (
    <div className="md:max-w-[1296px] my-20 p-4 mx-auto">
      <div className="flex items-center gap-[12px] overflow-x-auto scrollbar-hide scroll-smooth">
        {categoryData.map((item:any, ind:any) => (
          <button
            key={ind}
            onClick={() => dispatch(setActiveTab(item.serviceType))}
            className={`flex items-center gap-[8px] cursor-pointer px-[20px] py-[11px] rounded-full transition-all
              ${
                activeTab?.toLowerCase() === item.serviceType?.toLowerCase()
                  ? "bg-primary text-white border-[1px] border-border1"
                  : "border-[1px] border-border1 text-tabText"
              }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <p className="capitalize md:text-[16px] font-manrope font-medium whitespace-nowrap">
              {item.serviceType}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
