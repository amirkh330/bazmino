import { CallApi } from "@/settings/axiosConfig";
import { IEventItem } from "@/types/responses/ResponsesTypes";
import { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import { useSearchParams } from "react-router-dom";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

export const useEvents = () => {
  const [eventList, setEventList] = useState<IEventItem[]>([]);
  const [total, setTotal] = useState<number>();
  const [searchParams] = useSearchParams(); // خواندن پارامترها از URL
  useEffect(() => {
    const queryTime = searchParams.get("time");
    const time = new DateObject(queryTime!)
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DDT");
    const queryType = searchParams.get("type");

    CallApi.get(
      `${
        import.meta.env.VITE_APP_BASE_URL
      }/events/_filter?page=${1}&pageSize=6&time=${time}&type=${queryType}`
    ).then(({ data }) => {
      setEventList(data.items);
      setTotal(data.total);
    });
  }, []);

  return { eventList };
};
