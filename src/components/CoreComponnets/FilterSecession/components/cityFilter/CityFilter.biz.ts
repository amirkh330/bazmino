import { CallApi } from "@/settings/axiosConfig";
import { useEffect, useState } from "react";

export const useCityFilter = () => {
  const [whereFilterVisible, setWhereFilterVisible] = useState(false);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    CallApi.get("districts").then(({ data }) => {
      console.log(data);
    });
  }, []);

  return { whereFilterVisible, setWhereFilterVisible };
};
