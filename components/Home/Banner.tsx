"use client";
import { IoMdArrowForward } from "react-icons/io";
import WordRotate from "../ui/word-rotate";
import CustomIcon from "../CustomIcon";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { sugestidSubrubData, video_Url } from "@/utils/dumydata";
import { api } from "@/src/service/axios";
import { TypeSearchTerm } from "@/types";
import Loader from "../Loader";

type RecommendationLocation = TypeSearchTerm & {
  addresses: string[];
  businessName: string[];
  serviceType: string[];
  service: string;
};

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState({
    key: "",
    search: "",
  });
  const [location, setLocation] = useState<RecommendationLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number,
  ) => {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const searchAPI = async (query: string) => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await api.get(`recommendation`);
      const recommendations = res.data.data.recommendations
        .docs as RecommendationLocation[];
      setLocation(recommendations);
      setLoading(false);
      // console.log("API result:", recommendations);
    } catch (err) {
      console.error("API error:", err);
      setLoading(false);
    }
  };

  const debouncedSearch = useMemo(() => debounce(searchAPI, 3000), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm((prev) => ({ ...prev, search: value }));
    debouncedSearch(value);
  };

  const haldleSetTerm = (key: string, value: string) => {
    if (key === "location") {
      setSearchTerm((prev) => ({ ...prev, search: value, key: key }));
      router.push(`suberb-search?search=${encodeURIComponent(value)}`);
      console.log(key, value, "in Location");
    }

    if (key === "service") {
      setSearchTerm((prev) => ({ ...prev, search: value, key: key }));
      router.push(`suberb-search?filter=${encodeURIComponent(value)}`);
      console.log(key, value, "in Service");
    }
  };

  const handleSearch = () => {
    if (searchTerm.key === "location") {
      router.push(
        `suberb-search?search=${encodeURIComponent(searchTerm.search)}`,
      );
    }
    if (searchTerm.key === "service") {
      router.push(
        `suberb-search?filter=${encodeURIComponent(searchTerm.search)}`,
      );
    } else {
      router.push(`/suberb-search?search=${searchTerm.search}`);
    }
  };

  const uniqueAddresses = location.map((loc) => loc.addresses);
  const serviceTypes = location.map((loc) => loc.serviceType);
  const uniqueLocations = Array.from(new Set(uniqueAddresses.flat()));
  const uniqueServiceTypes = [...new Set(serviceTypes)];

  const filteredLocations = uniqueLocations.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.search.toLowerCase()),
  );

  const filteredServiceTypes = uniqueServiceTypes.filter((type: any) =>
    type.toLowerCase().includes(searchTerm.search.toLowerCase()),
  );

  const handleSuggestedSuburbClick = (suburb: string) => {
    router.push(`suberb-search?search=${encodeURIComponent(suburb)}`);
  };

  return (
    <div className="relative h-[62.2vh] w-full overflow-hidden">
      {/* Video background */}

      <video
        className="absolute top-0 left-0 w-full h-[62.2vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video_Url[1].secure_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 "></div>

      {/* Content */}
      <div
        className={`font-manrope absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6 md:px-0 w-full max-w-[900px]`}
      >
        {/* Heading */}
        <div className="font-manrope md:w-[820px] mx-auto flex flex-col items-center justify-center">
          <div className="flex items-center flex-row justify-center md:gap-3">
            <p className="font-bold font-manrope text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
              Discover services your
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center">
            <p className="font-bold font-manrope text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
              neighbours trust
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative flex flex-row items-center gap-4 bg-white rounded-full p-2 md:w-[718px] mx-auto md:mt-5 mt-4 ">
          <input
            value={`${searchTerm.search || ""}`}
            onChange={handleChange}
            type="text"
            placeholder="Enter your suburb or postcode"
            className="w-full py-2 px-3 text-para text-[16px] outline-none rounded-full"
          />
          <button
            disabled={!searchTerm.search}
            onClick={handleSearch}
            className={`flex items-center justify-center gap-2 bg-secondary text-white min-w-max  px-4 py-2.5 rounded-full text-[14px] sm:text-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Search
            <IoMdArrowForward size={20} className="sm:size-[24px]" />
          </button>
        </div>
        {/* Search Results */}
        {searchTerm.search && (
          <>
            <div
              className={`w-[280px] sm:w-[540px] md:w-[580px] lg:w-[660px] mx-auto  left-0 right-0  rounded-b-[10px]  bg-white z-50 pb-2 absolute ${filteredLocations.length >= 4 || filteredServiceTypes.length >= 4 ? "h-[160] overflow-hidden overflow-y-scroll " : "h-[100px] overflow-hidden overflow-y-auto "}`}
            >
              {loading ? (
                <div className="px-4 py-2 text-gray-500">
                  <Loader width="w-[50px]" height="h-[50px]" />
                </div>
              ) : (
                filteredLocations && (
                  <div className="flex flex-wrap flex-col gap-2 justify-start items-start px-4">
                    {filteredLocations?.toSorted()?.map((loc, index) => (
                      <div
                        key={index}
                        onClick={() => haldleSetTerm("location", loc)}
                        className="text-para text-start text-[16px] font-poppins font-medium cursor-pointer px-4 py-2 border-b-1 border-modal-line rounded-[12px] hover:bg-secondary w-full hover:text-white mt-1 font-manrope"
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )
              )}
              {filteredServiceTypes && (
                <div className="flex flex-wrap flex-col gap-2 justify-start items-start px-4">
                  {filteredServiceTypes
                    ?.toSorted()
                    ?.map((service: any, index) => (
                      <div
                        key={index}
                        onClick={() => haldleSetTerm("service", service)}
                        className="text-para text-start text-[16px] font-poppins font-medium cursor-pointer px-4 py-2 border-b-1 border-modal-line rounded-[12px] hover:bg-secondary w-full hover:text-white mt-1 font-manrope"
                      >
                        {service}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </>
        )}
        {/* Suggested Suburbs */}

        <div className="flex items-center justify-center sm:flex-row flex-col sm:gap-3 gap-1.5 my-4">
          <p className="text-white font-medium font-poppins md:text-[18px] text-[16px]">Suggested Suburbs</p>

          <div className="flex sm:gap-[10px] gap-[5px]">
            {sugestidSubrubData.map((suburb, index) => (
              <button
                onClick={() => handleSuggestedSuburbClick(suburb)}
                key={index}
                className="px-4 cursor-pointer sm:text-[16px] text-[14px] font-poppins py-1.5 rounded-full bg-white/30 text-white text-sm backdrop-blur-md hover:bg-white/40 transition"
              >
                {suburb}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
