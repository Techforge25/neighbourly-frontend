"use client";

import React, { useState } from "react";
import Select from "react-select";
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

const AsyncSuburbFormSelect: React.FC<Props> = ({
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

  
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 640;

  return (
    <div className="flex flex-col gap-[6px]">
      <Select
        options={options}
        isClearable
        placeholder="Select Suburb"
        value={value ? { value, label: value } : null}
        onMenuOpen={handleOpen}
        onFocus={handleOpen}
        isSearchable={false}
        menuPortalTarget={document.body}
        menuPosition="fixed"

        
        menuPlacement={isMobile ? "top" : "bottom"}

        onChange={(option: any) => {
          setFieldValue("suburb", option?.value || "");
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
          menuPortal: (base) => ({
            ...base,
            zIndex: 99999,
          }),
          menu: (base) => ({
            ...base,
            zIndex: 99999,
          }),
        }}
      />
    </div>
  );
};

export default AsyncSuburbFormSelect;