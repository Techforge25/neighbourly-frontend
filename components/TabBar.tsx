"use client";
import { Tab_Data } from "@/utils/dumydata";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setActiveTab } from "@/store/tabSlice";

const TabBar: React.FC = () => {
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="md:max-w-[1296px] my-20 p-4 mx-auto">
      <div className="flex items-center gap-[12px] overflow-x-auto scrollbar-hide">
        {Tab_Data.map((item) => (
          <button
            key={item.title}
            onClick={() => dispatch(setActiveTab(item.title))}
            className={`flex items-center gap-[8px] cursor-pointer px-[20px] py-[11px] rounded-full transition-all
              ${
                activeTab?.toLowerCase() === item.title?.toLowerCase()
                  ? "bg-primary text-white border-[1px] border-border1"
                  : "border-[1px] border-border1 text-tabText"
              }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <p className="capitalize md:text-[16px] font-manrope font-medium whitespace-nowrap">
              {item.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
