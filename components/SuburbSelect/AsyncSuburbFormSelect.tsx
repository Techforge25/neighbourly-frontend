"use client";

import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { getSuburbs } from "@/src/discover";
import { useQuery } from "@tanstack/react-query";

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
  const [hasOpened, setHasOpened] = useState(false);

 
  const { data } = useQuery({
    queryKey: ["clusters-dropdown"],
    queryFn: getSuburbs,
    enabled: hasOpened,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const handleOpen = () => {
    if (!hasOpened) setHasOpened(true);
  };

 
  const suburbs = data?.data || [];

  const options: Option[] = suburbs.map((item: any) => ({
    value: item.name,
    label: item.name,
  }));

  
  const loadOptions = async (inputValue: string): Promise<Option[]> => {
    if (!inputValue) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <div className="flex flex-col gap-[6px]">
      <AsyncSelect
        cacheOptions
        defaultOptions={options}  
        isClearable
        placeholder="Select Suburb"
        loadOptions={loadOptions}
        value={value ? { value, label: value } : null}
        onMenuOpen={handleOpen}
        onFocus={handleOpen}
        onChange={(option: any) => {
          setFieldValue("suburb", option?.value || "");
        }}
        onBlur={() => setFieldTouched("suburb", true)}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: "48px",
            borderRadius: "12px",
            borderColor:
              error && touched ? "#ef4444" : "#e5e7eb",
            boxShadow: "none",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 10px",
          }),
        }}
      />
    </div>
  );
};

export default AsyncSuburbFormikSelect;