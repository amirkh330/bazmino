import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useFilterSecession = () => {
  const [timeFilterVisible, setTimeFilterVisible] = useState(false);
  const [whereFilterVisible, setWhereFilterVisible] = useState(false);
  const [typeFilterVisible, setTypeFilterVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<any>();



  // افزودن فیلتر به URL
  const handleFilterChange = (key:string, value:string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };
  return {
    handleFilterChange,
    timeFilterVisible,
    setTimeFilterVisible,
    whereFilterVisible,
    setWhereFilterVisible,
    typeFilterVisible,
    setTypeFilterVisible
  };
};
