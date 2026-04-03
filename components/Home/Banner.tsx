"use client";
import { IoMdArrowForward } from "react-icons/io";
import WordRotate from "../ui/word-rotate";
import CustomIcon from "../CustomIcon";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { video_Url } from "@/utils/dumydata";
import { api } from "@/src/service/axios";
import { TypeSearchTerm } from "@/types";

type RecommendationLocation = TypeSearchTerm & {
  addresses: string[];
  businessName: string[];
  serviceType: string[];
  service: string;
};

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState({
    Key: "",
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
      console.log(key, value, "in Location");
    }

    if (key === "service") {
      setSearchTerm((prev) => ({ ...prev, search: value, key: key }));
      console.log(key, value, "in Service");
    }
  };

  const handleSearch = () => {
    if (searchTerm.key === "location") {
      router.push(
        `suberb-search?search=${encodeURIComponent(searchTerm.search.toLocaleLowerCase())}`,
      );
    }
    if (searchTerm.key === "service") {
      router.push(
        `suberb-search?filter=${encodeURIComponent(searchTerm.search)}`,
      );
    }
  };

  const uniqueAddresses = location.map((loc) => loc.addresses);
  const serviceTypes = location.map((loc) => loc.serviceType);
  const uniqueLocations = Array.from(new Set(uniqueAddresses.flat()));
  const uniqueServiceTypes = [...new Set(serviceTypes)];

  const filteredLocations = uniqueLocations.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.search.toLowerCase()),
  );

  const filteredServiceTypes = uniqueServiceTypes.filter((type) =>
    type.toLowerCase().includes(searchTerm.search.toLowerCase()),
  );

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
      <div className="absolute inset-0 bg-black/16 "></div>

      {/* Content */}
      <div
        className={`font-manrope absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-center px-4 sm:px-6 md:px-0 w-full max-w-[900px]`}
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
            {/* <div className="w-68">
              <WordRotate
                words={words}
                className="font-bold font-manrope md:text-[30px] text-[24px] text-white font-monrope"
                duration={1.5}
              />
            </div> */}
          </div>

          <p className="md:text-[18px] text-[14px] font-poppins font-medium md:leading-[24px] leading-[20px] text-white">
            Search your suburb to discover plumbers, electricians, cleaners and
            more — recommended by people nearby, not strangers online.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative flex flex-row items-center gap-4 bg-white rounded-full p-2 md:w-[718px] mx-auto md:mt-5 mt-4 ">
          <input
            value={`${searchTerm.search || ""}`}
            onChange={handleChange}
            type="text"
            placeholder="Enter your suburb or postcode"
            className="w-full  py-2 px-3 text-para text-[14px] sm:text-[16px] outline-none rounded-full"
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
            <div className={`md:w-[560px] mx-auto md:ml-29 left-0 right-0 w-[78%]   bg-white pb-2 absolute ${filteredLocations.length > 6 || filteredServiceTypes.length > 6 ? "h-[120] overflow-hidden overflow-y-scroll " : ""}`}>
              {loading ? (
                <div className="px-4 py-2 text-gray-500">Loading...</div>
              ) : (
                filteredLocations && (

                  <div className="flex flex-wrap flex-col gap-2 justify-start items-start px-4">
                    {filteredLocations.map((loc, index) => (
                      <div
                        key={index}
                        onClick={() => haldleSetTerm("location", loc)}
                        className="text-para text-[16px] font-poppins font-medium cursor-pointer hover:text-blue-500"
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )
              )}
              {filteredServiceTypes && (
                <div className="flex flex-wrap flex-col gap-2 justify-start items-start px-4">
                  {filteredServiceTypes.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => haldleSetTerm("service", service)}
                      className="text-para text-[16px] font-poppins font-medium cursor-pointer hover:text-blue-500"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
