"use client";

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { useQuery } from "@tanstack/react-query";
import { getSuburbs } from "@/src/discover";

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  setFieldValue: (field: string, value: any) => void;
  setFieldTouched: (field: string, touched: boolean) => void;
  error?: string;
  touched?: boolean;
};

const AsyncSuburbFormikSelect: React.FC<Props> = ({
  value,
  setFieldValue,
  setFieldTouched,
  error,
  touched,
}) => {
  const [isOpen, setIsOpen] = useState(false);


  const { data } = useQuery({
    queryKey: ["clusters-dropdown"],
    queryFn: getSuburbs,
    enabled: isOpen,
  });

  const loadOptions = async (inputValue: string): Promise<Option[]> => {
    const res = data || (await getSuburbs());

    return (
      res?.data
        ?.filter((item: any) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        ?.map((item: any) => ({
          value: item.name,
          label: item.name,
        })) || []
    );
  };

  return (
    <div className="flex flex-col gap-[6px]">
      <AsyncSelect
        cacheOptions
        defaultOptions
        isClearable
        placeholder="Select Suburb"
        loadOptions={loadOptions}
        value={value ? { value, label: value } : null}
        onFocus={() => setIsOpen(true)}
        onMenuOpen={() => setIsOpen(true)}
        onChange={(option: any) => {
          const val = option?.value || "";
          setFieldValue("suburb", val);
        }}
        onBlur={() => setFieldTouched("suburb", true)}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: "48px",
            borderRadius: "12px",
            borderColor: error && touched ? "#ef4444" : "#e5e7eb",
            boxShadow: "none",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 10px",
          }),
        }}
      />

      {touched && error && (
        <span className="text-red-500 md:text-[14px] text-[12px]">
          {error}
        </span>
      )}
    </div>
  );
};

export default AsyncSuburbFormikSelect;