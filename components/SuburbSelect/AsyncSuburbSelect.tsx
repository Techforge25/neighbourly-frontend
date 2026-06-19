"use client";

import React, { useCallback, useState } from "react";
import AsyncSelect from "react-select/async";
import { useDispatch } from "react-redux";
import { setPage } from "@/store/paginationSlice";
import { getSuburbs } from "@/src/discover";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  value: string | null;
  onChangeValue: (value: string) => void;
  disabled?: boolean;
};

const AsyncSuburbSelect: React.FC<Props> = ({
  value,
  onChangeValue,
  disabled,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter");

  const [optionsCache, setOptionsCache] = useState<any[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);


  const handleMenuOpen = async () => {
    if (hasLoaded) return;

    try {
      const res = await getSuburbs();
      const list = res?.data || [];

      const formatted = list.map((item: any) => ({
        value: item.name,
        label: item.name,
      }));

      setOptionsCache(formatted);
      setHasLoaded(true);
    } catch (error) {
      console.error("Suburb fetch error:", error);
    }
  };


  const loadOptions = useCallback(
    async (inputValue: string) => {
      return optionsCache.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    },
    [optionsCache]
  );

  const handleChange = (option: any) => {
    const val = option?.value || "";

    onChangeValue(val);
    dispatch(setPage(1));

    const url = filter
      ? `/discover?search=${val}&filter=${filter}`
      : `/discover?search=${val}`;

    router.push(url);
  };

  return (
    <div className="w-full lg:w-auto relative z-50">
      <AsyncSelect
        cacheOptions
        defaultOptions={optionsCache}
        isClearable
        isDisabled={disabled}
        placeholder="Select Suburb"
        loadOptions={loadOptions}
        onMenuOpen={handleMenuOpen}   
        value={value ? { value, label: value } : null}
        onChange={handleChange}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: "42px",
            borderRadius: "12px",
            borderColor: "#e5e7eb",
            boxShadow: "none",
            cursor: "pointer",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 10px",
          }),
          indicatorsContainer: (base) => ({
            ...base,
            padding: "0 6px",
          }),
        }}
      />
    </div>
  );
};

export default AsyncSuburbSelect;