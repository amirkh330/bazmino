import { CallApi } from "@/settings/axiosConfig";
import { IEventItem } from "@/types/responses/ResponsesTypes";
import { useEffect, useState } from "react";

export const useEvents = () => {
  const [eventList, setEventList] = useState<IEventItem[]>([]);
  const [total, setTotal] = useState<number>();

  useEffect(() => {
    CallApi.get(
      `${import.meta.env.VITE_APP_BASE_URL}/events/_filter?page=${1}&pageSize=6`
    ).then(({ data }) => {
      setEventList(data.items);
      setTotal(data.total);
    });
  }, []);

  return { eventList };
};
