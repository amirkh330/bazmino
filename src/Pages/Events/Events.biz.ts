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
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams(); // خواندن پارامترها از URL
  const queryTime = searchParams.get("date");
  const time = new DateObject(queryTime!)
    .convert(gregorian, gregorian_en)
    .format("YYYY-MM-DD");

  const queryType = searchParams.get("games");

  const params = new URLSearchParams({
    page: "1",
    pageSize: "6",
    ...(queryTime && { date: time }),
    ...(queryType && { games: queryType }),
  });

  useEffect(() => {
    setLoading(true);
    CallApi.get(`/events/_filter?${params}`)
    .then(({ data }) => {
      setEventList(data.items);
      setTotal(data.total);
    }).finally(() => {
      setLoading(false);
    });
  }, [queryType, time]);

  return { eventList ,loading};
};
